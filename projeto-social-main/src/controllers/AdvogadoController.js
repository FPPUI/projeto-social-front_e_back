const connection = require('../database/connection')
const {DataTypes, QueryTypes} = require('sequelize')
const Advogado = require('../database/models/Advogado')(connection, DataTypes)

class AdvogadoController {
    async cadastrar(req, res){
        try {
            
            const {registro_oab, nome, endereco, telefone, email} = req.body
            console.log({registro_oab, nome, endereco, telefone, email})
            const lawer = await Advogado.create({registro_oab, nome, endereco, telefone, email})
            console.log(lawer)
            res.status(201).json({lawer})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async editar(req, res){
        try {
            
            const {id} = req.params
            const {registro_oab, nome, endereco, telefone, email} = req.body

            const lawer = await Advogado.update({nome, registro_oab, endereco, telefone, email}, {
                where:{
                    id
                }})
                
            res.status(200).json({lawer})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async deletar(req, res){
        try {

            const {id} = req.params

            const lawer = await Advogado.destroy({
                where:{
                    id
                }})

            res.status(200).json({lawer})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }
    
    async showall(req, res){
        try{
            const lawer = await Advogado.findAll()
            
            res.status(200).json({lawer})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async showbyid(req, res){
        try{

            const {id} = req.params

            const lawer = await Advogado.findByPk(id)

            res.status(200).json({lawer})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }
    
    //FINDERS

    async getbyname(req, res){
        try {
            
            var lawer = []
            const {nome} = req.params

            const id = await connection.query(`SELECT id FROM Advogados WHERE lower(nome) GLOB "*${nome.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                lawer[index] = await Advogado.findByPk(id[index].id)
            }
            res.status(200).json({lawer})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }
    
    async getbyoab(req, res){
        try {
            
            var lawer = []
            const {registro_oab} = req.params

            const id = await connection.query(`SELECT id FROM Advogados WHERE lower(registro_oab) GLOB "*${registro_oab.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                lawer[index] = await Advogado.findByPk(id[index].id)
            }
            res.status(200).json({lawer})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

}

exports.default = AdvogadoController