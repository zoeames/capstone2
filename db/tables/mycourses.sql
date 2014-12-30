create table mycourses(
  id serial primary key,
  userid integer not null references users(id),
  courseid integer not null references courses(id)
);