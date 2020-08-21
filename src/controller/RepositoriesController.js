const { v4: uuid } = require('uuid');
const { response } = require('express');

const repositories = [];

module.exports = {
    //Listar repositórios
    index(req, res) {
        try {
            res.json(repositories);
        } catch (error) {
            res.json(`Error: ${error}`);
        }
    },

    //Cadastrar repositórios
    store(req, res) {
        try {
            const { title, url, techs, likes } = req.body;  
            const repository = { id: uuid(), url, title, techs, likes: 0};
            repositories.push(repository);
            return res.json(repository);
        
        } catch (error) {
            res.json(`Error: ${error}`);
        }
    },

    //Atualizar repositório
    update(req, res) {
        try {
            const { id } = req.params;
            const { title, url, techs } = req.body;
            const repository = repositories.find(repo => repo.id === id);

            if(!repository) {
                return res.status(400).json({"error": "Repositorie not found."});
            }

            repository.title = title;
            repository.url = url;
            repository.techs = techs;

            return res.status(200).json(repository);

        } catch (error) {
            return res.status(400).json({"Error": error});
        }
    },

    //Deletar repositório
    delete(req, res) {
        try {
            const { id } = req.params;
            const repository = repositories.find(repo => repo.id === id);
            
            if(!repository) {
                return res.status(400).json({"error": "Repositorie not found."});
            }

            repositories.pop(repository);
            return res.status(204).send();

        } catch (error) {
            return res.status(400).json({"Error": error});
        }
    },


/* Likes */

    like(req, res) {
        try {
            const { id } = req.params;
            const repository = repositories.find(repo => repo.id === id);
            
            repository.likes += 1;

            return res.json(repository);
        } catch (error) {
            return res.status(400).json({"Error": error});
        }
    }


}