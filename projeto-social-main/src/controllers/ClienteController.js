const connection = require('../database/connection')
const {DataTypes, QueryTypes} = require('sequelize')
const Cliente = require('../database/models/Cliente')(connection, DataTypes)
const Advogado = require('../database/models/Advogado')(connection, DataTypes)


class ClienteController {
    async cadastrar(req, res){
        try {

            const {advogado_id, nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais} = req.body

            const client = await Cliente.create({advogado_id, nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais})
            res.status(201).json({client})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async editar(req, res){
        try {

            const {id} = req.params

            const {advogado_id, nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais} = req.body

            const adv_id = await Advogado.findOne({where:{id: advogado_id}})

            if (!adv_id) {  
                res.json('Este id de advogado não existe')
            } else {
                const client = await Cliente.update({advogado_id, nome, endereco, cpf, rg, telefone, numero_processo, vara_criminal, data_acusacao, informacoes_adicionais},{
                    where:{
                        id
                    }})
                res.status(200).json({client})
            }

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async deletar(req, res){
        try {
            const {id} = req.params

            const client = await Cliente.destroy({
                where:{
                    id
                }})
            res.status(200).json({client})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async showall(req, res){
        try{
            const client = await Cliente.findAll()

            res.status(200).json({client})
        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async showbyid(req, res){
        try{

            const {id} = req.params

            const client = await Cliente.findByPk(id)

            res.status(200).json({client})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async getbyname(req, res){
        try {
            
            var client = []
            const {nome} = req.params

            const id = await connection.query(`SELECT id FROM Clientes WHERE lower(nome) GLOB "*${nome.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                client[index] = await Cliente.findByPk(id[index].id)
            }
            res.status(200).json({client})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

    async getbyprocesso(req, res){
        try {
            
            var client = []
            const {numero_processo} = req.params

            const id = await connection.query(`SELECT id FROM Clientes WHERE lower(numero_processo) GLOB "*${numero_processo.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                client[index] = await Cliente.findByPk(id[index].id)
            }
            res.status(200).json({client})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

}

exports.default = ClienteController;