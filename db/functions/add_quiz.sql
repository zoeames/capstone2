create or replace function add_quiz (lessonid integer, question varchar, answera varchar, answerb varchar, answerc varchar, answerd varchar, answere varchar, correctanswer varchar, isactive boolean, iscompleted boolean)
returns integer AS $$
declare

  qid integer;

begin

  -- insert the quiz
  insert into quizzes (lessonid, question, answera, answerb, answerc, answerd, answere, correctanswer, isactive, iscompleted) values (lessonId, question, answerA, answerB, answerC, answerD, answerE, correctAnswer, isActive, isCompleted) returning id into qid;

  -- return the quiz id
  return qid;

end;
$$ language plpgsql;