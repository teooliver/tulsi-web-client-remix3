import { Controller } from "remix/fetch-router";
import routes from "../../routes.js";
import { RemixElement } from "remix/component/jsx-runtime";
import { IndexPage } from "./index-page.tsx";
import { render } from "../../utils/render.tsx";
import type { Task } from "../../data/schema.ts";

const API_URL = process.env.API_URL || "http://localhost:3000";

export default {
  actions: {
    async index(context) {
      let response = await fetch(`${API_URL}/tasks`);
      let allTasks: Task[] = await response.json();

      return render(<IndexPage allTaks={allTasks} />);
    },

    async details(context) {
      let response = await fetch(`${API_URL}/tasks/${context.params.slug}`);
      let task: Task = await response.json();

      return render(<IndexPage allTaks={[task]} />);
    },
  },
} satisfies Controller<typeof routes.tasks>;
