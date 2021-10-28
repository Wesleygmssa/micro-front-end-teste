import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@mc/navbar",
//   app: () => System.import("@mc/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
