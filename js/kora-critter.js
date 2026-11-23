/* ───────────────────────────────────────────────────────────────────────────
   Kora-style 3D scene for Smart Solutions — the black furry critter.

   The creature is the same build as the critters in the SERVICES band: the
   FUR_VERT / FUR_FRAG shaders, tapered strand cards, surface-sampled roots,
   the eye "dip" where strands are trimmed around the eyes, and the same
   2–6s blink. Source of truth is js/critter-services.jsx — if the fur
   changes there, mirror it here.

   Differences from the band, by intent:
     · one round body (a sphere) instead of the six outline shapes
     · black fur with a grey tip, so the silhouette still reads on white
     · no drop physics — it travels between scroll keyframes instead
     · it turns to look around rather than spinning, because it has a face

   Scene choreography is scroll-driven (see js/kora-nav.js). The renderer
   pauses whenever the canvas is off-screen or the tab is hidden.
   ─────────────────────────────────────────────────────────────────────────── */

import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';

/* ── fur shaders — copied verbatim from js/critter-services.jsx ──────────── */
const FUR_VERT =
  "attribute vec3 aRoot;attribute vec3 aNrm;attribute vec4 aHair;" +
  "uniform float uTime,uWind,uJolt,uStroke;uniform vec3 uHand;" +
  "varying float vS;varying float vTint;varying vec3 vN;" +
  "void main(){" +
  "float s=position.y;float s2=s*s;vec3 n=normalize(aNrm);" +
  "vec3 ref=abs(n.y)<0.9?vec3(0.,1.,0.):vec3(1.,0.,0.);" +
  "vec3 u=normalize(cross(n,ref));vec3 v=cross(n,u);" +
  "float cs=cos(aHair.x),sn=sin(aHair.x);vec3 side=u*cs+v*sn;vec3 lean=v*cs-u*sn;" +
  "float len=aHair.y;" +
  "vec3 p=aRoot+side*position.x+n*s*len+lean*aHair.z*s2*len;" +
  "float sway=0.7*sin(uTime*1.1+dot(aRoot,vec3(1.6,1.2,1.4)))+0.3*sin(uTime*1.7+dot(aRoot,vec3(-2.,2.5,.6)));" +
  "vec3 wd=normalize(vec3(1.,0.,.45));wd-=n*dot(wd,n);" +
  "p+=wd*(sway*uWind*s2*len*.55);" +
  "p+=side*(sin(uTime*32.+aHair.w*40.)*uJolt*s2*len*.45);" +
  "vec3 off=aRoot-uHand;float f=uStroke*smoothstep(.42,0.,length(off));" +
  "vec3 tang=off-n*dot(off,n);tang=length(tang)>1e-4?normalize(tang):side;" +
  "p+=tang*(f*s2*len*1.5)-n*(f*s*len*.35);" +
  "vS=s;vTint=aHair.w;vN=normalize(mat3(modelMatrix)*n);" +
  "gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}";

const FUR_FRAG =
  "uniform vec3 uRoot,uMid,uTip,uSun;varying float vS;varying float vTint;varying vec3 vN;" +
  "void main(){" +
  "vec3 c=mix(uRoot,uMid,smoothstep(0.,.45,vS));c=mix(c,uTip,smoothstep(.5,1.,vS));" +
  "c*=.94+vTint*.12;" +
  "float lit=max(dot(normalize(vN),normalize(uSun)),0.)*.32+.8;" +
  "c*=lit*mix(.86,1.,smoothstep(0.,.5,vS));" +
  "gl_FragColor=vec4(c,1.);}";

const hash = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

/** One tapered card per strand: 5 segments, root at y=0, tip at y=1 */
function strandCard() {
  const segs = 5, pos = [], idx = [];
  for (let k = 0; k <= segs; k++) {
    const t = k / segs, half = 0.019 * Math.pow(1 - t, 0.85) + 0.0008;
    pos.push(-half, t, 0, half, t, 0);
  }
  for (let k = 0; k < segs; k++) {
    const a = k * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  return { pos, idx };
}

/* ── the critter's look ──────────────────────────────────────────────────── */
/* Fur palette, sampled straight out of assets/logo-mark.png: the mark's
   near-black core, its blue, and its chrome highlight. The fur shader blends
   root → mid → tip along each strand, so the creature carries the logo's
   colours in depth — dark at the skin, blue through the body, chrome tips.

   You see fur mostly at the TIPS, so uTip sets the overall read: chrome there
   washes the whole creature pale and the navy only survives in the eye dip.
   The mark's dark core carries the body; chrome stays a frost. */
const FUR_ROOT = '#02050a';   // logo's near-black core (#020404)
const FUR_MID  = '#102d4e';   // logo's deep navy (#141b27 → #3a75ab)
const FUR_TIP  = '#5f93bf';   // logo's blue lifted toward its chrome

const BODY_R   = 0.5;         // same body scale as the band's critters
const EYE      = { r: 0.055, len: 0.11, tilt: 0, gap: 0.13, line: 0.06 }; // "pills"
const REACH_K  = 1.115;       // fur curls past the body, so the real radius is s × this
/* px kept clear on the right for the dot nav. The hover/active LABELS are what
   cost width, and they are hidden under 1200px (see css/kora.css) — below that
   only the bare dots need clearing, which keeps the critter off the headline
   on narrow desktops. Includes headroom for the fur's wind sway. */
const rail = () => (window.innerWidth > 1200 ? 190 : 56);

const canvas = document.getElementById('kora-canvas');
if (canvas) boot();

function boot() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── renderer — matched to the SERVICES band (no tone mapping) ─────────── */
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 6.2);

  /* ── shared fur uniforms ───────────────────────────────────────────────── */
  const uTime   = { value: 0 };
  const uWind   = { value: reduced ? 0 : 1 };
  const uSun    = { value: new THREE.Vector3(0.4, 1, 0.8) };
  const uJolt   = { value: 0 };
  const uStroke = { value: 0 };
  const uHand   = { value: new THREE.Vector3(9, 9, 9) };

  /* ── body ──────────────────────────────────────────────────────────────── */
  // The group is scaled so the critter's reach (body + fur) is ~1 world unit,
  // matching the keyframe scales below.
  const critter = new THREE.Group();
  const reach = BODY_R + 0.15;
  critter.scale.setScalar(1 / reach);
  scene.add(critter);

  const bodyGeo = new THREE.SphereGeometry(BODY_R, 64, 48);
  const core = new THREE.Mesh(bodyGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(FUR_ROOT) }));
  critter.add(core);

  /* ── fur ───────────────────────────────────────────────────────────────── */
  const narrow = window.innerWidth < 860;
  const strands = Math.round(11000 * (narrow ? 0.6 : 1));
  const card = strandCard();

  const front = BODY_R;
  const clear = EYE.r + EYE.len / 2 + 0.09;

  // sample roots over the body; strands near the eyes are trimmed so the eyes
  // sit in a dip, exactly as in the band
  const sampleMesh = new THREE.Mesh(bodyGeo.toNonIndexed(), core.material);
  const sampler = new MeshSurfaceSampler(sampleMesh).build();

  const roots = new Float32Array(strands * 3);
  const nrms  = new Float32Array(strands * 3);
  const hair  = new Float32Array(strands * 4);
  const p = new THREE.Vector3(), n = new THREE.Vector3();

  for (let s = 0; s < strands; s++) {
    const seed = s * 7.13 + 97;
    sampler.sample(p, n);
    n.normalize();
    let len = 0.15 * (0.86 + hash(seed + 3.1) * 0.28);
    if (n.z > 0.4 && p.z > front - 0.2) {
      const d = Math.min(
        Math.hypot(p.x - EYE.gap, p.y - EYE.line),
        Math.hypot(p.x + EYE.gap, p.y - EYE.line)
      );
      if (d < clear) len *= 0.08 + 0.92 * Math.pow(d / clear, 2);
    }
    const bend = n.z > 0.55
      ? (0.42 + hash(seed + 7.9) * 0.36) * Math.min(1, len / 0.12)
      : (hash(seed + 7.9) - 0.5) * 0.38;
    roots.set([p.x, p.y, p.z], s * 3);
    nrms.set([n.x, n.y, n.z], s * 3);
    hair.set([hash(seed + 5.3) * Math.PI * 2, len, bend, hash(seed + 9.2)], s * 4);
  }

  const fg = new THREE.InstancedBufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(card.pos, 3));
  fg.setIndex(card.idx);
  fg.setAttribute('aRoot', new THREE.InstancedBufferAttribute(roots, 3));
  fg.setAttribute('aNrm', new THREE.InstancedBufferAttribute(nrms, 3));
  fg.setAttribute('aHair', new THREE.InstancedBufferAttribute(hair, 4));
  fg.instanceCount = strands;

  // ShaderMaterial skips the output transform, so hand it display-space colours
  const disp = (c) => c.clone().convertLinearToSRGB();
  const fur = new THREE.Mesh(fg, new THREE.ShaderMaterial({
    vertexShader: FUR_VERT,
    fragmentShader: FUR_FRAG,
    side: THREE.DoubleSide,
    uniforms: {
      uTime, uWind, uSun, uJolt, uStroke, uHand,
      uRoot: { value: disp(new THREE.Color(FUR_ROOT)) },
      uMid:  { value: disp(new THREE.Color(FUR_MID)) },
      uTip:  { value: disp(new THREE.Color(FUR_TIP)) },
    },
  }));
  fur.frustumCulled = false;
  critter.add(fur);

  /* ── face ──────────────────────────────────────────────────────────────── */
  const face = new THREE.Group();
  // follow the sphere's surface at the eye height, then stand off by the fur
  // depth — a flat `front + 0.13` would leave the eyes floating off a round body
  face.position.set(0, EYE.line, Math.sqrt(BODY_R * BODY_R - EYE.line * EYE.line) + 0.13);
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const pill = new THREE.CapsuleGeometry(EYE.r, EYE.len, 6, 16);
  const pupils = [];
  for (const side of [-1, 1]) {
    const lid = new THREE.Group();
    lid.position.x = side * EYE.gap;
    const m = new THREE.Mesh(pill, white);
    m.rotation.z = -EYE.tilt;
    m.scale.z = 0.45;
    lid.add(m);
    face.add(lid);
    pupils.push(m);
  }
  critter.add(face);


  /* ── scene keyframes (x, y, scale, tiltX, tiltZ) ───────────────────────── */
  /* World units per screen pixel depends only on viewport HEIGHT (the fov is
     vertical), while the text column is a share of a max-1180px container —
     so a fixed x drifts off-screen on wide viewports and over the type on
     narrow ones. Centre the critter in the gutter beside the text instead. */
  function perUnit() {
    return window.innerHeight /
           (2 * camera.position.z * Math.tan((camera.fov * Math.PI / 180) / 2));
  }

  /** x that centres the critter in the free gutter next to a text column
   *  occupying `share` of the container. The dot rail down the right edge is
   *  reserved space — its labels sit ~150px in, and the critter must not
   *  sit under them. Clamped to keep it fully inside that usable area. */
  function gutterX(s, share) {
    const w = window.innerWidth;
    const pu = perUnit();
    const containerW = Math.min(1180, w * 0.92);
    const textRight = (w - containerW) / 2 + containerW * share;
    const R = rail();
    const usableRight = w - R;                    // stop short of the dot nav
    const centrePx = (textRight + usableRight) / 2 - w / 2;
    const radiusPx = s * REACH_K * pu;
    const maxPx = w / 2 - R - radiusPx;
    return Math.max(0, Math.min(centrePx, maxPx)) / pu;
  }

  function desktopKeys() {
    // shrink a little on narrow desktops, where the gutter gets tight
    const f = Math.min(1, window.innerWidth / 1280);
    const s0 = 0.85 * f, s1 = 0.78 * f, s2 = 0.76 * f;
    return [
      { x:  gutterX(s0, 0.65), y: 0.00, s: s0, rx:  0.06, rz:  0.10 },
      { x: -gutterX(s1, 0.50), y: 0.00, s: s1, rx:  0.14, rz: -0.16 },
      { x:  gutterX(s2, 0.50), y: 0.00, s: s2, rx: -0.12, rz:  0.16 },
      // contact: hovers in the band above the form, clear of the fixed header
      { x:  0.00,              y: 1.10, s: 0.30, rx: 0.00, rz:  0.00 },
    ];
  }
  /* On narrow screens the critter owns the top band and the copy starts
     beneath it (see the <=860px rules in css/kora.css). */
  const MOBILE = [
    // hero: the showpiece, centred in the top band
    { x:  0.00, y: 1.55, s: 0.42, rx:  0.00, rz:  0.00 },
    // content scenes: small, tucked into a top corner so the copy gets the
    // full width — at hero size it would eat a third of every phone screen
    { x:  0.55, y: 1.62, s: 0.24, rx:  0.12, rz: -0.14 },
    { x: -0.55, y: 1.62, s: 0.24, rx: -0.12, rz:  0.14 },
    // contact: back to centre, hovering above the form
    { x:  0.00, y: 1.15, s: 0.26, rx:  0.00, rz:  0.00 },
  ];
  let KEYS = desktopKeys();

  const state = { x: 0, y: 0, s: 1, rx: 0, rz: 0 };
  let tailEase = 0;             // lift clear of the contact form, see koraTail
  const target = { ...KEYS[0] };
  const lerp = (a, b, t) => a + (b - a) * t;

  /* Called by the nav module with a continuous scene position, e.g. 1.37 */
  function setProgress(pr) {
    const i = Math.max(0, Math.min(KEYS.length - 1, Math.floor(pr)));
    const j = Math.min(KEYS.length - 1, i + 1);
    const f = Math.max(0, Math.min(1, pr - i));
    const e = f * f * (3 - 2 * f);           // smoothstep between scenes
    for (const k of ['x', 'y', 's', 'rx', 'rz']) target[k] = lerp(KEYS[i][k], KEYS[j][k], e);
  }
  window.koraSetProgress = setProgress;

  /* ── resize ────────────────────────────────────────────────────────────── */
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const small = w < 860;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.75 : 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = small ? 40 : 32;
    camera.updateProjectionMatrix();
    // after the fov is settled — gutterX() measures through the camera
    KEYS = small ? MOBILE : desktopKeys();
    setProgress(window.koraProgress || 0);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  /* ── stroke the fur with the pointer, as in the band ───────────────────── */
  const hit = new THREE.Vector3();
  let wantStroke = 0;
  let lookX = 0, lookY = 0, aimX = 0, aimY = 0;   // eye/head tracking
  let overBody = false, wasOver = false;
  let jolt = 0, squash = 0, lastMove = -99;

  window.addEventListener('pointermove', (e) => {
    const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
    const ndcY = -(e.clientY / window.innerHeight) * 2 + 1;
    // unproject onto the critter's z = 0 plane, then into its own local space
    hit.set(ndcX, ndcY, 0.5).unproject(camera).sub(camera.position).normalize();
    hit.multiplyScalar(-camera.position.z / hit.z).add(camera.position);
    critter.worldToLocal(hit);
    uHand.value.copy(hit);

    const d = Math.hypot(hit.x, hit.y);
    overBody = d < 0.66;                    // body is radius 0.5 + 0.15 of fur
    wantStroke = d < 1.6 ? 1 : 0;           // shader fades it past ~0.42 anyway
    // where the eyes should aim, in local units, clamped to a sane throw
    aimX = Math.max(-1, Math.min(1, hit.x / 1.3));
    aimY = Math.max(-1, Math.min(1, (hit.y - EYE.line) / 1.3));
    lastMove = uTime.value;
  }, { passive: true });

  // pointer gone from the page: settle back to idle
  window.addEventListener('pointerleave', () => {
    overBody = false; wantStroke = 0; aimX = 0; aimY = 0;
  });

  /* ── pause when off-screen or hidden ───────────────────────────────────── */
  let visible = true;
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(canvas);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) clock.getDelta();   // drop the gap
  });

  /* ── loop ──────────────────────────────────────────────────────────────── */
  const clock = new THREE.Clock();
  const shadowEl = document.querySelector('.kora-shadow');
  let blinkAt = 1.8 + hash(5.5) * 4, blink = -1;

  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!visible || document.hidden) return;

    const t = (uTime.value += reduced ? 0 : dt);

    // ease toward the scroll target
    const k = 1 - Math.pow(0.0015, dt);
    state.x  = lerp(state.x,  target.x,  k);
    state.y  = lerp(state.y,  target.y,  k);
    state.s  = lerp(state.s,  target.s,  k);
    state.rx = lerp(state.rx, target.rx, k);
    state.rz = lerp(state.rz, target.rz, k);

    uStroke.value = lerp(uStroke.value, wantStroke, 1 - Math.pow(0.002, dt));

    /* ── reactions to the pointer ──────────────────────────────────────── */
    // touched: shiver the fur (uJolt) and give it a quick squash
    if (overBody && !wasOver) { jolt = 1; squash = 1; }
    wasOver = overBody;
    jolt = Math.max(0, jolt - dt * 2.6);
    squash = Math.max(0, squash - dt * 2.0);
    uJolt.value = reduced ? 0 : jolt * 0.5;

    // eyes/head track the pointer; after a pause they drift back to idle
    const idle = (t - lastMove) > 2.2;
    const ease = 1 - Math.pow(0.004, dt);
    lookX = lerp(lookX, idle ? 0 : aimX, ease);
    lookY = lerp(lookY, idle ? 0 : aimY, ease);

    // It has a face, so it looks around instead of spinning — and only a
    // little: the eyes sit just off the body, so a wide yaw swings them out
    // to the silhouette's edge and they stop reading as a face.
    const wander = Math.sin(t * 0.42) * 0.13 + Math.sin(t * 0.17) * 0.05;
    const yaw   = reduced ? 0 : (idle ? wander : wander * 0.25 + lookX * 0.30);
    const pitch = reduced ? 0 : Math.sin(t * 0.6) * 0.05 - lookY * 0.16;
    const bob   = reduced ? 0 : Math.sin(t * 0.85) * 0.035;

    // Scrolling deeper into the contact form lifts the critter up and out, so
    // it never sits over the fields the visitor is trying to fill in.
    tailEase = lerp(tailEase, Math.min(1.6, window.koraTail || 0), k);
    const lift = tailEase * 1.45;
    const fade = Math.max(0, 1 - tailEase * 0.55);

    // squash-and-stretch preserves volume; hovering perks it up slightly
    const sc = (state.s / reach) * (overBody ? 1.02 : 1) * fade;
    const sq = Math.sin(squash * Math.PI) * 0.06;

    critter.position.set(state.x, state.y + bob + lift, 0);
    critter.scale.set(sc * (1 + sq), sc * (1 - sq), sc * (1 + sq));
    critter.rotation.set(state.rx + pitch, yaw, state.rz);

    // the eyes themselves shift within their lids, so it reads as a look
    for (const m of pupils) {
      m.position.x = lookX * 0.026;
      m.position.y = lookY * 0.020;
    }

    // blink every 2–6 s, 150 ms — same cadence as the band
    let lid = 1;
    if (!reduced) {
      if (blink < 0 && t > blinkAt) blink = 0;
      if (blink >= 0) {
        blink += dt / 0.15;
        lid = 1 - Math.sin(Math.min(1, blink) * Math.PI) * 0.9;
        if (blink >= 1) { blink = -1; blinkAt = t + 2 + Math.random() * 4; }
      }
    }
    pupils[0].scale.y = pupils[1].scale.y = lid;

    // keep the CSS contact shadow under the critter, in both axes
    if (shadowEl) {
      const pu = perUnit();
      const es = state.s * fade;                        // effective scale
      const px = state.x * pu;
      const py = -(state.y + lift) * pu + es * pu * 1.04;   // sit under the body
      shadowEl.style.transform =
        `translate(calc(-50% + ${px.toFixed(1)}px), calc(-50% + ${py.toFixed(1)}px)) ` +
        `scale(${es.toFixed(3)})`;
      shadowEl.style.opacity = (0.34 * es).toFixed(3);
    }

    renderer.render(scene, camera);
  }
  frame();

  document.documentElement.classList.add('kora-ready');
}
