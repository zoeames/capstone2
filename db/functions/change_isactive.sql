create or replace function change_isactive (qid integer)
returns integer AS $$
declare
begin

  return query
    UPDATE quizzes
    SET isactive = true
    where id = qid;


end;
$$ language plpgsql;