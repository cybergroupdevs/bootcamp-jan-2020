ALTER PROCEDURE dbo.task2
@Date varchar(30)
As
BEGIN
--temporary variable for storing value,id,description
DECLARE @tempvalue varchar(100)
DECLARE @temppath1 varchar(50)
DECLARE @temppath2 varchar(50)
DECLARE @tempid int
--declaring CURSOR
DECLARE DateupdateCursor CURSOR
FOR
SELECT id,value FROM dbo.task2 WHERE ID > 1
OPEN DateupdateCursor
FETCH Next from DateupdateCursor into @tempid, @tempvalue
WHILE (@@FETCH_STATUS = 0)
BEGIN
SET  @temppath1=SUBSTRING(@tempvalue,1,15)
SET  @temppath2=SUBSTRING(@tempvalue,27,12)
SET @tempvalue=@temppath1+@date+@temppath2
FETCH Next from DateupdateCursor into @tempid, @tempvalue
END
CLOSE DateupdateCursor
DEALLOCATE DateupdateCursor
END

--declaring trigger
CREATE TRIGGER dbo.configdb_trigger
ON dbo.task2
AFTER UPDATE
as
BEGIN
DECLARE @newupdate varchar(30)
SET @newupdate = (SELECT value from inserted)
EXECUTE dbo.task2 @newupdate
END


--view table contents
select * from dbo.task2

--uppdate command to fire trigger
UPDATE dbo.configdb SET value = '24-01-2020' WHERE ID = 1