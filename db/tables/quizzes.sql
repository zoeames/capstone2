create table quizzes(
  id serial primary key,
  lessonId integer not null references lessons(id),
  quizTitle varchar(255) not null,
  question text not null,
  answerA varchar(255) not null,
  answerB varchar(255) not null,
  answerC varchar(255) not null,
  answerD varchar(255) not null,
  answerE varchar(255) not null,
  correctAnswer varchar(7) not null,
  isActive boolean not null,
  isCompleted boolean not null
);