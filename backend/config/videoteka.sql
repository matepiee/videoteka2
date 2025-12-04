create database videoteka
default character set utf8
collate utf8_hungarian_ci;

use videoteka;

create table subscriptions(
    id int primary key auto_increment,
    name varchar(255),
    description varchar(255),
    price int
);

create table users(
    id int primary key auto_increment,
    username varchar(255) unique,
    password varchar(255),
    email_address varchar(255) unique,
    money int default 10,
    category int default 1,
    rights int default 0,
    foreign key (category) references subscriptions(id)
);

create table videos(
    id int primary key auto_increment,
    filename varchar(255),
    category int
);

insert into subscriptions (name, description, price)
values
("Default", "Restricted access to videos.", 0),
("Plus", "Allow access to Plus videos.", 5),
("Premium", "Allow access to Premium videos.", 10),
("Ultra", "Allow access to all videos.", 15);

insert into users (username, password, email_address, rights)
values
("admin", "$argon2id$v=19$m=65536,t=3,p=4$SncX/YtGUYZaUNtCLjh/Nw$sD+80clqLUS3LZZO6xor/08QRT9/onb14D7oZoA01FM", "admin@admin.hu", 1);