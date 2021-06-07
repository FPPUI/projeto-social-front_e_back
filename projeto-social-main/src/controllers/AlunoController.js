const connection = require('../database/connection')
const {DataTypes, QueryTypes} = require('sequelize')
const Aluno = require('../database/models/Aluno')(connection, DataTypes)

class AlunoController {
    async cadastrar(req, res){
        try {
            console.log(req.body)
            const {matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs} = req.body

            const student = await Aluno.create({matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs})
            
            res.status(201).json({student})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async editar(req, res){
        try {

            const {id} = req.params
            console.log(req.params)
            const {matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs} = req.body
            console.log(req.body)
            const student = await Aluno.update({matricula, nome, endereco, telefone, nacionalidade, estado, cidade, nascimento, sexo, obs},
                {where:{
                    id
                }})
            res.status(200).json({student})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async deletar(req, res){
        try {

            const {id} = req.params

            const student = await Aluno.destroy({
                where:{
                    id
                }})
            res.status(200).json({student})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

    async showall(req, res){
        try{
            const student = await Aluno.findAll()

            res.status(200).json({student})
        } catch (error) {
            res.json(error.errors[0].message)
        }
    }

  async showbyid(req, res){
        try{

            const {id} = req.params

            const student = await Aluno.findByPk(id)

            res.status(200).json({student})

        } catch (error) {
            res.json(error.errors[0].message)
        }
    }  

    //FINDERS

    async getbyname(req, res){
        try {
            
            var student = []
            const {nome} = req.params

            const id = await connection.query(`SELECT id FROM Alunos WHERE lower(nome) GLOB "*${nome.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                student[index] = await Aluno.findByPk(id[index].id)
            }
            res.status(200).json({student})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }

    async getbymatricula(req, res){
        try {
            
            var student = []
            const {matricula} = req.params

            const id = await connection.query(`SELECT id FROM Alunos WHERE lower(matricula) GLOB "*${matricula.toLowerCase().trim()}*" `,{
                type: QueryTypes.SELECT
            })
            
            for (let index = 0; index < id.length; index++) {
                student[index] = await Aluno.findByPk(id[index].id)
            }
            res.status(200).json({student})

        } catch (error) {
            console.log("Error in 'getbyname'");
            res.json(error)
        }

    }
}

exports.default = AlunoController