create table reading (
	id int auto_increment primary key,
	user_id int not null,
	city varchar(64) not null,
	date date not null,
	temperature float,
	description varchar(32),
	icon varchar(24),
	windspeed float,
	humidity float,

	constraint reading_fk_user foreign key (user_id) references user (id)
);
