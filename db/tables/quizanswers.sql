create table quizanswers(
  id serial primary key,
  userId integer not null references users(id),
  quizId integer not null references quizzes(id),
  vote char(1) not null
);