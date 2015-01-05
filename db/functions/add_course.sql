create or replace function add_course (userid integer, courseTitle varchar, institutionId varchar, webpage varchar, topic varchar)
returns integer AS $$
declare

  cid integer;

begin

  -- insert the note
  insert into courses (instructorid, coursetitle, institutionid, webpage, topic) values (userid, courseTitle, institutionId, webpage, topic) returning id into cid;

  -- return the course id
  return cid;

end;
$$ language plpgsql;