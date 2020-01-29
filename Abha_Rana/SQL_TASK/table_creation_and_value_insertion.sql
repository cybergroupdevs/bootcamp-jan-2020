--create a new table
create table configdb
( id int identity(1,1)  not null,
  description varchar(30),
  value  varchar (200),
   constraint PK_configdb primary key(id))

--insert values  into table
   USE [abha]
GO

INSERT INTO [dbo].[configdb]
           ([description]
           ,[value])
     VALUES
           ('Date','23-01-2020')
		   GO
INSERT INTO [dbo].[configdb]
           ([description]
           ,[value])
     VALUES
           ('Project','C/ProgramFiles/23-01-2020/Project.txt')
		   GO
INSERT INTO [dbo].[configdb]
           ([description]
           ,[value])
     VALUES
           ('Admin','C/ProgramFiles/23-01-2020/Admin.txt')
		   GO
INSERT INTO [dbo].[configdb]
           ([description]
           ,[value])
     VALUES
           ('HR','C/ProgramFiles/23-01-2020/HR.txt')
		   GO

--view contents of table
   select * from dbo.configdb
 