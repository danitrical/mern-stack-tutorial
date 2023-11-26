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


INSERT INTO products (name, description, price, imageUrl, status, categoryld, dateCreated, dateModified, dateDeleted) VALUES
( 'Samsung Galaxy S21', 'A flagship smartphone with a stunning display and camera', 999.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
('Apple iPhone 13', 'A premium smartphone with a sleek design and powerful performance', 1099.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
( 'Sony PlayStation 5', 'A next-generation gaming console with immersive graphics and sound', 499.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
('Microsoft Xbox Series X', 'A cutting-edge gaming console with fast loading and high compatibility', 499.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
('Nintendo Switch', 'A hybrid gaming console that can be played on the TV or on the go', 299.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
('Dell XPS 13', 'A thin and light laptop with a stunning display and long battery life', 1199.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
( 'Apple MacBook Air', 'A sleek and portable laptop with a retina display and a touch ID sensor', 999.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
( 'Samsung QLED TV', 'A smart TV with a quantum dot display and a voice assistant', 1499.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE,1, '2023-11-25 15:34:29', NULL, NULL),
( 'LG OLED TV', 'A smart TV with an organic LED display and a cinematic sound', 1999.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL),
('Bose Soundbar 700', 'A soundbar with a sleek design and a surround sound effect', 799.99, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg', TRUE, 1, '2023-11-25 15:34:29', NULL, NULL);



INSERT INTO category (name, dateCreated) values ('Electronics', '2023-11-25 15:34:29')