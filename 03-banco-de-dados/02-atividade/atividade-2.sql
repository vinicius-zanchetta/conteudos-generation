CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE tb_categorias (
	id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
	nome VARCHAR(255) NOT NULL
);

CREATE TABLE tb_pizzas (
	id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT,
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id),
	sabor VARCHAR(255) NOT NULL,
    preco DECIMAL (5,2) NOT NULL,
    vegetariana BOOLEAN
);

INSERT INTO tb_categorias (nome) VALUES ('Salgada');
INSERT INTO tb_categorias (nome) VALUES ('Doce');
INSERT INTO tb_categorias (nome) VALUES ('Agridoce');
INSERT INTO tb_categorias (nome) VALUES ('Picante');
INSERT INTO tb_categorias (nome) VALUES ('Especial');

INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (1, 'Mussarela', 45.50, TRUE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (1, 'Calabresa', 50.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (2, 'Chocolate', 42.00, TRUE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (2, 'Banana com Canela', 48.00, TRUE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (3, 'Havaiana', 55.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (3, 'Frango com Catupiry', 60.50, FALSE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (4, 'Mexicana', 70.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, sabor, preco, vegetariana) VALUES (5, 'Quatro Queijos', 65.50, TRUE);


SELECT * FROM tb_pizzas WHERE preco > 45;
SELECT * FROM tb_pizzas WHERE preco BETWEEN 50 AND 100;
SELECT * FROM tb_pizzas WHERE sabor LIKE "%M%";

SELECT * FROM tb_categorias INNER JOIN tb_pizzas 
ON tb_categorias.id = tb_pizzas.categoria_id;

SELECT * FROM tb_categorias INNER JOIN tb_pizzas 
ON tb_categorias.id = tb_pizzas.categoria_id 
WHERE tb_categorias.nome = "Doce";
