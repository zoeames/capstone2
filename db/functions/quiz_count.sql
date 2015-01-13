create or replace function quiz_count (qid integer)
returns table ("voteCount" bigint, "quizVote" character) AS $$
declare
begin

  return query
    select count(*) as "voteCount", q.vote as "quizVote"
    from quizanswers q
    where quizid=qid
    group by vote;



end;
$$ language plpgsql;