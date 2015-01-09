create or replace function show_course (courseid integer)
returns table ("courseId" integer, "courseTitle" varchar, "webpage" varchar, "topic" varchar, "institutionId" varchar, "semester" varchar, "instructorFirstName" varchar, "instructorLastName" varchar, "createdAt" timestamp) AS $$
declare
begin

  return query
    select c.id as "courseId", c.coursetitle as "courseTitle", c.webpage as "webpage", c.topic as "topic", c.institutionid as "institutionId", c.semester as "semester", u.firstname as "instructorFirstName", u.lastname as "instructorLastName", c.created_at as "createdAt"
    from courses c
    inner join users u on u.id = c.instructorid
    where c.id = courseid;


end;
$$ language plpgsql;