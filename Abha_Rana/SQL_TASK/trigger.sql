--declaring trigger
CREATE TRIGGER dbo.configdb_trigger
ON dbo.configdb
AFTER UPDATE
as
BEGIN
DECLARE @newupdate varchar(30)
SET @newupdate = (SELECT value from inserted)
EXECUTE dbo.usp_configpro @newupdate
END


--view table contents
select * from dbo.configdb

--uppdate command to fire trigger
UPDATE dbo.configdb SET value = '24-01-2020' WHERE ID = 1
 