CREATE PROCEDURE proc_task
AS
begin
declare @d_path as VARCHAR(200)
Declare cursor_task cursor for
select d_path FROM task_table2 where id>1
open cursor_task
fetch next from cursor_task
into @d_path
while @@FETCH_STATUS=0
BEGIN
UPDATE task_table2 SET d_path = REPLACE('C://desktop/folder/admin.html','folder', '22/01/20') where id=1
FROM task_table2
WHERE id>1
fetch next from cursor_task
end
close cursor_task
deallocate cursor_task
end;

ALTER PROCEDURE proc_task
@date varchar(30)
AS
begin
declare @t_id as int
declare @t_path as VARCHAR(200)
declare @toreplace varchar(200)
Declare cursor_task cursor for
select id,d_path FROM task_table2 where id>1
open cursor_task
fetch next from cursor_task
into @t_id, @t_path
while @@FETCH_STATUS=0
BEGIN
SET @toreplace = SUBSTRING(@t_path,13,6)
UPDATE task_table2 SET d_path = REPLACE(d_path,@toreplace,@date) where id>1
fetch next from cursor_task into @t_id,@t_path
end
close cursor_task
deallocate cursor_task
end;
