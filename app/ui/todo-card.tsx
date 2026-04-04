import { css } from "remix/component";

import type { Task } from "../data/schema.js";
import routes from "../routes.js";

export interface TaskCardProps {
  task: Task;
}

export function TaskCard() {
  return ({ task }: TaskCardProps) => (
    <div class="task-card">
      <p class="card-title">{task.title}</p>
      <div class="task-card-body">
        <div
          mix={css({ display: "flex", gap: "0.5rem", alignItems: "center" })}
        >
          <p>{task.description}</p>
          <a href={routes.tasks.details.href({ slug: task.id })} class="btn">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
