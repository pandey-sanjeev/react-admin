-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2022 at 12:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backendsanjeev`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminid` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `is_deleted` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminid`, `name`, `dob`, `email`, `password`, `is_deleted`) VALUES
(2, 'satyam', '2022-08-31', 'sat@12', 'sat', '1'),
(3, 'saw', '2022-08-31', 'saw@1', 'saw', '1'),
(4, 'sanjeeev', '2022-08-01', 'sp87@1', 'sp87', '1'),
(5, 's', '2022-09-01', 'c@1', 'c', '1'),
(7, 'sabjeev', '2022-09-02', 's@123', 'sw', '1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `about` varchar(250) NOT NULL,
  `adminid` varchar(5) NOT NULL,
  `is_deleted` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `name`, `dob`, `email`, `password`, `about`, `adminid`, `is_deleted`) VALUES
(1, 's', '2022-09-01', 's@q', 'sq', 'hii sq', '', '1'),
(3, 'ssswsdcx', '', '', 'xczxzcxzcczx', 'zcxzcxvzcxv', '', '0'),
(5, 'w', '2022-09-01', 'w@1', 's', ' mkmczxo;cx', '', '0'),
(6, 'pandey', '2022-09-01', 'pa@3', 'pa', ' dh <DM ois i sH', '', '1'),
(7, '', '', '', '', '', '', '0'),
(8, 'saneev', '2022-09-01', 's@t', 'st', 'czxbfn', '', '1'),
(9, 's', '', 'a@1', 's', 's', '', '0'),
(10, 'sa', '2022-09-01', 's@1', 'dsd', 'cvx  cxv', '', '1'),
(11, 'sa', '', '', '', 'dddd', '', '0'),
(12, 'swe', '', '', '', '', '', '0'),
(13, '', '', '', '', 'ss', '', '0'),
(14, 'swe', '2022-09-02', 'sW@12', 'sss', 'zxs  ', '', '0'),
(15, 'sw', '', '', '', '', '', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `adminid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
