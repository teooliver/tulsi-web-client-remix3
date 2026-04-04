import { createRouter } from "remix/fetch-router";
import { asyncContext } from "remix/async-context-middleware";
import { html } from "remix/html-template";
import routes from "./routes.js";
import tasksController from "./controllers/tasks/controller.tsx";

let router = createRouter({
  middleware: [asyncContext()],
});

// Map the route definitions to their handlers.
// The controller structure mirrors the route map shape.
router.map(routes, {
  actions: {
    tasks: tasksController,
    home() {
      return new Response(
        String(html`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>Tulsi Web Client</title>
              <style>
                body {
                  font-family: system-ui, sans-serif;
                  max-width: 600px;
                  margin: 40px auto;
                  padding: 0 20px;
                }
                a {
                  color: #0066cc;
                  margin-right: 12px;
                }
                nav {
                  margin-bottom: 24px;
                  border-bottom: 1px solid #ddd;
                  padding-bottom: 12px;
                }
              </style>
            </head>
            <body>
              <nav>
                <a href="/">Home</a>
                <a href="/tasks">Tasks</a>
              </nav>
              <h1>Welcome to Tulsi</h1>
              <p>This is a minimal Remix 3 app.</p>
            </body>
          </html>
        `),
        { headers: { "Content-Type": "text/html" } },
      );
    },
  },
});

export default router;
