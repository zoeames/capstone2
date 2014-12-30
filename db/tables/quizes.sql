create table quizes(
  id serial primary key,
  lessonId integer not null references lessons(id),
  question text,
  image varchar(255) not null,
  answerA varchar(255) not null,
  answerB varchar(255) not null,
  answerC varchar(255) not null,
  answerD varchar(255) not null,
  answerE varchar(255) not null,
  corrrectAnswer varchar(7) not null,
  isActive boolean,
  isCompleted boolean
);