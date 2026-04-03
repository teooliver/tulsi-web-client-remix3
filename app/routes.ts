import { route } from "remix/fetch-router/routes";

// Define all your routes here. Keys are route names, values are URL patterns.
// This is the single source of truth for your app's URL structure.
let routes = route({
  home: "/",
  about: "/about",
  greet: "/greet/:name",
  tasks: {
    index: "/tasks",
    show: "/tasks/:slug",
  },
});

export default routes;
