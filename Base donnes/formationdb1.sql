-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 12 juil. 2024 à 10:27
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `formationdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `conatct`
--

CREATE TABLE `conatct` (
  `Id_contact` int(11) NOT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prenom` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Telephone` varchar(50) DEFAULT NULL,
  `Entreprise` varchar(50) DEFAULT NULL,
  `Methode` varchar(50) DEFAULT NULL,
  `Objet` varchar(50) DEFAULT NULL,
  `Votre_Message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `conatct`
--

INSERT INTO `conatct` (`Id_contact`, `Nom`, `Prenom`, `Email`, `Telephone`, `Entreprise`, `Methode`, `Objet`, `Votre_Message`) VALUES
(2, 'SAYEH', 'MOKHLIS', 'tarik@gmail.com', '0626154878', 'Non', 'Whatsapp', 'vdfqh', 'hfggggggggggg'),
(3, 'Hamid', 'MOKHLIS', 'hamid@gmail.com', '0652147584', 'Non', 'Email', 'hhhhhhhhhhhhhh', 'hhhhhhhhhhhhhhhhhhh');

-- --------------------------------------------------------

--
-- Structure de la table `contactetd`
--

CREATE TABLE `contactetd` (
  `Id_contact` int(11) NOT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prenom` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Telephone` varchar(50) DEFAULT NULL,
  `Methode` varchar(50) DEFAULT NULL,
  `Objet` varchar(50) DEFAULT NULL,
  `Votre_Message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contactetd`
--

INSERT INTO `contactetd` (`Id_contact`, `Nom`, `Prenom`, `Email`, `Telephone`, `Methode`, `Objet`, `Votre_Message`) VALUES
(3, 'Bakhtit', 'Hamza', 'hamza@gmail.com', '0652147584', 'Whatsapp', 'gtytty', 'yytlet nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();let nom = $(\"#nom\").text().trim();\nlet prenom = $(\"#prenom\").text().trim();\nlet email = $(\"#email\").text().trim();\nlet tel = $(\"#tel\").text().trim();'),
(4, 'Bakhtit', 'Hamza', 'hamza@gmail.com', '0652147584', 'Email', 'sffs', 'ffdf');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `Id_Etd` int(11) NOT NULL,
  `Nom_Etd` varchar(50) DEFAULT NULL,
  `Prenom_Etd` varchar(50) DEFAULT NULL,
  `Email_Etd` varchar(50) DEFAULT NULL,
  `Tel_Etd` varchar(50) DEFAULT NULL,
  `Date_Naiss_Etd` date DEFAULT NULL,
  `Login_Etd` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`Id_Etd`, `Nom_Etd`, `Prenom_Etd`, `Email_Etd`, `Tel_Etd`, `Date_Naiss_Etd`, `Login_Etd`) VALUES
(1, 'HAMID', 'MOKHLIS', 'hamid@gmail.com', '061584848', '2024-06-06', '0'),
(2, 'KARIM', 'KARARA', 'hamid@gmail.com', '0626154878', '2016-01-01', '0'),
(4, 'Bakhtit', 'Hamza', 'hamza@gmail.com', '0652147584', '2024-06-08', '0'),
(5, 'Hamid', 'OMAR', 'sayeh@gmail.com', '0615489625', '2024-06-01', '0'),
(6, 'Bakhtit', 'KARARA', 'sayeh@gmail.com', '0615489625', '2024-06-20', '0'),
(9, 'Sayeh', 'Hamza', 'hamza@gmail.com', '0615489628', '2024-06-08', '0'),
(10, 'Sayeh', 'KARARA', 'hamza@gmail.com', '0615489628', '2024-06-02', '0'),
(11, 'SAYEH', 'MOKHLIS', 'hamza@gmail.com', '0652147584', '2023-06-09', '0'),
(12, 'Hamid', 'KARARA', 'zzzz@gmail.fr', '0652147584', '2024-06-05', '0'),
(13, 'Sayeh', 'MOKHLIS', 'hamid@gmail.com', '0652147584', '2024-06-07', '0'),
(14, 'DAIKAL', 'KARARA', 'hamza@gmail.com', '0615489625', '2024-06-09', '0'),
(15, 'DAIKAL', 'KARARA', 'hamza@gmail.com', '0615489625', '2024-06-09', '0'),
(16, 'DAIKAL', 'KARARA', 'hamza@gmail.com', '0615489625', '2024-06-09', '0'),
(17, 'Daikal', 'MOKHLIS', 'daikal@gmail.com', '0652147584', '2024-06-05', '0'),
(18, 'SAYEH', 'JAWAD', 'hamid@gmail.com', '0615489628', '2024-06-08', '0'),
(19, 'TARIK', 'OUCHERFI', 'tarik@gmail.com', '0658451234', '2001-08-05', 'tarik12345'),
(20, 'ADAM', 'OUCHERFI', 'adam@gmail.com', '05080480505', '1997-05-02', 'adam123'),
(21, 'Adam', 'OUCHerfi', 'adam@gmail.com', '0502154878', '2000-05-08', 'adam123');

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE `formation` (
  `Id_Formation` int(11) NOT NULL,
  `Id_Mod` int(11) NOT NULL,
  `Id_Etd` int(11) NOT NULL,
  `Date_Inscription` date DEFAULT NULL,
  `VolumeHoraireModul` varchar(50) DEFAULT NULL,
  `Prix_Formation` decimal(19,4) DEFAULT NULL,
  `Mode_Paiment_Formation` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`Id_Formation`, `Id_Mod`, `Id_Etd`, `Date_Inscription`, `VolumeHoraireModul`, `Prix_Formation`, `Mode_Paiment_Formation`) VALUES
(3, 1, 1, '2024-02-05', '13', 550.0000, 'CARTE DEBIT'),
(5, 1, 4, '2024-07-18', '55', 5000.0000, 'CARTE CREDIT'),
(4, 2, 2, '2024-06-11', '10', 660.0000, 'CASH'),
(6, 2, 5, '2024-07-25', '55', 2000.0000, 'CASH');

-- --------------------------------------------------------

--
-- Structure de la table `modules`
--

CREATE TABLE `modules` (
  `Id_Mod` int(11) NOT NULL,
  `DesignationMod` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `modules`
--

INSERT INTO `modules` (`Id_Mod`, `DesignationMod`) VALUES
(1, 'PHP'),
(2, 'JAVA');

-- --------------------------------------------------------

--
-- Structure de la table `paiment`
--

CREATE TABLE `paiment` (
  `Id_pay` int(11) NOT NULL,
  `Id_Etd` int(11) NOT NULL,
  `Id_Formation` int(11) NOT NULL,
  `date_pay` date DEFAULT NULL,
  `montant_pay` decimal(19,4) DEFAULT NULL,
  `montant_rest` decimal(19,4) DEFAULT NULL,
  `mode_pay` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `paiment`
--

INSERT INTO `paiment` (`Id_pay`, `Id_Etd`, `Id_Formation`, `date_pay`, `montant_pay`, `montant_rest`, `mode_pay`) VALUES
(1, 4, 5, '2024-07-11', 500.0000, 300.0000, 'Espece'),
(3, 5, 4, '2024-07-17', 400.0000, 0.0000, 'Chéque');

-- --------------------------------------------------------

--
-- Structure de la table `prof`
--

CREATE TABLE `prof` (
  `Id_prof` int(11) NOT NULL,
  `Nom_prof` varchar(50) DEFAULT NULL,
  `prenom_prof` varchar(50) DEFAULT NULL,
  `email_prof` varchar(50) DEFAULT NULL,
  `tel_prof` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `prof`
--

INSERT INTO `prof` (`Id_prof`, `Nom_prof`, `prenom_prof`, `email_prof`, `tel_prof`) VALUES
(1, 'JAWAD', 'DAIKAL', 'jawad@gmail.com', '0615487845'),
(2, 'SAYEH', 'RAFIK', 'sayeh@gmail.com', '0615124578');

-- --------------------------------------------------------

--
-- Structure de la table `reserver`
--

CREATE TABLE `reserver` (
  `ID_res` int(11) NOT NULL,
  `Id_prof` int(11) DEFAULT NULL,
  `Id_Etd` int(11) DEFAULT NULL,
  `Id_Formation` int(11) DEFAULT NULL,
  `Id_Sal` int(11) DEFAULT NULL,
  `Date_Res` date DEFAULT NULL,
  `Heure_Debut_Res` time DEFAULT NULL,
  `Heure_Fin_Res` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reserver`
--

INSERT INTO `reserver` (`ID_res`, `Id_prof`, `Id_Etd`, `Id_Formation`, `Id_Sal`, `Date_Res`, `Heure_Debut_Res`, `Heure_Fin_Res`) VALUES
(1, 2, 1, 3, 2, '2024-06-20', '17:37:14', '21:37:14'),
(2026, 1, 4, 5, 2, '2024-06-19', '17:37:14', '23:48:02'),
(2028, 1, 5, 6, 2, '2024-07-16', '07:16:00', '08:16:00'),
(2029, 2, 5, 6, 2, '2024-08-01', '04:22:00', '04:22:00'),
(2030, 2, 1, 3, 1, '2020-01-01', '08:24:00', '12:24:00'),
(2048, 1, 1, 3, 2, '2024-07-26', '19:05:00', '19:08:00'),
(2060, 1, 4, 5, 1, '2024-07-23', '20:19:00', '22:19:00');

-- --------------------------------------------------------

--
-- Structure de la table `salle_formation`
--

CREATE TABLE `salle_formation` (
  `Id_Sal` int(11) NOT NULL,
  `Designation_Sal` varchar(50) DEFAULT NULL,
  `Type_Sal` varchar(50) DEFAULT NULL,
  `Capacite_Sal` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `salle_formation`
--

INSERT INTO `salle_formation` (`Id_Sal`, `Designation_Sal`, `Type_Sal`, `Capacite_Sal`) VALUES
(1, 'SALLe 4', 'Amphi', '250'),
(2, 'Salle 5', 'Amphi', '100');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_us` int(11) NOT NULL,
  `nom_us` varchar(50) DEFAULT NULL,
  `prenom_us` varchar(50) DEFAULT NULL,
  `email_us` varchar(50) DEFAULT NULL,
  `login_us` varchar(50) DEFAULT NULL,
  `motpass_us` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_us`, `nom_us`, `prenom_us`, `email_us`, `login_us`, `motpass_us`) VALUES
(2, 'OUCHERFI', 'OMAR', 'oucherfiomar@gmail.com', 'Admin', '15987456');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `conatct`
--
ALTER TABLE `conatct`
  ADD PRIMARY KEY (`Id_contact`);

--
-- Index pour la table `contactetd`
--
ALTER TABLE `contactetd`
  ADD PRIMARY KEY (`Id_contact`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`Id_Etd`);

--
-- Index pour la table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`Id_Mod`,`Id_Etd`),
  ADD UNIQUE KEY `Id_Formation` (`Id_Formation`),
  ADD KEY `Id_Etd` (`Id_Etd`);

--
-- Index pour la table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`Id_Mod`);

--
-- Index pour la table `paiment`
--
ALTER TABLE `paiment`
  ADD PRIMARY KEY (`Id_pay`,`Id_Etd`,`Id_Formation`),
  ADD KEY `Id_Formation` (`Id_Formation`),
  ADD KEY `Id_Etd` (`Id_Etd`);

--
-- Index pour la table `prof`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`Id_prof`);

--
-- Index pour la table `reserver`
--
ALTER TABLE `reserver`
  ADD PRIMARY KEY (`ID_res`),
  ADD UNIQUE KEY `Id_prof` (`Id_prof`,`Id_Etd`,`Id_Sal`,`Id_Formation`),
  ADD KEY `Id_Etd` (`Id_Etd`),
  ADD KEY `Id_Sal` (`Id_Sal`),
  ADD KEY `Id_Formation` (`Id_Formation`);

--
-- Index pour la table `salle_formation`
--
ALTER TABLE `salle_formation`
  ADD PRIMARY KEY (`Id_Sal`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_us`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `conatct`
--
ALTER TABLE `conatct`
  MODIFY `Id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `contactetd`
--
ALTER TABLE `contactetd`
  MODIFY `Id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `Id_Etd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `formation`
--
ALTER TABLE `formation`
  MODIFY `Id_Formation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `modules`
--
ALTER TABLE `modules`
  MODIFY `Id_Mod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `paiment`
--
ALTER TABLE `paiment`
  MODIFY `Id_pay` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `prof`
--
ALTER TABLE `prof`
  MODIFY `Id_prof` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `reserver`
--
ALTER TABLE `reserver`
  MODIFY `ID_res` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2061;

--
-- AUTO_INCREMENT pour la table `salle_formation`
--
ALTER TABLE `salle_formation`
  MODIFY `Id_Sal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_us` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `formation`
--
ALTER TABLE `formation`
  ADD CONSTRAINT `formation_ibfk_1` FOREIGN KEY (`Id_Mod`) REFERENCES `modules` (`Id_Mod`),
  ADD CONSTRAINT `formation_ibfk_2` FOREIGN KEY (`Id_Etd`) REFERENCES `etudiant` (`Id_Etd`);

--
-- Contraintes pour la table `paiment`
--
ALTER TABLE `paiment`
  ADD CONSTRAINT `paiment_ibfk_1` FOREIGN KEY (`Id_Formation`) REFERENCES `formation` (`Id_Formation`),
  ADD CONSTRAINT `paiment_ibfk_2` FOREIGN KEY (`Id_Etd`) REFERENCES `etudiant` (`Id_Etd`);

--
-- Contraintes pour la table `reserver`
--
ALTER TABLE `reserver`
  ADD CONSTRAINT `reserver_ibfk_1` FOREIGN KEY (`Id_prof`) REFERENCES `prof` (`Id_prof`),
  ADD CONSTRAINT `reserver_ibfk_2` FOREIGN KEY (`Id_Etd`) REFERENCES `etudiant` (`Id_Etd`),
  ADD CONSTRAINT `reserver_ibfk_3` FOREIGN KEY (`Id_Sal`) REFERENCES `salle_formation` (`Id_Sal`),
  ADD CONSTRAINT `reserver_ibfk_4` FOREIGN KEY (`Id_Formation`) REFERENCES `formation` (`Id_Formation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
