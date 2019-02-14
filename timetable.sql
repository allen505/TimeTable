-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2019 at 04:15 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timetable`
--

-- --------------------------------------------------------

--
-- Table structure for table `slot_table_4a`
--

CREATE TABLE `slot_table_4a` (
  `Slot ID` varchar(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL COMMENT 'This column will have data in form of [VTU SUBJECT CODE]+[SECTION]'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='The slots and subjects table for class 4A';

-- --------------------------------------------------------

--
-- Table structure for table `subjects_table`
--

CREATE TABLE `subjects_table` (
  `Subject ID` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Semester` int(50) NOT NULL,
  `Elective` enum('Core','Elective') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_table`
--

CREATE TABLE `teacher_table` (
  `Teacher ID` varchar(50) NOT NULL,
  `Name` text NOT NULL,
  `Department` text NOT NULL,
  `Designation` text NOT NULL,
  `Classes` varchar(50) NOT NULL COMMENT 'Stores a string of classes taken by the teachers',
  `Subject 1` varchar(50) NOT NULL COMMENT 'This column will have data in form of [VTU SUBJECT CODE]+[SECTION]',
  `Subject 2` varchar(50) DEFAULT NULL COMMENT 'Holds the 2nd subject handled by a teacher',
  `Subject 3` varchar(50) DEFAULT NULL COMMENT 'Holds the 3rd subject handled by a teacher',
  `Subject 4` varchar(50) DEFAULT NULL COMMENT 'Holds the 4th subject handled by a teacher',
  `Subject 5` varchar(50) DEFAULT NULL COMMENT 'Holds the 5th subject handled by a teacher',
  `Subject 6` varchar(50) DEFAULT NULL COMMENT 'Holds the 6th subject handled by a teacher',
  `Subject 7` varchar(50) DEFAULT NULL COMMENT 'Holds the 7th subject handled by a teacher'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `slot_table_4a`
--
ALTER TABLE `slot_table_4a`
  ADD PRIMARY KEY (`Slot ID`);

--
-- Indexes for table `subjects_table`
--
ALTER TABLE `subjects_table`
  ADD PRIMARY KEY (`Subject ID`);

--
-- Indexes for table `teacher_table`
--
ALTER TABLE `teacher_table`
  ADD PRIMARY KEY (`Teacher ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
