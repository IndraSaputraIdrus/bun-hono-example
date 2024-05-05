import { Hono } from "hono";

const routes = new Hono()

routes.get("/", c => {
  return c.json({ message: "Hello world from api" })
})

routes.get("/test", c => {
  return c.json({ message: "hello from test" })
})

const apiRoute = routes
export default apiRoute

