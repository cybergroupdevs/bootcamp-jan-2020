CREATE TABLE [employee] (
	employee_id int NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	first_name varchar(100) NOT NULL,
	last_name varchar(100),
	mobile varchar(30),
	role varchar(50) NOT NULL,
	manager int,
  CONSTRAINT [PK_EMPLOYEE] PRIMARY KEY CLUSTERED
  (
  [employee_id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [employee_project] (
	ep_id int NOT NULL,
	employee_id int NOT NULL,
	project_id int NOT NULL,
  CONSTRAINT [PK_EMPLOYEE_PROJECT] PRIMARY KEY CLUSTERED
  (
  [ep_id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [project] (
	project_id int NOT NULL,
	project_name varchar(255) NOT NULL,
  CONSTRAINT [PK_PROJECT] PRIMARY KEY CLUSTERED
  (
  [project_id] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO

ALTER TABLE [employee_project] WITH CHECK ADD CONSTRAINT [employee_project_fk0] FOREIGN KEY ([employee_id]) REFERENCES [employee]([employee_id])
ON UPDATE CASCADE
GO
ALTER TABLE [employee_project] CHECK CONSTRAINT [employee_project_fk0]
GO
ALTER TABLE [employee_project] WITH CHECK ADD CONSTRAINT [employee_project_fk1] FOREIGN KEY ([project_id]) REFERENCES [project]([project_id])
ON UPDATE CASCADE
GO
ALTER TABLE [employee_project] CHECK CONSTRAINT [employee_project_fk1]
GO


SELECT * FROM employee;

Insert Into employee(employee_id, email, password, first_name, last_name, mobile, role, manager) VALUES (1, 'rakshan_thapar@cygrp.com', '123456', 'Rakshan', 'Thapar', 9999999999, 'Admin', NULL);
Insert Into employee(employee_id, email, password, first_name, last_name, mobile, role, manager) VALUES (2, 'aastha_goel@cygrp.com', '123456', 'Aastha', 'Goel', 8888888888, 'Admin', NULL);