SELECT * from dbo.assign1
--TRIGGER FOR TABLE DUMMY_TABLE

ALTER TRIGGER dbo.trigg1
ON dbo.assign1
AFTER UPDATE
as
BEGIN
	DECLARE @change varchar(30)
	SET @change = (SELECT Path from inserted)
	EXECUTE updatedate @change
END

UPDATE dbo.assign1 SET Path = '09-01-2020' WHERE emp_ID = 1