CREATE TABLE Cliente ( 
	Id INTEGER IDENTITY(0,1) NOT NULL,
	RazaoSocial NVARCHAR(100) NOT NULL,
	NomeFantasia NVARCHAR(100) NOT NULL,
	Cnpj NVARCHAR(18) NOT NULL,
	AreaAtuacao NVARCHAR(30) NOT NULL,
	Site NVARCHAR(30) NOT NULL,
	NomeContato NVARCHAR(100) NOT NULL,
	Cargo NVARCHAR(30) NOT NULL,
	TelefoneComercial NVARCHAR(14) NOT NULL,
	TelefoneCelular NVARCHAR(15) NULL,
	Email NVARCHAR(30) NOT NULL,
	CEP VARCHAR(9) NOT NULL,
	Logradouro NVARCHAR(100) NOT NULL,
	Numero INTEGER NOT NULL,
	Complemento NVARCHAR(30) NULL,
	Estado VARCHAR(2) NOT NULL,
	Cidade VARCHAR(30) NOT NULL,
	Bairro VARCHAR(60) NOT NULL,
	Senha NVARCHAR(70) NOT NULL,
	Status INTEGER DEFAULT 1 NOT NULL
	
	CONSTRAINT PkClienteId PRIMARY KEY(Id)
);

CREATE TABLE Logins (
	Id INTEGER NOT NULL IDENTITY(0,1),
	IdCliente INTEGER NOT NULL,
	DataHora VARCHAR(60) NOT NULL,
	Token VARCHAR(100) NOT NULL

	CONSTRAINT pk_idLogin PRIMARY KEY(Id),
	CONSTRAINT fk_idcliente FOREIGN KEY (IdCliente)
		REFERENCES Cliente(Id)
);

CREATE TABLE Projeto (
	Id INTEGER IDENTITY(0,1) NOT NULL,
	Nome VARCHAR(60) NOT NULL,
	IdCliente INTEGER NOT NULL

	CONSTRAINT pk_projeto_id PRIMARY KEY(Id),
	CONSTRAINT fk_projetos_id_cliente FOREIGN KEY(IdCliente) 
		REFERENCES Cliente(Id)
);


CREATE TABLE AtivosDevices (
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	GeralNumeroAtivos TINYINT NOT NULL,
	GeralNumeroAtivosC NTEXT NULL,
	GeralValorAtivo TINYINT NOT NULL,
	GeralValorAtivoC NTEXT NULL,
	GeralValorEconomico TINYINT NOT NULL,
	GeralValorEconomicoC NTEXT NULL,
	GeralComplexidadeAtivo TINYINT NOT NULL,
	GeralComplexidadeAtivoC NTEXT NULL,
	GeralHeteroAtivo TINYINT NOT NULL,
	GeralHeteroAtivoC NTEXT NULL,

	PoderLogicaNegocio TINYINT NOT NULL,
	PoderLogicaNegocioC NTEXT NULL,
	PoderProcessamento TINYINT NOT NULL,
	PoderProcessamentoC NTEXT NULL,
	PoderRequerimentos TINYINT NOT NULL,
	PoderRequerimentosC NTEXT NULL,
	PoderGestaoLocal TINYINT NOT NULL,
	PoderGestaoLocalC NTEXT NULL,

	OutrosFonteEnergia TINYINT NOT NULL,
	OutrosFonteEnergiaC NTEXT NULL,
	OutrosAmbiente TINYINT NOT NULL,
	OutrosAmbienteC NTEXT NULL,

	GestaoVidaUtil TINYINT NOT NULL,
	GestaoVidaUtilC NTEXT NULL,
	GestaoRestricoesHardware TINYINT NOT NULL,
	GestaoRestricoesHardwareC NTEXT NULL,
	GestaoRestricoesSoftware TINYINT NOT NULL,
	GestaoRestricoesSoftwareC NTEXT NULL,

	CONSTRAINT PkAtivosDevices PRIMARY KEY(Id),
	CONSTRAINT FkAtivosDevices FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);

CREATE TABLE ComunicacaoConectividade(
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	LocalTecnologia TINYINT NOT NULL,
	LocalTecnologiaC NTEXT NULL,
	LocalLarguraBanda TINYINT NOT NULL,
	LocalLarguraBandaC NTEXT NULL,
	LocalMaximaLatencia TINYINT NOT NULL,
	LocalMaximaLatenciaC NTEXT NULL,

	RemotaTecnologia TINYINT NOT NULL,
	RemotaTecnologiaC NTEXT NULL,
	RemotaLarguraBanda TINYINT NOT NULL,
	RemotaLarguraBandaC NTEXT NULL,
	RemotaMaximaLatencia TINYINT NOT NULL,
	RemotaMaximaLatenciaC NTEXT NULL,

	CONSTRAINT PkComunicacaoConectividade PRIMARY KEY(Id),
	CONSTRAINT FKComunicacaoConectividade FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);

CREATE TABLE ServicosBackend(
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	GeralEstrategiaAplicacao TINYINT NOT NULL,
	GeralEstrategiaAplicacaoC NTEXT NULL,
	GeralComplexidadeNegocio TINYINT NOT NULL,
	GeralComplexidadeNegocioC NTEXT NULL,
	GeralIntegracaoBackend TINYINT NOT NULL,
	GeralIntegracaoBackendC NTEXT NULL,
	GestaoVolumeDados TINYINT NOT NULL,
	GestaoVolumeDadosC NTEXT NULL,
	GestaoVariedadeDados TINYINT NOT NULL,
	GestaoVariedadeDadosC NTEXT	NULL,
	GestaoVariabilidadeDados TINYINT NOT NULL,
	GestaoVariabilidadeDadosC NTEXT NULL,
	GestaoAnalytics TINYINT NOT NULL,
	GestaoAnalyticsC NTEXT NULL,

	CONSTRAINT PkServicosBackend PRIMARY KEY(Id),
	CONSTRAINT FkServicosBackend FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);

CREATE TABLE PadroesRequerimentos(
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	RequerimentosRegiao TINYINT NOT NULL,
	RequerimentosRegiaoC NTEXT NULL,
	RequerimentosIndustria TINYINT NOT NULL,
	RequerimentosIndustriaC NTEXT NULL,
	RequerimentosTecnologia TINYINT NOT NULL,
	RequerimentosTecnologiaC NTEXT NULL,
	PadroesTecnicos TINYINT NOT NULL,
	PadroesTecnicosC NTEXT NULL,
	PadroesFuncionais TINYINT NOT NULL,
	PadroesFuncionaisC NTEXT NULL,

	CONSTRAINT PkPadroesRequerimentos PRIMARY KEY(Id),
	CONSTRAINT FkPadroesRequerimentos FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);

CREATE TABLE AmbienteProjeto(
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	AmbienteTempo TINYINT NOT NULL,
	AmbienteTempoC NTEXT NULL,
	AmbienteBudget TINYINT NOT NULL,
	AmbienteBudgetC NTEXT NULL,
	AmbienteFuncionais TINYINT NOT NULL,
	AmbienteFuncionaisC NTEXT NULL,
	AmbienteTecnicas TINYINT NOT NULL,
	AmbienteTecnicasC NTEXT NULL,

	CONSTRAINT PkAmbienteProjeto PRIMARY KEY(Id),
	CONSTRAINT FkAmbienteProjeto FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);


CREATE TABLE QuestionarioRespostas(
	Id INTEGER IDENTITY(0,1) NOT NULL,
	IdProjeto INTEGER NOT NULL,

	Resposta1 INTEGER NULL,
	RespostaTexto1 TEXT NULL,
	Resposta2 INTEGER NULL,
	RespostaTexto2 TEXT NULL,
	Resposta3 INTEGER NULL,
	RespostaTexto3 TEXT NULL,
	Resposta4 INTEGER NULL,
	RespostaTexto4 TEXT NULL,
	Resposta5 INTEGER NULL,
	RespostaTexto5 TEXT NULL,
	Resposta6 INTEGER NULL,
	RespostaTexto6 TEXT NULL,
	Resposta7 INTEGER NULL,
	RespostaTexto7 TEXT NULL,
	Resposta8 INTEGER NULL,
	RespostaTexto8 TEXT NULL,
	Resposta9 INTEGER NULL,
	RespostaTexto9 TEXT NULL,
	Resposta10 INTEGER NULL,
	RespostaTexto10 TEXT NULL

	CONSTRAINT PkQuestionarioRespostas PRIMARY KEY(Id),
	CONSTRAINT FkQuestionarioProjeto FOREIGN KEY(IdProjeto)
		REFERENCES Projeto(Id)
);