create table users(
    id serial primary key,
    institutionid varchar(50) unique not null,
    password char(60) not null,
    avatar varchar(200) not null,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    isadmin varchar(5) not null,
    email varchar(255) not null,
    token char(96) not null,
    created_at timestamp not null default now()
);
