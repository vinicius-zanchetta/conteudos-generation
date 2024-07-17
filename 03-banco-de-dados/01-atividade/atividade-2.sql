CREATE DATABASE db_ecommerce;
USE db_ecommerce;
CREATE TABLE tb_produtos (
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	quantidade INT,
	preco DECIMAL(10,2) NOT NULL
);

INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Smartphone", "Smartphone com tela de 6.5 polegadas, 128GB de armazenamento", 50, 1499.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Laptop", "Laptop com processador Intel i5, 8GB RAM, 256GB SSD", 30, 2999.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Fone de Ouvido", "Fone de ouvido sem fio com cancelamento de ruído", 200, 199.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Relógio Inteligente", "Relógio inteligente com monitor de frequência cardíaca", 100, 499.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Câmera Digital", "Câmera digital com resolução de 20MP e zoom óptico de 10x", 25, 999.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Tablet", "Tablet com tela de 10 polegadas, 64GB de armazenamento", 40, 799.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Teclado Mecânico", "Teclado mecânico com iluminação RGB", 75, 299.99);
INSERT INTO tb_produtos (nome, descricao, quantidade, preco) VALUES 
("Monitor", "Monitor de 27 polegadas, resolução 4K", 15, 1899.99);

SELECT * FROM tb_produtos WHERE preco < 500;
SELECT * FROM tb_produtos WHERE preco > 500;

UPDATE tb_produtos SET nome = "Notebook Gamer", descricao = "", quantidade = 3, preco = 6660.00 WHERE id = 8;