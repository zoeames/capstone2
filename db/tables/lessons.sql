create table lessons(
  id serial primary key,
  courseId integer not null references courses(id),
  lessonDate date not null,
  created_at timestamp not null default now(),
  lessontitle varchar(255) not null,
  lessonsummary text
);