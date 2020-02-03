create trigger trigger1
on assignment1
AFTER update
AS
BEGIN
DECLARE @replaced varchar(200)
SET @replaced =(Select paths from inserted)
EXEC proc_task @replaced
end