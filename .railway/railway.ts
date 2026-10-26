import { defineRailway, github, project, service } from "railway/iac";
// This repository manages only its own resources in the environment. Other
// repositories export their own partial name.
// See https://docs.railway.com/infrastructure-as-code#multi-repo-projects
export const partial = "smartsolutuions";
export default defineRailway(() => {
  const smartsolutuions = service("smartsolutuions", {
    source: github("comosimpatic/smartsolutuions", { branch: "main", checkSuites: false }),
    build: { buildEnvironment: "V3", builder: "NIXPACKS" },
    start: "npm start",
    replicas: { "sfo": 1 },
    domains: ["www.smartsolutionssvg.com"],
  });

  return project("smart-solutions", {
    variables: { managed: false },
    resources: [smartsolutuions],
  });
});
