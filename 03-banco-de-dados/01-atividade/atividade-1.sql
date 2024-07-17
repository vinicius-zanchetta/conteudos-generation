CREATE DATABASE db_rh;
USE db_rh;
CREATE TABLE tb_colaboradores (
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
	nome VARCHAR(255) NOT NULL,
	CPF VARCHAR(11) NOT NULL,
    cargo varchar(255) NOT NULL,
    setor varchar(255) NOT NULL,
	salario DECIMAL(8,2) NOT NULL
);

INSERT INTO tb_colaboradores (nome, CPF, cargo, setor, salario)
VALUES ("Vinicius", "46106254826", "Desenvolvedor", "TI", 1000.00);
INSERT INTO tb_colaboradores (nome, CPF, cargo, setor, salario) 
VALUES ("Rafael", "55566644411", "Professor", "TI", 20000.00);
INSERT INTO tb_colaboradores (nome, CPF, cargo, setor, salario) 
VALUES ("Samira", "11111111111", "Desenvolvedora", "TI", 25000.00);
INSERT INTO tb_colaboradores (nome, CPF, cargo, setor, salario) 
VALUES ("Marcella", "2222222222", "Gerente de Projetos", "TI", 30000.00);
INSERT INTO tb_colaboradores (nome, CPF, cargo, setor, salario) 
VALUES ("Paulo", "33333333333", "Apresentador", "Marketing", "16000.00");

SELECT * FROM tb_colaboradores WHERE salario < 2000;
SELECT * FROM tb_colaboradores WHERE salario > 2000;

UPDATE tb_colaboradores SET salario = 40000.00, cargo = "CTO" WHERE id = 1;