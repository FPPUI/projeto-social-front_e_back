const connection = require('../database/connection')
const {DataTypes, QueryTypes} = require('sequelize')
const Responsavel = require('../database/models/Responsavel')(connection, DataTypes)
const Aluno = require('../database/models/Aluno')(connection, DataTypes)


class ResponsavelController {
    async cadastrar(req, res){
        try {

            const {nome, endereco, telefone, cpf, rg, nacionalidade, estado, cidade, nascimento, trabalho_local, dados_extras} = req.body

            const sponsor = await Responsavel.create({nome, endereco, telefone, cpf, rg, nacionalidade, estado, cidade, nascimento, trabalho_local, dados_extras})
            res.status(201).json({sponsor})

        } catch (error) {
            res.json(error)
        }
    }

    async editar(req, res){
        try {
         
            const {id} = req.params

            const {nome, endereco, telefone, cpf, rg, nacionalidade, estado, cidade, nascimento, trabalho_local, dados_extras} = req.body
         
            const sponsor = await Responsavel.update({nome, endereco, telefone, cpf, rg, nacionalidade, estado, cidade, nascimento, trabalho_local, dados_extras},{
                where:{
                    id
                }})
            res.status(200).json({sponsor})
            

        } catch (error) {
            res.json(error)
        }
    }

    async deletar(req, res){
        try {
            const {id} = req.params
            console.log(id)
            const sponsor = await Responsavel.destroy({
                where:{
                    id:id
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

    async getbycpf(req, res){
        try {
            
            var sponsor = []
            const {cpf} = req.params

            const id = await connection.query(`SELECT id FROM Responsaveis WHERE lower(cpf) GLOB "*${cpf.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                sponsor[index] = await Responsavel.findByPk(id[index].id)
            }
            res.status(200).json({sponsor})

        }
        /*{
            
            const {cpf} = req.params
            console.log(cpf)
            /*const sponsor = await Responsavel.findAll({
                where: {
                  cpf:cpf
                }
              });

            const id = await connection.query(`SELECT * FROM Responsaveis WHERE cpf =${cpf} `,{
                type: QueryTypes.SELECT
            })
            console.log(id)
            
            for (let index = 0; index < id.length; index++) {
                sponsor[index] = await Responsavel.findByPk(id[index].id)
            }
            console.log(sponsor)
            res.status(200).json({sponsor})

        }*/ catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

}

exports.default = ResponsavelController;