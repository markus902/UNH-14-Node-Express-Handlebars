CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `devoured` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;