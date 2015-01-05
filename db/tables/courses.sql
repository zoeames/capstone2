create table courses(
  id serial primary key,
  coursetitle varchar(255) not null,
  webpage varchar(255) not null,
  topic varchar(25) not null,
  institutionId varchar(25) not null,
  created_at timestamp not null default now(),
  instructorid integer not null references users(id)
);
