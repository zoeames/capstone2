create or replace function add_lesson (courseid integer, lessonTitle varchar, lessonDate date, lessonSummary varchar)
returns integer AS $$
declare

  lid integer;

begin

  -- insert the lesson
  insert into lessons (courseid, lessontitle, lessondate, lessonsummary) values (courseid, lessonTitle, lessonDate, lessonSummary) returning id into lid;

  -- return the lesson id
  return lid;

end;
$$ language plpgsql;