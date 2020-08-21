const express = require('express');
const routes = express.Router();
const RepositoriesController = require('./src/controller/RepositoriesController');

/* Rotas dos Repositórios */
routes.get("/repositories", RepositoriesController.index);
routes.post("/repositories", RepositoriesController.store);
routes.put("/repositories/:id", RepositoriesController.update);
routes.delete("/repositories/:id", RepositoriesController.delete);

/* Likes */
routes.post("/repositories/:id/like", RepositoriesController.like);

module.exports = routes;