var restify = require("restify");

function hellof(req, res, next){
    var mensagem ={
        texto:" Ambiente Funcionando com sucesso"
    }
    res.json(mensagem);
    next();
}

//nome para o servidor
var server= restify.createServer({
    name:'conexao 1'
});
//criando endpoints
//http://localhost:5000/hello ->  funcao  Hellof
server.get('/hello',hellof);

//configuraçoes do serve
server.listen(5000, function(){
    console.log('%s sendo executado', server.name);
});




