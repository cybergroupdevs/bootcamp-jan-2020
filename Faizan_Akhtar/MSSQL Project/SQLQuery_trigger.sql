
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

UPDATE dbo.tWebTechnology SET Path = '25-01-2020' WHERE FileID = 1
