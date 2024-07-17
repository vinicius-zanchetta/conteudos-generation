CREATE DATABASE db_escola;
USE db_escola;
CREATE TABLE tb_estudantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    turma VARCHAR(10),
    turno VARCHAR(10),
    nota DECIMAL(4, 2)
);

INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Vinicius Zanchetta", "7A", "Matutino", 8.5);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Geandro Araujo", "8B", "Vespertino", 6.8);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Marcella Sanches", "7B", "Matutino", 7.2);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Paulo Dante", "9A", "Vespertino", 9.0);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Roberdan Almeida", "6A", "Matutino", 5.5);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Isabela dos Santos", "8A", "Vespertino", 7.8);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Samira Oliveira", "7A", "Matutino", 6.0);
INSERT INTO tb_estudantes (nome, turma, turno, nota) VALUES 
("Brunna Bonilha", "9B", "Vespertino", 8.0);

SELECT * FROM tb_estudantes WHERE nota > 7.0;
SELECT * FROM tb_estudantes WHERE nota < 7.0;

UPDATE tb_estudantes SET turma = '7C', turno = 'Matutino', nota = 8.3 WHERE id = 2;