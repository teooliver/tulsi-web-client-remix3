import type { RemixNode } from "remix/component";
import routes from "../routes.js";

export interface DocumentProps {
  title?: string;
  children?: RemixNode;
}

export function Document() {
  return ({ title = "Tulsi", children }: DocumentProps) => (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/app.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
