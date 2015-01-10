create or replace function show_quiz (qid integer)
returns table ("quizId" integer, "quizTitle" varchar, "answerA" varchar, "answerB" varchar, "answerC" varchar, "answerD" varchar, "answerE" varchar, "correctAnswer" varchar, "isActive" boolean, "isCompleted" boolean) AS $$
declare
begin

  return query
    select q.id as "quizId", q.quiztitle as "quizTitle", q.answera as "answerA", q.answerb as "answerB", q.answerc as "answerC", q.answerd as "answerD", q.answere as "answerE", q.correctanswer as "correctAnswer", q.isactive as "isActive", q.iscompleted as "isCompleted"
    from quizzes q
    where q.id = qid;



end;
$$ language plpgsql;