import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import apiRoute from "./routes/api";


const app = new Hono()

app.get("/", c => {
  return c.json({ message: "Success" })
})

app.route("/api", apiRoute)

export default app
