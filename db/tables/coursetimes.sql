create table coursetimes(
  id serial primary key,
  courseId integer not null references courses(id),
  weekday varchar(10) not null,
  startTime time not null,
  endTime time not null,
  isOfficeHours boolean not null,
  isHelpSession boolean not null
);