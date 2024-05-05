import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import apiRoute from "./routes/api";


const app = new Hono()

app.route("/api", apiRoute)

app.get("*", serveStatic({ root: "./public" }))
app.get("*", serveStatic({ root: "./public/index.html" }))

export default app
