-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2019 at 06:33 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ttapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `class1a`
--

CREATE TABLE `class1a` (
  `Monday` varchar(50) DEFAULT NULL,
  `Tuesday` varchar(50) DEFAULT NULL,
  `Wednesday` varchar(50) DEFAULT NULL,
  `Thursday` varchar(50) DEFAULT NULL,
  `Friday` varchar(50) DEFAULT NULL,
  `Saturday` varchar(50) DEFAULT NULL,
  `Period` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class1a`
--

INSERT INTO `class1a` (`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Period`) VALUES
('hrd', 'cip', 'occ', 'm4', 'labs', 'se', 1),
('hrd', 'daa', 'daa', 'daa', 'lab', 'daa', 2),
('mp', 'ooc', 'se', 'mp', 'lab', 'dc', 3),
('m4', 'dc', 'dc', 'dc', 'm4', 'se', 4),
('lab', 'm4', NULL, 'lab', 'ooc', NULL, 5),
('lab', 'm4', NULL, 'lab', 'ooc', NULL, 6),
('lab', 'ooc', NULL, 'lab', 'mp', NULL, 7);

-- --------------------------------------------------------

--
-- Table structure for table `classhandler`
--

CREATE TABLE `classhandler` (
  `uid` varchar(50) NOT NULL,
  `class` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classhandler`
--

INSERT INTO `classhandler` (`uid`, `class`) VALUES
('cip', '1a'),
('daa', '1a'),
('dc', '1a'),
('hrd', '1a'),
('lab', '1a'),
('m4', '1a'),
('mp', '1a'),
('ooc', '1a'),
('se', '1a');

-- --------------------------------------------------------

--
-- Table structure for table `teachprof`
--

CREATE TABLE `teachprof` (
  `name` varchar(50) NOT NULL,
  `desg` varchar(50) NOT NULL DEFAULT 'Lecturer',
  `dept` varchar(50) NOT NULL,
  `uid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class1a`
--
ALTER TABLE `class1a`
  ADD PRIMARY KEY (`Period`);

--
-- Indexes for table `classhandler`
--
ALTER TABLE `classhandler`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `teachprof`
--
ALTER TABLE `teachprof`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class1a`
--
ALTER TABLE `class1a`
  MODIFY `Period` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
