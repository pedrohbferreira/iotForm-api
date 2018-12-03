# iotForm-api
Api em Node.js para complementar o projeto de faculdade, outra parte do projeto em: https://github.com/SherwoodArcher/IOTForm
 
## Rotas 
 
### 1 Cliente  
**rota:** GET /cliente  
*retorno:* 200 OK Cliente[] | 200 OK []  
  
**rota:** GET /cliente/:id  
*retorno:* 200 OK Cliente | 204 No Content  
  
**rota:** POST /cliente  
*retorno:* 201 Created Cliente | 200 OK Cliente  
realiza busca por Email e Cnpj, cria ou retorna existente  
*requisição:*   
```
{
	"RazaoSocial": "Nome da empresa",
	"Cnpj": "00.000.000/0000-00",
	"NomeContato": "Nome teste",
	"TelefoneCelular": "(11) 95555-0220", 
	"Email": "email@email.com", 
	"CEP": "00000-001",
	"Logradouro": "Rua nome da rua",
	"Numero": 10,
	"Estado": "UF",
	"Cidade": "Cidade",
	"Senha": "senha min de 8 digitos"
}
```  
**rota:** PUT /cliente/:id  
*retorno:* 200 OK [] | 404 Not Found {}  
atualiza o cliente com base no id, basta apenas informar os campos  
retorna o número de registros alterados
*requisição:*  
 - **ex.1**  
 ```
 {
	 "RazaoSocial": "Nome da empresa",
	 "Cnpj": "00.000.000/0000-00",
	 "NomeContato": "Nome teste",
	 "TelefoneCelular": "(11) 95555-0220"
 }
 ```  
 - **ex.2**  
 ```
 {
	 "CEP": "00000-001",
	 "Logradouro": "Rua nome da rua",
	 "Numero": 10,
	 "Estado": "UF",
	 "Cidade": "Cidade"
 }
 ```  
**rota:** DELETE /cliente/:id  
*retorna:* 200 OK [] | 400 Bad Request {}  
atuliza o statudo Cliente para 0, retornando o número de registros alterados  
  
  
### 2 Projeto  
**rota:** GET /projeto  
*retorna:* 200 ok Proejto[] | 200 OK []  
  
**rota:** POST / projeto  
*retorna:* 201 Created Projeto  
*requisição:*  
```
{
	"Nome": "Nome do projeto",
	"IdCliente": 0
}
```  
  
**rota:** GET /projeto/:id  
*retrona:* 200 OK Projeto | 204 No Content  
  
**rota:** GET /projeto/cliente/:idCliente  
*retorna:* 200 OK Projeto[] | 200 OK []  
busca todos os projetos de um determinado cliente  
  
**rota:** PUT /projeto/:id  
*retorna:* 200 OK int  
retorna o número de linhas alteradas  
*requisição:*  
```
{
	"Nome": "novo nome do projeto"
}
```  
  
**rota:** DELETE /projeto/:id  
*retorna:* 200 OK int  
retorna número de linhas alteradas