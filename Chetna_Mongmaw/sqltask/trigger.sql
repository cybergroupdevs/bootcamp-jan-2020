create trigger trigger2_task
on task_table2
AFTER update
AS
BEGIN
DECLARE @replaced varchar(200)
SET @replaced =(Select d_path from inserted)
EXEC proc_task @replaced
end