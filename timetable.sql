-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2019 at 03:19 PM
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
-- Database: `timetable`
--

-- --------------------------------------------------------

--
-- Table structure for table `ajay`
--

CREATE TABLE `ajay` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `krishna`
--

CREATE TABLE `krishna` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mohan`
--

CREATE TABLE `mohan` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `neethu`
--

CREATE TABLE `neethu` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `poornima`
--

CREATE TABLE `poornima` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rajath`
--

CREATE TABLE `rajath` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roopashree`
--

CREATE TABLE `roopashree` (
  `Slot ID` int(50) NOT NULL,
  `Subject ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slot_table_4a`
--

CREATE TABLE `slot_table_4a` (
  `Slot ID` tinyint(50) NOT NULL,
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
-- Table structure for table `subject_teacher`
--

CREATE TABLE `subject_teacher` (
  `Subject ID` varchar(50) NOT NULL,
  `Teacher ID` varchar(50) NOT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `temp_sub`
--

CREATE TABLE `temp_sub` (
  `Subject ID` varchar(50) NOT NULL,
  `Teacher ID` varchar(50) NOT NULL,
  `Date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `slot_table_4a`
--
ALTER TABLE `slot_table_4a`
  ADD PRIMARY KEY (`Slot ID`),
  ADD KEY `Subject ID` (`Subject ID`);

--
-- Indexes for table `subjects_table`
--
ALTER TABLE `subjects_table`
  ADD PRIMARY KEY (`Subject ID`);

--
-- Indexes for table `subject_teacher`
--
ALTER TABLE `subject_teacher`
  ADD KEY `Subject ID` (`Subject ID`),
  ADD KEY `Teacher ID` (`Teacher ID`);

--
-- Indexes for table `teacher_table`
--
ALTER TABLE `teacher_table`
  ADD PRIMARY KEY (`Teacher ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `slot_table_4a`
--
ALTER TABLE `slot_table_4a`
  MODIFY `Slot ID` tinyint(50) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `slot_table_4a`
--
ALTER TABLE `slot_table_4a`
  ADD CONSTRAINT `slot_table_4a_ibfk_1` FOREIGN KEY (`Subject ID`) REFERENCES `subjects_table` (`Subject ID`);

--
-- Constraints for table `subject_teacher`
--
ALTER TABLE `subject_teacher`
  ADD CONSTRAINT `subject_teacher_ibfk_1` FOREIGN KEY (`Subject ID`) REFERENCES `subjects_table` (`Subject ID`),
  ADD CONSTRAINT `subject_teacher_ibfk_2` FOREIGN KEY (`Teacher ID`) REFERENCES `teacher_table` (`Teacher ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
