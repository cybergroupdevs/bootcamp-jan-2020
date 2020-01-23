SELECT * from dbo.config
--TRIGGER FOR TABLE DUMMY_TABLE
CREATE TRIGGER dbo.dummy_config_trigger
ON dbo.config
AFTER UPDATE
as
BEGIN
DECLARE @change varchar(30)
SET @change = (SELECT Path from inserted)
EXECUTE dbo.spUpdatePath @change
END;

UPDATE dbo.config SET Path = '28-01-2020' WHERE ID = 1