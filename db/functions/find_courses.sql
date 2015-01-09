create or replace function find_courses (uid integer)
returns table ("courseId" integer, "courseTitle" varchar, "semester" varchar, "instructorFirstName" varchar, "instructorLastName" varchar) AS $$
declare
begin

  return query
    select c.id as "couseId", c.coursetitle as "courseTitle", c.semester as "semester", u.firstname as "instructorFirstName", u.lastname as "instructorLastName"
    from mycourses mc
    inner join courses c on c.id = mc.courseid
    inner join users u on u.id=c.instructorid
    where mc.userid = uid;

end;
$$ language plpgsql;