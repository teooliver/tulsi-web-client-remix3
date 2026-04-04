import type { RemixNode } from "remix/component";

import { Document } from "./document.tsx";
import routes from "../routes.js";

export interface LayoutProps {
  title?: string;
  children?: RemixNode;
}

export function Layout() {
  return ({ title, children }: LayoutProps) => {
    return (
      <Document title={title}>
        <header>
          <div class="container">
            <h1>
              <a href={routes.home.href()}>📚 Tulsi</a>
            </h1>
            <nav>
              <a href={routes.home.href()}>Home</a>
            </nav>
          </div>
        </header>
        <main>
          <div class="container">{children}</div>
        </main>
        <footer>
          <div class="container">
            <p>&copy; {new Date().getFullYear()} Tulsi</p>
          </div>
        </footer>
      </Document>
    );
  };
}
