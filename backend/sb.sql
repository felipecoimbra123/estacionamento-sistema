create database cars;
use cars;


create table owner (
    id int primary key auto_increment,
    name varchar(265),
    email varchar(45),
    password varchar(45)
)

create table parking_space (
    id int primary key
)

create table cars (
    id int primary key auto_increment,
    vehicle_name varchar(265),
    license_plate varchar(45) unique,
    foreign key (id_owner) references owner(id)
)