CREATE DATABASE libraryn;

CREATE TABLE users(
    _id SERIAL,
    display_name varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (_id)
);

CREATE TABLE books(
    _id SERIAL, 
    title varchar(255) NOT NULL, 
    author varchar(255) NOT NULL, 
    PRIMARY KEY (_id)
);

CREATE TABLE libraries(
    user_id int NOT NULL, 
    book_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (_id), 
    FOREIGN KEY (book_id) REFERENCES books (_id)
);