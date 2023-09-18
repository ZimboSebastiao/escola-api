-- Script para criação da tabela alunos

CREATE TABLE `escola`.`alunos` (`id` SMALLINT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(50) NOT NULL , `primeira` DECIMAL(4,2) NOT NULL , `segunda` DECIMAL(4,2) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;