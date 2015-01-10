create or replace function show_quiz (qid integer)
returns table ("quizId" integer, "quizTitle" varchar, "quizQuestion" text, "answerA" varchar, "answerB" varchar, "answerC" varchar, "answerD" varchar, "answerE" varchar, "correctAnswer" varchar, "isActive" boolean, "isCompleted" boolean, "photoURL" varchar) AS $$
declare
begin

  return query
    select q.id as "quizId", q.quiztitle as "quizTitle", q.question as "quizQuestion", q.answera as "answerA", q.answerb as "answerB", q.answerc as "answerC", q.answerd as "answerD", q.answere as "answerE", q.correctanswer as "correctAnswer", q.isactive as "isActive", q.iscompleted as "isCompleted", p.url as "photoURL"
    from quizzes q
    inner join photos p on p.quizid = q.id
    where q.id = qid;



end;
$$ language plpgsql;