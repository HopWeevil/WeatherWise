create table user (
	id int auto_increment primary key,
	name varchar(64) not null,
	phone varchar(16) not null,
	email varchar(64) null,
	password varchar(256) not null,
	city varchar(64) not null,

	constraint user_unique unique (phone, email)
);