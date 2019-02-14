-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2019 at 06:26 AM
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
('hrd', 'cip', 'occ', 'm4', 'lab1a', 'se', 1),
('hrd', 'daa', 'daa', 'daa', 'lab1a', 'daa', 2),
('mp', 'ooc', 'se', 'mp', 'lab1a', 'dc', 3),
('m4', 'dc', 'dc', 'dc', 'm4', 'se', 4),
('lab1a', 'm4', NULL, 'lab1a', 'ooc', NULL, 5),
('lab1a', 'm4', NULL, 'lab1a', 'ooc', NULL, 6),
('lab1a', 'ooc', NULL, 'lab1a', 'mp', NULL, 7);

-- --------------------------------------------------------

--
-- Table structure for table `class1b`
--

CREATE TABLE `class1b` (
  `Monday` varchar(50) DEFAULT NULL,
  `Tuesday` varchar(50) DEFAULT NULL,
  `Wednesday` varchar(50) DEFAULT NULL,
  `Thursday` varchar(50) DEFAULT NULL,
  `Friday` varchar(50) DEFAULT NULL,
  `Saturday` varchar(50) DEFAULT NULL,
  `Period` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class1b`
--

INSERT INTO `class1b` (`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Period`) VALUES
('dc_2', 'hrd', 'se', 'm4_2', 'mp_2', 'dc_2', 1),
('mplab', 'hrd', 'dc_2', 'dc_2', 'se', 'cip', 2),
('daa_2', 'se', 'mplab', 'mp_2', 'mplab', 'daa_2', 3),
('m4_2', 'mplab', 'mp_2', 'ooc_2', 'daa_2', 'm4_2', 4),
('lab1b', 'daa_2', NULL, 'lab1b', 'lab1b', NULL, 5),
('lab1b', 'm4_2', NULL, 'lab1b', 'lab1b', NULL, 6),
('lab1b', 'mp_2', NULL, 'lab1b', 'lab1b', NULL, 7);

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
-- Table structure for table `labhandler`
--

CREATE TABLE `labhandler` (
  `LabName` varchar(50) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `labClass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table stores the UID of a teacher handling a particular lab for a class';

--
-- Dumping data for table `labhandler`
--

INSERT INTO `labhandler` (`LabName`, `uid`, `labClass`) VALUES
('design', 'daalab', 'lab1a'),
('design', 'daalab2', 'lab2b'),
('microP', 'mplab', 'lab1a'),
('microP', 'mplab2', 'lab2b');

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
-- Dumping data for table `teachprof`
--

INSERT INTO `teachprof` (`name`, `desg`, `dept`, `uid`) VALUES
('Neethu Patil', 'Asst Prof', 'cse', 'cip'),
('Dr Krishna A N', 'HOD', 'cse', 'DAA'),
('Kala C', 'Asst Prof', 'cse', 'daalab'),
('Dr SKC', 'Asst Prof', 'cse', 'daa_2'),
('Roopashree', 'Asst Prof', 'cse', 'dc'),
('Poornima H', 'Asst Prof', 'cse', 'm4'),
('Geetha', 'Asst Prof', 'cse', 'm4_2'),
('Mohan Kumar', 'Asst Prof', 'cse', 'MP'),
('Sarala', 'Asst Prof', 'cse', 'mplab'),
('Dr MS', 'Asst Prof', 'cse', 'mp_2'),
('Rajat', 'Asst Prof', 'cse', 'ooc'),
('Ajay BN', 'Asst Prof', 'cse', 'se');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class1a`
--
ALTER TABLE `class1a`
  ADD PRIMARY KEY (`Period`);

--
-- Indexes for table `class1b`
--
ALTER TABLE `class1b`
  ADD PRIMARY KEY (`Period`);

--
-- Indexes for table `classhandler`
--
ALTER TABLE `classhandler`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `labhandler`
--
ALTER TABLE `labhandler`
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

--
-- AUTO_INCREMENT for table `class1b`
--
ALTER TABLE `class1b`
  MODIFY `Period` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
