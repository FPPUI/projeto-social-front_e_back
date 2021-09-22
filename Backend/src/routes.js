const express = require('express')

const router = express.Router()

const advogado_responsavel = require('./controllers/AdvogadoController').default
const advogado_controller = new advogado_responsavel()

const cadastro_estudantes = require('./controllers/AlunoController').default
const estudantes_controller = new cadastro_estudantes()

const cadastro_responsavel = require('./controllers/ResponsavelController').default
const responsavel_controller = new cadastro_responsavel() 

const cadastro_juridico = require('./controllers/ClienteController').default
const juridico_controller = new cadastro_juridico()


 
router.get('/advogado/showall', advogado_controller.showall)
router.get('/advogado/showbyid/:id', advogado_controller.showbyid)
router.get('/advogado/getbyname/:nome', advogado_controller.getbyname)
router.get('/advogado/getbyoab/:registro_oab', advogado_controller.getbyoab)
router.post('/advogado/create', advogado_controller.cadastrar)
router.put('/advogado/edit/:id', advogado_controller.editar)
router.delete('/advogado/delete/:id', advogado_controller.deletar)


router.get('/aluno/showall', estudantes_controller.showall)
router.get('/aluno/showbyid/:id', estudantes_controller.showbyid)
router.get('/aluno/getbyname/:nome', estudantes_controller.getbyname)
router.get('/aluno/getbymatricula/:matricula', estudantes_controller.getbymatricula)
router.post('/aluno/create', estudantes_controller.cadastrar)
router.put('/aluno/edit/:id', estudantes_controller.editar)
router.delete('/aluno/delete/:id', estudantes_controller.deletar)


router.get('/responsavel/showall', responsavel_controller.showall)
router.get('/responsavel/showbyid/:id', responsavel_controller.showbyid)
router.get('/responsavel/getbyname/:nome', responsavel_controller.getbyname)
router.get('/responsavel/getbycpf/:cpf', responsavel_controller.getbycpf)
router.post('/responsavel/create', responsavel_controller.cadastrar)
router.put('/responsavel/edit/:id', responsavel_controller.editar)
router.delete('/responsavel/delete/:id', responsavel_controller.deletar)


router.get('/cliente/showall', juridico_controller.showall)
router.get('/cliente/showbyid/:id', juridico_controller.showbyid)
router.get('/cliente/getbyname/:nome', juridico_controller.getbyname)
router.get('/cliente/getbyprocesso/:numero_processo', juridico_controller.getbyprocesso)
router.post('/cliente/create', juridico_controller.cadastrar)
router.put('/cliente/edit/:id', juridico_controller.editar)
router.delete('/cliente/delete/:id', juridico_controller.deletar)

//router.get('/export_student', estudantes_controller.export)
//router.get('/export_lawer', advogado_controller.export)
//router.get('/export_client', juridico_controller.export)
//router.get('/export_sponsor', responsavel_controller.export)

module.exports = router
