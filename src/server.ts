import { generateUsers } from "./fakeUsers";

const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/users") {
      const amountParam = url.searchParams.get("amount");
      const amount = amountParam ? parseInt(amountParam) : 10;

      return new Response(JSON.stringify(generateUsers(amount)));
    }

    return new Response("404!");
  },
  port: 3005,
});

console.info(`Server running at http://localhost:${server.port}/`);
