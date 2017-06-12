DROP DATABASE IF EXISTS CPSLOEvents;
CREATE DATABASE CPSLOEvents;
USE CPSLOEvents;

CREATE TABLE Person (
   id INT AUTO_INCREMENT PRIMARY KEY,
   firstName VARCHAR(50) NOT NULL,
   lastName VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(50) NOT NULL,
   city VARCHAR(50) NOT NULL,
   state VARCHAR(50) NOT NULL, 
   zip VARCHAR(50) NOT NULL,
   country VARCHAR(50) NOT NULL,
   UNIQUE key(email)
);

CREATE TABLE Event (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(80) NOT NULL,
   orgId INT NOT NULL,
   city VARCHAR(50) NOT NULL,
   state VARCHAR(50) NOT NULL,
   zip VARCHAR(50) NOT NULL,
   country VARCHAR(50) NOT NULL,
   addr VARCHAR(50) NOT NULL,
   date DATETIME NOT NULL,
   desc VARCHAR(500) NOT NULL,
   private BOOL NOT NULL,
   CONSTRAINT FKEvent_prsId FOREIGN KEY (id) REFERENCES Person (id)
    ON DELETE CASCADE
);

CREATE TABLE Reservation (
   id INT AUTO_INCREMENT PRIMARY KEY,
   prsId INT NOT NULL,
   evtId INT NOT NULL,
   status ENUM("Going", "Maybe", "Not Going"),
   CONSTRAINT FKReservation_prsId FOREIGN KEY (prsId) REFERENCES Person (id)
      ON DELETE CASCADE,
   CONSTRAINT FKReservation_evtId FOREIGN KEY (evtId) REFERENCES Event (id)
      ON DELETE CASCADE
);
