import { request, response, Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({
    message: "tudo ok",
  });
});

export default routes;