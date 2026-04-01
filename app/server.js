import { createServer } from "node:http";
import { createRequestListener } from "remix/node-fetch-server";
import router from "./router.js";

// Wrap the router's fetch handler in a Node.js HTTP request listener.
let listener = createRequestListener(router.fetch);

let port = process.env.PORT || 3000;
createServer(listener).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
