const connection = require('../database/connection')
const {DataTypes, QueryTypes} = require('sequelize')
const Responsavel = require('../database/models/Responsavel')(connection, DataTypes)
const Aluno = require('../database/models/Aluno')(connection, DataTypes)


class ResponsavelController {
    async cadastrar(req, res){
        try {

            const {aluno_id, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local} = req.body

            const sponsor = await Responsavel.create({aluno_id, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local})
            res.status(201).json({sponsor})

        } catch (error) {
            res.json(error)
        }
    }

    async editar(req, res){
        try {
         
            const {id} = req.params

            const {aluno_id, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local} = req.body
         
            const son = await Aluno.findOne({where:{id: aluno_id}})

            if (!son) {  
                res.json('Este id de advogado não existe')
            } else {
                const sponsor = await Responsavel.update({aluno_id, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, trabalho_local},{
                    where:{
                        id
                    }})
                res.status(200).json({sponsor})
            }

        } catch (error) {
            res.json(error)
        }
    }

    async deletar(req, res){
        try {
            const {id} = req.params

            const sponsor = await Responsavel.destroy({
                where:{
                    id
                }})
            res.status(200).json({sponsor})

        } catch (error) {
            res.json(error)

        }
    }

    async showall(req, res){
        try{
            const sponsor = await Responsavel.findAll()

            res.status(200).json({sponsor})
        } catch (error) {
            res.json(error)

        }
    }

    async showbyid(req, res){
        try{

            const {id} = req.params

            const sponsor = await Responsavel.findByPk(id)

            res.status(200).json({sponsor})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async getbyname(req, res){
        try {
            
            var sponsor = []
            const {nome} = req.params

            const id = await connection.query(`SELECT id FROM Responsaveis WHERE lower(nome) GLOB "*${nome.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                sponsor[index] = await Responsavel.findByPk(id[index].id)
            }
            res.status(200).json({sponsor})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

}

exports.default = ResponsavelController;