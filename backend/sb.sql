create database cars;
use cars;


create table owner (
    id int primary key auto_increment,
    name varchar(265) not null,
    email varchar(45) not null,
    password varchar(45) not null
)

create table parking_space (
    id int primary key
)

create table cars (
    id int primary key auto_increment,
    vehicle_name varchar(265) not null,
    license_plate varchar(45) unique not null,
    foreign key (id_owner) references owner(id)
)