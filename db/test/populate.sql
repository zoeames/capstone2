insert into users (institutionid, password, avatar, token, firstname, lastname, email, isadmin)  values ('1111', 'b', 'c', 'd', 'e', 'f', 'g', 'false');
insert into users (institutionid, password, avatar, token, firstname, lastname, email, isadmin)  values ('2222', 'b', 'c', 'd', 'e', 'f', 'g', 'true');
insert into users (institutionid, password, avatar, token, firstname, lastname, email, isadmin)  values ('3333', 'b', 'c', 'd', 'e', 'f', 'g', 'false');

delete from users;

insert into users (id, institutionid, password, avatar, token, firstname, lastname, email, isadmin) values (1,'9999999999','$2a$08$mrZQOHperHfwQrc1au5CIecSwA6sy1VceDQIEu7SrzKA/qcXcMsoG', 'a.png', 'tok', 'bob', 'smith', 'bob@aol.com', 'true');



insert into courses (instructorid, coursetitle, institutionid, semester, webpage, topic) values ('1', 'abc', '234235', 'Fall 2015', 'www.google.com', 'Astronomy');
insert into courses (instructorid, coursetitle, institutionid, semester, webpage, topic) values ('1', 'abc', '234235', 'Fall 2015', 'www.google.com', 'Astronomy');

delete from courses;

insert into courses (id, instructorid, coursetitle, institutionid, semester, webpage, topic) values (1, '1', 'Phys101: intro to physics', '234235', 'Fall 2015', 'www.google.com', 'Astronomy');
