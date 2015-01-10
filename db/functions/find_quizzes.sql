create or replace function find_quizzes (lid integer)
returns table ("quizId" integer, "quizTitle" varchar, "isActive" boolean, "isCompleted" boolean) AS $$
declare
begin

  return query
    select q.id as "quizId", q.quiztitle as "quizTitle", q.isactive as "isActive", q.iscompleted as "isCompleted"
    from quizzes q
    where q.lessonid = lid;

end;
$$ language plpgsql;



