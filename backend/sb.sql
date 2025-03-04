create database cars;
use cars;


create table owner (
    id int primary key auto_increment,
    name varchar(265) not null,
    email varchar(45) not null,
    password varchar(45) not null
);

create table parking_space (
    id varchar(45) primary key
);

drop table parking_space;

drop table cars;

create table cars (
    id int primary key auto_increment,
    vehicle_name varchar(265) not null,
    license_plate varchar(45) unique not null,
    parking_space varchar(45) unique not null,
    foreign key (parking_space) references parking_space(id)
);

insert into parking_space (id) values (101), (102), (103), (104), (105);

select * from parking_space;

select * from cars