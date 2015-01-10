create table photos(
  id serial primary key,
  url varchar(1000) not null,
  quizId integer not null references quizzes(id),
  created_at timestamp not null default now()
);