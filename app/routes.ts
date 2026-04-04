import { route } from "remix/fetch-router/routes";

// Define all your routes here. Keys are route names, values are URL patterns.
// This is the single source of truth for your app's URL structure.
let routes = route({
  home: "/",
  tasks: {
    index: "/tasks",
    details: "/tasks/:slug",
  },
});

export default routes;
