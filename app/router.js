import { createRouter } from "remix/fetch-router";
import { html } from "remix/html-template";
import routes from "./routes.js";

let router = createRouter();

// Map the route definitions to their handlers.
// The controller structure mirrors the route map shape.
router.map(routes, {
  actions: {
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
                <a href="/about">About</a>
                <a href="${routes.greet.href({ name: "world" })}">Greet</a>
              </nav>
              <h1>Welcome to Tulsi</h1>
              <p>This is a minimal Remix 3 app.</p>
            </body>
          </html>
        `),
        { headers: { "Content-Type": "text/html" } }
      );
    },

    about() {
      return new Response(
        String(html`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>About - Tulsi</title>
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
                <a href="/about">About</a>
                <a href="${routes.greet.href({ name: "world" })}">Greet</a>
              </nav>
              <h1>About</h1>
              <p>
                Remix 3 is a ground-up rewrite. No React, no bundler, no
                file-system routing. Just web standards: Fetch API Request/Response,
                code-defined routes, and the <code>html</code> tagged template for
                safe HTML rendering.
              </p>
            </body>
          </html>
        `),
        { headers: { "Content-Type": "text/html" } }
      );
    },

    greet(ctx) {
      let { name } = ctx.params;
      return new Response(
        String(html`
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>Hello ${name} - Tulsi</title>
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
                <a href="/about">About</a>
                <a href="${routes.greet.href({ name: "world" })}">Greet</a>
              </nav>
              <h1>Hello, ${name}!</h1>
              <p>
                This route has a dynamic <code>:name</code> param. Try changing the
                URL to <a href="/greet/remix">/greet/remix</a>.
              </p>
            </body>
          </html>
        `),
        { headers: { "Content-Type": "text/html" } }
      );
    },
  },
});

export default router;
