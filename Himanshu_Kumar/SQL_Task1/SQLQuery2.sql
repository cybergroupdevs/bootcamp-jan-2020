 CREATE TABLE task1(
    id int  identity(1,1) PRIMARY KEY,
    Desig varchar(100) NOT NULL,
	Pathh varchar(100) NOT NULL);

--drop table task1;
insert into task1(Desig,Pathh)
values('Date','23/1/2020');
insert into task1(Desig,Pathh)
values('Project','C:\Desktop\Users\himanshu.kumar\23/1/2020\Project\Project.txt');
insert into task1(Desig,Pathh)
values('admin','C:\Desktop\Users\himanshu.kumar\23/1/2020\ADMIN\admin.txt');
insert into task1(Desig,Pathh)
values('HR','C:\Desktop\Users\himanshu.kumar\23/1/2020\HR\hr.txt');
insert into task1(Desig,Pathh)
values('salary','C:\Desktop\Users\himanshu.kumar\23/1/2020\Sal\salary.txt');


ALTER procedure spUpdate
@date varchar(30)
as
begin
	declare @tempPath varchar(80)
	declare @tempo varchar(80)
	declare @tempId int

	-- declare @path1=
	-- declare @path2=

--creatung cursor--

	declare cursorDate CURSOR for
	select id,Pathh from task1 where id>1
	open cursorDate
	fetch next from cursorDate into @tempId, @tempPath
	while (@@FETCH_STATUS=0)
	begin 
		set @tempo =SUBSTRING(@tempPath,33,9)
		update dbo.task1 set pathh=replace(Pathh,@tempo,@Date) where id>1
		fetch next from cursorDate into @tempId, @tempPath
	end 
	close cursorDate
	deallocate cursorDate
end

---select * from task1
---go;

create trigger dbo.demo1
on task1
after update
as 
begin
	declare @change varchar(40)
	set @change=(select Pathh from inserted)
	exec spUpdate @change
end

update task1 set Pathh='24/1/2020' where id=1;
 
 select * from task1;