// Stylized 3D exploded view of a phone + laptop with orbiting repair parts.
// Loaded as a module; degrades silently (CSS glow backdrop still shows) if
// the CDN import fails or WebGL is unavailable.

const container = document.getElementById('device-scene');

if (container) {
  init().catch(() => {
    /* three.js unavailable — the .scene-glow gradient backdrop still renders */
  });
}

async function init() {
  const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ACCENT = 0x4fe3d0;
  const ACCENT_2 = 0x8b7bff;
  const ACCENT_3 = 0xff5fb0;

  let width = container.clientWidth || 1;
  let height = container.clientHeight || 1;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060810, 0.05);

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0.4, 6.6);
  camera.lookAt(0, 0, 0);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    return;
  }
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  /* ---------- Lights ---------- */
  scene.add(new THREE.AmbientLight(0x445566, 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(3, 5, 4);
  scene.add(key);
  const glowCyan = new THREE.PointLight(ACCENT, 7, 14);
  glowCyan.position.set(-3, 1.2, 3);
  scene.add(glowCyan);
  const glowPurple = new THREE.PointLight(ACCENT_2, 6, 14);
  glowPurple.position.set(3, -1, -2);
  scene.add(glowPurple);

  /* ---------- Texture helpers ---------- */
  function makeCircuitTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#04100e';
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = 'rgba(79,227,208,0.85)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const x = Math.random() * 256, y = Math.random() * 256;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 100, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(79,227,208,0.9)';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect(Math.random() * 240, Math.random() * 240, 6, 6);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function makeKeyboardTexture() {
    const c = document.createElement('canvas');
    c.width = 320; c.height = 200;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#0c0e17';
    ctx.fillRect(0, 0, 320, 200);
    ctx.fillStyle = '#1c2032';
    const cols = 13, rows = 4, pad = 6, kw = (320 - pad * (cols + 1)) / cols, kh = 22;
    for (let r = 0; r < rows; r++) {
      for (let cIdx = 0; cIdx < cols; cIdx++) {
        const x = pad + cIdx * (kw + pad);
        const y = 14 + r * (kh + 8);
        ctx.fillRect(x, y, kw, kh);
      }
    }
    ctx.fillStyle = '#262b42';
    ctx.fillRect(70, 150, 180, 26);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function makeScreenGlowTexture(colorA, colorB) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 128, 128);
    grad.addColorStop(0, colorA);
    grad.addColorStop(1, colorB);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  const circuitTex = makeCircuitTexture();
  const keyboardTex = makeKeyboardTexture();
  const screenGlowTex = makeScreenGlowTexture('#4fe3d0', '#8b7bff');

  /* ---------- Materials ---------- */
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x14161f, metalness: 0.65, roughness: 0.35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f1119, metalness: 0.4, roughness: 0.5 });
  const batteryMat = new THREE.MeshStandardMaterial({ color: 0x102420, metalness: 0.3, roughness: 0.5 });
  const chipMat = new THREE.MeshStandardMaterial({ color: 0xd8b56a, metalness: 0.85, roughness: 0.3 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x060810, roughness: 0.15, metalness: 0, transmission: 0.55, thickness: 0.4,
  });
  const boardMat = new THREE.MeshStandardMaterial({
    color: 0x05100e, map: circuitTex, emissiveMap: circuitTex, emissive: 0x4fe3d0, emissiveIntensity: 0.55, roughness: 0.6,
  });
  const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x1a1d2b, map: keyboardTex, roughness: 0.7 });
  const glowMat = new THREE.MeshBasicMaterial({ map: screenGlowTex, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });

  /* ---------- Phone (exploded) ---------- */
  const phone = new THREE.Group();

  const backPanel = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 0.06), bodyMat);
  backPanel.position.z = -0.35;
  phone.add(backPanel);

  const camBump = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.05), darkMat);
  camBump.position.set(-0.3, 0.75, -0.4);
  phone.add(camBump);
  [[-0.38, 0.82], [-0.22, 0.82], [-0.38, 0.68]].forEach(([x, y]) => {
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.03, 16), darkMat);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(x, y, -0.43);
    phone.add(lens);
  });

  const battery = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.1, 0.09), batteryMat);
  battery.position.z = -0.18;
  phone.add(battery);

  const board = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.4, 0.04), boardMat);
  board.position.z = 0.0;
  phone.add(board);

  const chip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.05), chipMat);
  chip.position.set(0.16, 0.32, 0.05);
  phone.add(chip);

  const screen = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 0.05), glassMat);
  screen.position.z = 0.28;
  phone.add(screen);

  const screenGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.75), glowMat);
  screenGlow.position.z = 0.315;
  phone.add(screenGlow);

  phone.position.set(-1.35, 0.05, 0);
  phone.rotation.set(0.12, 0.55, 0.04);
  scene.add(phone);

  /* ---------- Laptop ---------- */
  const laptop = new THREE.Group();

  const base = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.09, 1.3), bodyMat);
  laptop.add(base);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.02, 1.05), keyboardMat);
  deck.position.set(0, 0.055, -0.05);
  laptop.add(deck);

  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.95, 12), darkMat);
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, 0.06, -0.63);
  laptop.add(hinge);

  const screenPivot = new THREE.Group();
  screenPivot.position.set(0, 0.06, -0.63);
  screenPivot.rotation.x = -1.2;
  laptop.add(screenPivot);

  const lidPanel = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.28, 0.055), bodyMat);
  lidPanel.position.set(0, 0.66, -0.02);
  screenPivot.add(lidPanel);

  const lidGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.08), glowMat);
  lidGlow.position.set(0, 0.66, 0.007);
  screenPivot.add(lidGlow);

  laptop.position.set(1.3, -0.25, 0.15);
  laptop.rotation.set(0.04, -0.42, 0);
  scene.add(laptop);

  /* ---------- Orbiting repair parts ---------- */
  const orbitGroup = new THREE.Group();
  scene.add(orbitGroup);

  function makeScrewdriver() {
    const g = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 10), new THREE.MeshStandardMaterial({ color: 0xb8c0d0, metalness: 0.8, roughness: 0.25 }));
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.28, 10), new THREE.MeshStandardMaterial({ color: ACCENT_3, metalness: 0.3, roughness: 0.5 }));
    handle.position.y = 0.44;
    g.add(shaft, handle);
    return g;
  }

  function makeLensRing() {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.03, 10, 24), new THREE.MeshStandardMaterial({ color: 0xcfd6e6, metalness: 0.8, roughness: 0.2 }));
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 20), new THREE.MeshStandardMaterial({ color: 0x0a0c14, metalness: 0.6, roughness: 0.1 }));
    lens.rotation.x = Math.PI / 2;
    g.add(ring, lens);
    return g;
  }

  const orbiters = [
    { mesh: new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.055, 10, 20), new THREE.MeshStandardMaterial({ color: ACCENT_2, metalness: 0.7, roughness: 0.3 })), radius: 3.1, speed: 0.18, phase: 0, height: 0.6, bob: 0.25 },
    { mesh: makeScrewdriver(), radius: 2.85, speed: -0.24, phase: 2.1, height: -0.4, bob: 0.2 },
    { mesh: makeLensRing(), radius: 3.3, speed: 0.21, phase: 4.2, height: 0.1, bob: 0.3 },
    { mesh: new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.05), chipMat), radius: 2.6, speed: -0.3, phase: 1.2, height: 0.8, bob: 0.2 },
    { mesh: new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.5, 0.03), boardMat), radius: 3.0, speed: 0.15, phase: 5.4, height: -0.75, bob: 0.22 },
  ];
  orbiters.forEach((o) => orbitGroup.add(o.mesh));

  /* ---------- Resize ---------- */
  function resize() {
    width = container.clientWidth || 1;
    height = container.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', resize);
  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(container);
  }

  /* ---------- Pointer parallax ---------- */
  let targetTiltX = 0;
  let targetTiltY = 0;
  container.addEventListener('pointermove', (e) => {
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetTiltY = nx * 0.35;
    targetTiltX = ny * 0.18;
  });
  container.addEventListener('pointerleave', () => {
    targetTiltX = 0;
    targetTiltY = 0;
  });

  const rig = new THREE.Group();
  rig.add(phone, laptop);
  scene.remove(phone, laptop);
  scene.add(rig);

  const baseRigRotationY = 0.15;

  /* ---------- Animate ---------- */
  const clock = new THREE.Clock();

  function tick() {
    if (!prefersReducedMotion) requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    rig.rotation.y += (baseRigRotationY + targetTiltY - rig.rotation.y) * 0.04 + 0.0018;
    rig.rotation.x += (targetTiltX - rig.rotation.x) * 0.04;

    orbitGroup.rotation.y = t * 0.06;
    orbiters.forEach((o) => {
      const a = t * o.speed + o.phase;
      o.mesh.position.set(Math.cos(a) * o.radius, o.height + Math.sin(t * 0.6 + o.phase) * o.bob, Math.sin(a) * o.radius * 0.55);
      o.mesh.rotation.y += 0.01;
      o.mesh.rotation.x += 0.006;
    });

    renderer.render(scene, camera);
  }
  tick();
}
