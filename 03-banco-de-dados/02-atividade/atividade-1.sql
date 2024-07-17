CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;

CREATE TABLE tb_classes(
	id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
	nome VARCHAR(255) NOT NULL
);

CREATE TABLE tb_personagens(
	id INT AUTO_INCREMENT PRIMARY KEY,
    classe_id INT,
    CONSTRAINT fk_classe FOREIGN KEY (classe_id) REFERENCES tb_classes(id),
	nome VARCHAR(255) NOT NULL,
    poder_de_ataque INT NOT NULL,
    poder_de_defesa INT NOT NULL
);
INSERT INTO tb_classes (nome) VALUES ('Sayajin');
INSERT INTO tb_classes (nome) VALUES ('Namekiniano');
INSERT INTO tb_classes (nome) VALUES ('Humano');
INSERT INTO tb_classes (nome) VALUES ('Androide');
INSERT INTO tb_classes (nome) VALUES ('Majin');

INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (1, 'Goku', 9000, 8000);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (1, 'Vegeta', 8500, 7500);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (2, 'Piccolo', 7000, 6500);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (3, 'Kuririn', 6000, 5500);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (4, 'Androide 18', 8000, 7500);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (4, 'Androide 17', 7900, 7400);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (5, 'Majin Buu', 9500, 9000);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (3, 'Yamcha', 5500, 5000);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (3, 'Chiaotzu', 3000, 1500);
INSERT INTO tb_personagens (classe_id, nome, poder_de_ataque, poder_de_defesa) VALUES (3, 'Yajirobe', 2500, 1800);

SELECT * FROM tb_classes;
SELECT * FROM tb_personagens;

SELECT * FROM tb_personagens WHERE poder_de_ataque > 2000;
SELECT * FROM tb_personagens WHERE poder_de_defesa BETWEEN 1000 AND 2000;
SELECT * FROM tb_personagens WHERE nome LIKE "%C%";

SELECT * FROM tb_classes INNER JOIN tb_personagens ON tb_classes.id = tb_personagens.classe_id;

SELECT tb_classes.nome as CATEGORIA, tb_personagens.nome 
FROM tb_classes, tb_personagens 
WHERE tb_classes.id = tb_personagens.classe_id AND tb_classes.nome = "Sayajin";

