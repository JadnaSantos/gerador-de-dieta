import cors from "@fastify/cors";
import Fastify from "fastify";
import { planRoutes } from "./routes/plan";

const app = Fastify({
  logger: true,
});

const port = Number(process.env.PORT) || 3333;

await app.register(cors, {
  origin: "*",
  methods: ["GET", "POST"],
});

app.register(planRoutes);

app.listen({ port }, () => {
  console.log(`Server is running 🚀 - ${port}`);
});
