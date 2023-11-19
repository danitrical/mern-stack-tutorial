CREATE DATABASE amazon_ecom;
use amazon_ecom;

CREATE TABLE users (
 id int PRIMARY KEY AUTO_INCREMENT,
 name varchar(255) not null,
 email varchar(255) unique not null,
 password varchar(255) not null
 );

CREATE TABLE products (
	id int primary key auto_increment,
    name varchar(255) not null,
    description varchar(255),
    price float not null,
    imageUrl  varchar(255),
    status bool default true,
    categoryId int,
    dateCreated TIMESTAMP,
    dateModified TIMESTAMP,
    dateDeleted TIMESTAMP,
    FOREIGN KEY (categoryId) REFERENCES category(id)
);


CREATE TABLE category (
id int primary key auto_increment,
name varchar(255) not null,
dateCreated TIMESTAMP,
dateModified TIMESTAMP,
dateDeleted TIMESTAMP
);
    
    
    
CREATE TABLE inventory (
	id int primary key auto_increment,
	productId int not null,
	quantity int not null,
	dateCreated TIMESTAMP,
	dateModified TIMESTAMP,
	dateDeleted TIMESTAMP,
    FOREIGN KEY (productId) REFERENCES products(id)
);

CREATE TABLE orders (
id int primary key auto_increment,
totalAmount float not null,
shippingAddress varchar(255) not null,
customerId int not null,
paymentType varchar(255),
status bool not null,
dateCreated TIMESTAMP,
dateModified TIMESTAMP,
dateDeleted TIMESTAMP,
FOREIGN KEY (customerId) REFERENCES users(id)
);

CREATE TABLE orderProducts (
    id int primary key auto_increment,
    productId int not null,
	orderId int not null,
	dateCreated TIMESTAMP,
	dateModified TIMESTAMP,
	dateDeleted TIMESTAMP,
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (orderId) REFERENCES orders(id)
)