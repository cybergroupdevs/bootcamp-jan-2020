CREATE PROCEDURE proc_task
@date varchar(30)
AS
begin
declare @t_id as int
declare @t_path as VARCHAR(200)
declare @toreplace varchar(200)
Declare cursor_task cursor for
select Table_ID, paths FROM assignment1 where Table_ID>1
open cursor_task
fetch next from cursor_task
into @t_id, @t_path
while @@FETCH_STATUS=0
BEGIN
SET @toreplace = SUBSTRING(@t_path,23,9)
UPDATE assignment1 SET paths = REPLACE(paths, @toreplace, @date) where Table_ID>1
fetch next from cursor_task into @t_id,@t_path
end
close cursor_task
deallocate cursor_task
end;
