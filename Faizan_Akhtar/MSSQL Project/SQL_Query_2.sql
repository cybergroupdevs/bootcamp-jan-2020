
CREATE TABLE dbo.tWebTechnology(
FileID INT NOT NULL,
FileName varchar(40),
Path varchar(100))

SELECT * from dbo.tWebTechnology

INSERT into dbo.tWebTechnology values (1, 'Date', '22-01-2020')
INSERT into dbo.tWebTechnology values (2, 'Java File', 'C:/Web Files/22-01-2020/J-File.txt')
INSERT into dbo.tWebTechnology values (3, 'HTML File', 'C:/Web Files/22-01-2020/H-File.txt')
INSERT into dbo.tWebTechnology values (4, 'CSS File', 'C:/Web Files/22-01-2020/C-File.txt')
INSERT into dbo.tWebTechnology values (5, 'JS File', 'C:/Web Files/22-01-2020/J-File.txt')
INSERT into dbo.tWebTechnology values (6, 'NodeJS File', 'C:/Web Files/22-01-2020/N-File.txt')


CREATE PROCEDURE dbo.spUpdateDate
@date varchar(20)
AS
BEGIN

DECLARE @pathStart varchar(200)
DECLARE @pathEnd varchar(200)
DECLARE @valueTemp varchar(300)
DECLARE @idTemp int

DECLARE cursorUpdateDate CURSOR
FOR
SELECT FileID,Path FROM dbo.tWebTechnology WHERE FileID > 1
OPEN cursorUpdateDate
FETCH Next from cursorUpdateDate into @idTemp, @valueTemp
WHILE (@@FETCH_STATUS = 0)

BEGIN
	SET @pathStart = SUBSTRING(@valueTemp, 1,13)
	SET @pathEnd = SUBSTRING(@valueTemp, 24,11)
	SET @valueTemp = @pathStart+@date+@pathEnd
	FETCH Next from cursorUpdateDate into @idTemp, @valueTemp
END
CLOSE cursorUpdateDate
DEALLOCATE cursorUpdateDate
END

CREATE TRIGGER dbo.triggerUpdateDate
ON dbo.tWebTechnology
AFTER UPDATE
as
BEGIN
	DECLARE @update varchar(30)
	SET @update = (SELECT Path from inserted)
	EXECUTE dbo.spUpdateDate @update
END

SELECT * from dbo.tWebTechnology

UPDATE dbo.tWebTechnology SET Path = '24-01-2020' WHERE FileID =1
