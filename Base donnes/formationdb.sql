-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 13 juil. 2024 à 03:40
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
(4, 'Bakhtit', 'Hamza', 'hamza@gmail.com', '0652147584', '2024-06-08', '0');

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
