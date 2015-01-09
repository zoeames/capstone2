create or replace function add_mycourse (uid integer, cid integer)
returns table ("myCourseId" integer) AS $$
declare
begin

  return query
    select mc.id as "myCourseId"
    from mycourses mc
    where mc.userid = uid and mc.courseid = cid;


end;
$$ language plpgsql;