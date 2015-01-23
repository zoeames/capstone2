create or replace function find_enrolledstudents (cid integer)
returns table ("userId" integer, "firstName" varchar, "lastName" varchar, "institutionId" varchar) AS $$
declare
begin

  return query
    select u.id as "userId", u.firstname as "firstName", u.lastname as "lastName", u.institutionid as "institutionId"
    from mycourses mc
    inner join users u on u.id= mc.userid
    where courseid = cid;



end;
$$ language plpgsql;