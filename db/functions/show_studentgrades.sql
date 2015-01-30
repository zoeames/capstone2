select quiztitle, correctanswer, vote
from quizzes q
inner join lessons l on l.id = q.lessonid
inner join quizanswers qa on  qa.quizid = q.id
where lessonid = 4 and userid=1;
