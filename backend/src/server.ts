import Fastify from "fastify";
import { planRoutes } from "./routes/plan";

const app = Fastify({
  logger: true,
});

const port = Number(process.env.PORT) || 3333;

app.register(planRoutes);

app.listen({ port }, () => {
  console.log(`Server is running 🚀 - ${port}`);
});
