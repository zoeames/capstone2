create or replace function show_lesson (lid integer)
returns table ("lessonId" integer, "courseId" integer, "lessonTitle" varchar, "lessonSummary" text, "lessonDate" date, "courseTitle" varchar) AS $$
declare
begin

  return query
    select l.id as "lessonId", l.courseid as "courseId", l.lessontitle as "lessonTitle", l.lessonsummary as "lessonSummary", l.lessondate as "lessonDate", c.coursetitle as "courseTitle"
    from lessons l
    inner join courses c on c.id = l.courseid
    where l.id = lid;



end;
$$ language plpgsql;