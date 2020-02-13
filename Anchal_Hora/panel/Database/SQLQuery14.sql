CREATE TABLE EmpInformation(SNo int primary key, Projectid VARCHAR(200) ,  name VARCHAR(500) ,email VARCHAR(200) UNIQUE , [PASSWORD] VARCHAR(200) , [ROLE] VARCHAR(500), ContactNo bigint, ProjectName VARCHAR(200) );

INSERT INTO EmpInformation VALUES ('1', 'P1', 'Anchal','horaanchal@gmail.com', 'anchal', 'User1', '6656676878', 'Web development');
INSERT INTO EmpInformation VALUES ('2', 'P1', 'Anjali','horaanjali@gmail.com', 'anjali', 'User2', '7867665676', 'Web development');
INSERT INTO EmpInformation  VALUES ('3', 'P2', 'Ankush','horaankush@gmail.com', 'ankush', 'User3', '6656566766', 'AI');
INSERT INTO EmpInformation  VALUES ('4', 'P2', 'Resham','horaresham@gmail.com', 'resham', 'User4', '8990876774','AI');
INSERT INTO EmpInformation  VALUES ('5', 'P1', 'Ansh','horaansh@gmail.com', 'ansh', 'Reporting Manager1', '7545347667', 'Web development');
INSERT INTO EmpInformation  VALUES ('6', 'P2', 'Aditya','horaaditya@gmail.com', 'aditya', 'Reporting Manager2', '6378656789', 'AI');
INSERT INTO EmpInformation  VALUES ('7','', 'Raghav','horaraghavl@gmail.com', 'raghav', 'Admin', '5653424789','');

SELECT * from EmpInformation ;
