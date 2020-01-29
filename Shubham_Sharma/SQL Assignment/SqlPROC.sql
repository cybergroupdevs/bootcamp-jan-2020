ALTER PROCEDURE dbo.spUpdatePath
@Date varchar(30)
As
BEGIN
	--temporary variable for storing path
	DECLARE @tempPath varchar(100)
	DECLARE @tempo varchar(50)
	DECLARE @tempId int
	--code for CURSOR
	DECLARE DateCursor CURSOR 
	FOR
	SELECT ID,Path FROM dbo.dummy_config WHERE ID > 1
	OPEN DateCursor
	FETCH Next from DateCursor into @tempId, @tempPath
	WHILE (@@FETCH_STATUS = 0)
	BEGIN
		--SET @Date = (SELECT Path from dbo.dummy_config WHERE ID = 1)
		SET @tempo = SUBSTRING(@tempPath, 18,10)
		UPDATE dbo.dummy_config SET Path = REPLACE(Path,@tempo, @Date) WHERE ID>1
		FETCH Next from DateCursor into @tempId, @tempPath
	END 
	CLOSE DateCursor
	DEALLOCATE DateCursor
END