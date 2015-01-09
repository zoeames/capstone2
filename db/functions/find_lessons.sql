create or replace function find_lessons (cid integer)
returns table ("lessonId" integer, "lessonTitle" varchar, "lessonSummary" text, "lessonDate" date) AS $$
declare
begin

  return query
    select l.id as "lessonID", l.lessontitle as "lessonTitle", l.lessonsummary as "lessonSummary", l.lessondate as "lessonDate"
    from lessons l
    where l.courseid = cid;

end;
$$ language plpgsql;