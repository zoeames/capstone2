create or replace function find_courses (uid integer)
returns table (course_id integer, coursetitle varchar, instructorfirstname varchar, instructorlastname varchar) AS $$
declare
begin

  return query

    select c.id, c.coursetitle, u.firstname, u.lastname
    from mycourses mc
    inner join courses c on c.id = mc.courseid
    inner join users u on u.id=c.instructorid
    where mc.userid = uid;

end;
$$ language plpgsql;