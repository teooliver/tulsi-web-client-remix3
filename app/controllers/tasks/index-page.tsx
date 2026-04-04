import { css } from "remix/component";

import type { Task } from "../../data/schema.ts";
import { Layout } from "../../ui/layout.tsx";
import { TaskCard } from "../../ui/todo-card.tsx";

export interface IndexPageProps {
  allTaks: Task[];
}

export function IndexPage() {
  return ({ allTaks }: IndexPageProps) => (
    <Layout>
      <h1>Browse Tasks</h1>

      <div class="grid">
        {allTaks.map((task) => {
          return <TaskCard task={task} />;
        })}
      </div>
    </Layout>
  );
}
