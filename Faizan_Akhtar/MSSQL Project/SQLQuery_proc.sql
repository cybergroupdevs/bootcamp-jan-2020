
CREATE TABLE dbo.tWebTechnology(
FileID INT NOT NULL,
FileName varchar(40),
Path varchar(100))

SELECT * from dbo.tWebTechnology

INSERT into dbo.tWebTechnology values (1, 'Date', '22-01-2020')
INSERT into dbo.tWebTechnology values (2, 'Java File', 'C:/Web Files/22-01-2020/JavaFile')
INSERT into dbo.tWebTechnology values (3, 'HTML File', 'C:/Web Files/22-01-2020/HTMLFile')
INSERT into dbo.tWebTechnology values (4, 'CSS File', 'C:/Web Files/22-01-2020/CSSFile')
INSERT into dbo.tWebTechnology values (5, 'JS File', 'C:/Web Files/22-01-2020/JSFile')
INSERT into dbo.tWebTechnology values (6, 'NodeJS File', 'C:/Web Files/22-01-2020/NodeJSFile')


CREATE PROCEDURE dbo.spUpdateDate
@Date varchar(20)
AS
BEGIN

DECLARE @tempPath varchar(200)
DECLARE @tempDate varchar(50)
DECLARE @tempId int

DECLARE cursorUpdateDate CURSOR
FOR
SELECT FileID, Path FROM dbo.tWebTechnology WHERE FileID > 1
OPEN cursorUpdateDate
FETCH Next from cursorUpdateDate into @tempId, @tempPath
WHILE (@@FETCH_STATUS = 0)

BEGIN
	SET @tempDate = SUBSTRING(@tempPath, 14,10)
	UPDATE dbo.tWebTechnology SET Path = REPLACE(Path,@tempDate, @Date) WHERE FileID>1
	FETCH Next from cursorUpdateDate into @tempId, @tempPath
END
CLOSE cursorUpdateDate
DEALLOCATE cursorUpdateDate
END
