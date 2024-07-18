CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE tb_categorias (
	id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
	nome VARCHAR(255) NOT NULL
);

CREATE TABLE tb_tamanhos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    tamanho VARCHAR(255) NOT NULL
);

CREATE TABLE tb_pizzas (
	id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT,
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id),
    tamanho_id INT,
    CONSTRAINT fk_tamanho FOREIGN KEY (tamanho_id) REFERENCES tb_tamanhos(id),
	sabor VARCHAR(255) NOT NULL,
    preco DECIMAL (5,2) NOT NULL,
    vegetariana BOOLEAN
);

INSERT INTO tb_categorias (nome) VALUES ('Salgada');
INSERT INTO tb_categorias (nome) VALUES ('Doce');
INSERT INTO tb_categorias (nome) VALUES ('Agridoce');
INSERT INTO tb_categorias (nome) VALUES ('Picante');
INSERT INTO tb_categorias (nome) VALUES ('Especial');

INSERT INTO tb_tamanhos (tamanho) VALUES ('Pequena');
INSERT INTO tb_tamanhos (tamanho) VALUES ('Media');
INSERT INTO tb_tamanhos (tamanho) VALUES ('Grande');
INSERT INTO tb_tamanhos (tamanho) VALUES ('Gigante');

INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (1, 4, 'Mussarela', 45.50, TRUE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (1, 3, 'Calabresa', 50.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (2, 2, 'Chocolate', 42.00, TRUE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (2, 1, 'Banana com Canela', 48.00, TRUE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (3, 3, 'Havaiana', 55.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (3, 2, 'Frango com Catupiry', 60.50, FALSE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (4, 3, 'Mexicana', 70.00, FALSE);
INSERT INTO tb_pizzas (categoria_id, tamanho_id, sabor, preco, vegetariana) VALUES (5, 4, 'Quatro Queijos', 65.50, TRUE);

SELECT * FROM tb_pizzas WHERE preco > 45;
SELECT * FROM tb_pizzas WHERE preco BETWEEN 50 AND 100;
SELECT * FROM tb_pizzas WHERE sabor LIKE "%M%";

SELECT * FROM tb_categorias INNER JOIN tb_pizzas 
ON tb_categorias.id = tb_pizzas.categoria_id;

SELECT * FROM tb_tamanhos INNER JOIN tb_pizzas 
ON tb_tamanhos.id = tb_pizzas.tamanho_id;

SELECT * FROM tb_categorias INNER JOIN tb_pizzas 
ON tb_categorias.id = tb_pizzas.categoria_id 
WHERE tb_categorias.nome = "Doce";

SELECT sabor, preco, nome as categoria, tamanho,
 CASE 
        WHEN vegetariana = 0 THEN 'Não'
        WHEN vegetariana = 1 THEN 'Sim'
END AS vegetariana
FROM tb_categorias 
INNER JOIN tb_pizzas ON tb_pizzas.categoria_id = tb_categorias.id
INNER JOIN tb_tamanhos ON tb_pizzas.tamanho_id = tb_tamanhos.id;

SELECT * FROM tb_pizzas
INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.id
INNER JOIN tb_tamanhos ON tb_pizzas.tamanho_id = tb_tamanhos.id;
