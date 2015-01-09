create or replace function add_course (userid integer, courseTitle varchar, institutionId varchar, semester varchar, webpage varchar, topic varchar)
returns integer AS $$
declare

  cid integer;

begin

  -- insert the course
  insert into courses (instructorid, coursetitle, institutionid, semester, webpage, topic) values (userid, courseTitle, institutionId, semester, webpage, topic) returning id into cid;

  -- return the course id
  return cid;

end;
$$ language plpgsql;