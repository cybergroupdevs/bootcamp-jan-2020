CREATE PROCEDURE dbo.spUpdatePath
@Date varchar(30)
As
BEGIN
--temporary variable for storing path
DECLARE @tempPath varchar(100)
DECLARE @tempo varchar(50)
DECLARE @tempo1 varchar(50)
DECLARE @tempId int
--code for CURSOR
DECLARE DateCursor CURSOR
FOR
SELECT ID,Path FROM dbo.config WHERE ID > 1
OPEN DateCursor
FETCH Next from DateCursor into @tempId, @tempPath
WHILE (@@FETCH_STATUS = 0)
BEGIN
--SET @Date = (SELECT Path from dbo.dummy_config WHERE ID = 1)
SET @tempo = SUBSTRING(@tempPath, 1,17)
SET @tempo1 = SUBSTRING(@tempPath,28,38)
SET @temppath=@tempo+@Date+@tempo1

FETCH Next from DateCursor into @tempId, @tempPath
END
CLOSE DateCursor
DEALLOCATE DateCursor
END