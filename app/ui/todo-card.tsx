import { Frame, css } from "remix/component";

import type { Task } from "../data/schema.js";
import routes from "../routes.ts";

export interface TaskCardProps {
  task: Task;
}

export function TaskCard() {
  return ({ task }: TaskCardProps) => (
    <div class="task-card">
      <p class="card-title"></p>
      <div class="task-card-body">
        <h3>{task.title}</h3>
        <p class="author">by {task.assigned_to}</p>
        <div
          mix={css({ display: "flex", gap: "0.5rem", alignItems: "center" })}
        >
          <a href={routes.tasks.show.href({ slug: task.slug })} class="btn">
            View Details
          </a>

          <Frame src={routes.fragments.cartButton.href({ bookId: task.id })} />
        </div>
      </div>
    </div>
  );
}
