import  express, { request, response } from "express"; 

const app = express() //init express

app.use(express.json()) //receber dados por json

//resposta mostrada pelo navegador
app.get('/', (request, response) => {
    response.json({name:'Matheus', age: 19})
})

//resposta requirida pelo servidor postman
app.post('/userdata/:id', (request, response) => {
    console.log(request.body) //pedindo o body
    console.log(request.params) //pedindo os parametros
    console.log(request.query) //pedindo as query
    console.log(request.headers) //pedindo os headers
    response.status(200).json({sucess:true})
})

app.listen(4000) // porta que vai rodar

