# iotForm-api
Api em Node.js para complementar o projeto de faculdade, outra parte do projeto em: https://github.com/SherwoodArcher/IOTForm  
Link: https://iotform-api.azurewebsites.net/
 
## Rotas 
 
### 1 Cliente  
**rota:** GET /cliente  
*retorno:* 200 OK Cliente[ ] | 200 OK [ ]  
  
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
*retorno:* 200 OK [ ] | 404 Not Found {}  
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
*retorna:* 200 OK int  
atuliza o statudo Cliente para 0, retornando o número de registros alterados  
  
  
### 2 Projeto  
**rota:** GET /projeto  
*retorna:* 200 ok Proejto[ ] | 200 OK [ ]  
  
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
*retorna:* 200 OK Projeto[ ] | 200 OK [ ]  
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
  
**rota:** GET /projeto/:id/questionario  
*retorna:* 200 OK Projeto | 204 No Content  
retorna objeto Projeto com todos os seus Questionarios  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "Questionarios": [] }
```  
  
**rota:** GET /projeto/:id/abProjeto  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "AmbienteProjetos": [] }
```  
  
**rota:** GET /projeto/:id/atDevices  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "AtivosDevices": [] }
```  
  
**rota:** GET /projeto/:id/comConect  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "ComConectividades": [] }
```  
  
**rota:** GET /projeto/:id/padroesReq  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "PadroesRequerimentos": [] }
``` 
     
**rota:** GET /projeto/:id/servicosBackend  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ "Id": 0, "Nome": "nome projeto", "IdCliente": 0, "ServicosBackend": [] }
```  
     
**rota:** GET /projeto/:id/full  
*retorna:* 200 OK Projeto | 204 No Content  
```
{ 
	"Id": 0, "Nome": "nome projeto", "IdCliente": 0,
	"Questionarios": [],
	"AmbienteProjetos": [],
	"AtivosDevices": [],
	"ComConectividades": [],
	"PadroesRequerimentos": [], 
	"ServicosBackend": [] 
}
```  
  
**rota:** GET /projeto/full  
*retorna:* 200 OK Projeto[ ] | 200 OK [ ]  
```
[{ 
	"Id": 0, "Nome": "nome projeto", "IdCliente": 0,
	"Questionarios": [],
	"AmbienteProjetos": [],
	"AtivosDevices": [],
	"ComConectividades": [],
	"PadroesRequerimentos": [], 
	"ServicosBackend": [] 
}]
```  
    

### 3 Questionario  
**rota:** GET /questionario  
*retorna:* 200 OK Questionario[ ] | 200 OK [ ]  
  
**rota:** GET /questionario/:id  
*retorna:* 200 OK Questionario | 204 No Content  
  
**rota:** POST /questionario  
*retorna:* 201 OK Created  
  
**rota:** PUT /questionario/:id  
*retorna:* 200 OK int
retorna o número d elinhas alteradas  
  
**rota:** DELETE /questionario/:id  
*retorna:* 200 OK int  
retorna o número d elinhas alteradas  

  

### 4 AmbienteProjetos  
**rota:** GET /ambienteProjeto  
*retorna:* 200 OK AmbienteProjeto[ ] | 200 OK [ ]  
  
**rota:** GET /ambienteProjeto/:id  
*retorna:* 200 OK AmbienteProjeto | 204 No Content  
  
**rota:** GET /ambienteProjeto/projeto/:id  
*retorna:* 200 OK AmbienteProjeto | 200 OK  
busca todos pertencentes a um projeto  
  
**rota:** POST /ambienteProjeto  
*retorna:* 201 Created AmbienteProjeto  
*requisição:*  
```
{
	"IdProjeto": 0, 
	"AmbienteTempo": <int: 1, 2, 3, 4>, "AmbienteTempoC": "comentario",
	"AmbienteBudget": <int: 1, 2, 3, 4>, "AmbienteBudgetC": "comentario",
	"AmbienteFuncionais": <int: 1, 2, 3, 4>, "AmbienteFuncionaisC": "comentario",
	"AmbienteTecnicas": <int: 1, 2, 3, 4>, "AmbienteTecnicasC": "comentario",
}
```  
  
**rota:** PUT /ambienteProjeto/:id  
*retorna:* 201 Created AmbienteProjeto  
*requisição:*  
```
{
	"IdProjeto": 0, 
	"AmbienteTempo": <int: 1, 2, 3, 4>, "AmbienteTempoC": "comentario",
	...
}
```
  
**rota:** DELETE /ambienteProjeto/:id  
*retorna:* 200 Created AmbienteProjeto  
retorna o número de linhas alteradas  
  


### 5 AtivosDevices  
**rota:** GET /ativosDevices  
*retorna:* 200 OK AmbienteProjeto[ ] | 200 OK [ ]  
  
**rota:** GET /ativosDevices/:id  
*retorna:* 200 OK AmbienteProjeto | 204 No Content  
  
**rota:** GET /ativosDevices/projeto:id  
*retorna:* 200 OK AmbienteProjeto[] | 200 OK  
busca todos pertencente a um projeto  
  
**rota:** POST /ambienteProjeto  
*retorna:* 201 Created AmbienteProjeto  
*requisição:*  
```
{
	"IdProjeto": 0, 
	"GeralNumeroAtivos": <int: 1, 2, 3, 4>, "GeralNumeroAtivosC": "comentario",
	"GeralValorAtivo": <int: 1, 2, 3, 4>, "GeralValorAtivoC": "comentario",
	"GeralValorEconomico": <int: 1, 2, 3, 4>, "GeralValorEconomicoC": "comentario",
	...
}
```  
  
**rota:** PUT /ativosDevices/:id  
*retorna:* 201 Created AmbienteProjeto  
*requisição:*  
```
{
	"IdProjeto": 0, 
	"GeralNumeroAtivos": <int: 1, 2, 3, 4>, "GeralNumeroAtivosC": "comentario",
	...
}
```
  
**rota:** DELETE /ativosDevices/:id  
*retorna:* 200 Created AmbienteProjeto  
retorna o número de linhas alteradas  
   
  

### 6 ComunicacaoConectividade  
**rota:** GET /comConect  
*retorna:* 200 OK ComunicacaoConectividade[ ] | 200 OK [ ]  
  
**rota:** GET /comConect/:id  
*retorna:* 200 OK ComunicacaoConectividade | 204 No Content  
  
**rota:** GET /comConect/projeto/:id  
*retorna:* 200 OK ComunicacaoConectividade | 204 No Content  
busca todos vinculados a um projeto  

**rota:** POST /comConect  
*retorna:* 201 OK Created  
  
**rota:** PUT /comConect/:id  
*retorna:* 200 OK int
retorna o número d elinhas alteradas  
  
**rota:** DELETE /comConect/:id  
*retorna:* 200 OK int  
retorna o número d elinhas alteradas  

  
  
### 7   PadroesRequerimentos
**rota:** GET /padroes  
*retorna:* 200 OK PadroesRequerimentos[ ] | 200 OK [ ]  
  
**rota:** GET /padroes/:id  
*retorna:* 200 OK PadroesRequerimentos | 204 No Content  
  
**rota:** GET /padroes/projeto/:id  
*retorna:* 200 OK PadroesRequerimentos | 204 No Content  
busca todos vinculados a um projeto  

**rota:** POST /padroes  
*retorna:* 201 OK Created  
  
**rota:** PUT /padroes/:id  
*retorna:* 200 OK int
retorna o número d elinhas alteradas  
  
**rota:** DELETE /padroes/:id  
*retorna:* 200 OK int  
retorna o número d elinhas alteradas  

  
### 8   ServicosBackend
**rota:** GET /servicos  
*retorna:* 200 OK ServicosBackend[ ] | 200 OK [ ]  
  
**rota:** GET /servicos/:id  
*retorna:* 200 OK ServicosBackend | 204 No Content  
  
**rota:** GET /servicos/projeto/:id  
*retorna:* 200 OK ServicosBackend | 204 No Content  
busca todos vinculados a um projeto  

**rota:** POST /servicos  
*retorna:* 201 OK Created  
  
**rota:** PUT /servicos/:id  
*retorna:* 200 OK int
retorna o número d elinhas alteradas  
  
**rota:** DELETE /servicos/:id  
*retorna:* 200 OK int  
retorna o número d elinhas alteradas  
  
  
  
### 9 Relatórios  
**rota:** GET /relatorios/cliente/:id  
*reorna:* 200 OK Object | 204 No Content  
```
{
  "Cliente": {
    "Id": 0,
    ...,
    "Proejetos": [
      {
        "Id": 0,
        "IdCliente": 0,
        "Questionario": {
          "Id": 0
          "IdProjeto": 0,
          ...
        },
        "AmbienteProjeto: {
          "Id": 0,
          "IdProjeto": 0,
          ...,
          "Medias": { "Ambiente": 0, "Total": 0 }
        },
        "AtivosDevices:" {
          "Id": 0,
          "IdProjeto": 0,
          ...,
          "Medias": { "Geral": 0, "Porder": 0, "Outros": 0, "Gestao: 0, "Total": 0 }
        },
        "ComunicacaoConectividade:" {
          "Id": 0,
          "IdProjeto": 0,
          ...,
          "Medias": { "Local": 0, "Remota": 0, "Total": 0 }
        },
        "ServicosBackend:" {
          "Id": 0,
          "IdProjeto": 0,
          ...,
          "Medias": { "Geral": 0, "Gestao": 0, "Total": 0 }
        },
        "PadroesRequerimento:" {
          "Id": 0,
          "IdProjeto": 0,
          ...,
          "Medias": { "Requerimentos": 0, "Padroes": 0, "Total": 0 }
        }
			}
    ]
  }
}
```