# FoodBuddy

![FoodBuddy](path/to/your/image.png)

FoodBuddy is your go-to solution for a seamless food ordering experience. This full-stack MERN (MongoDB, Express, React, Node.js) application empowers users to explore a variety of food items, effortlessly place orders, and manage their order history. With a secure authentication system, efficient cart management, and a user-friendly interface, FoodBuddy is designed to make your food ordering process enjoyable.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screens](#screens)

- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features

- **User Authentication:** Users can sign up and log in securely using JWT (JSON Web Token).
- **Order Food:** Browse through a variety of food items, add them to the cart, and place an order.
- **Cart Management:** Users can view and manage their cart items before finalizing an order.
- **Order History:** Access a list of past orders to keep track of food preferences.
- **Secure Password Handling:** Passwords are hashed using bcrypt.js for enhanced security.
- **Input Validation:** Utilizes Express Validator for server-side input validation.

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - MongoDB (with Mongoose ODM)
  - JSON Web Token (JWT)
  - Bcrypt.js
  - Express Validator

- **Frontend:**
  - React
  - React Hooks
  - Reusable Components (Navbar, Footer, Cards)

## Screens

1. **Login:** User authentication screen.
2. **Signup:** New user registration screen.
3. **Home:** Browse and order food items.
4. **Cart:** View and manage items in the shopping cart.
5. **My Orders:** View order history.

## Installation

# Usage

1. **User Authentication:**
   - Visit the "Signup" screen to create a new account or log in if you already have one.
   - Enter the required information and submit the form.
   - For existing users, navigate to the "Login" screen, enter your credentials, and log in.

2. **Explore Food Items:**
   - Head to the "Home" screen to explore a variety of delicious food items.
   - Click on each item to view details, and use the "Add to Cart" button to add items to your cart.

3. **Manage Cart:**
   - Visit the "Cart" screen to review the items in your shopping cart.
   - Adjust quantities, remove items, or proceed to checkout.

4. **Place an Order:**
   - Once satisfied with your cart, proceed to checkout and place your order.
   - You'll receive confirmation and can view the order in the "My Orders" section.

5. **View Order History:**
   - Go to the "My Orders" screen to see a list of your past orders.
   - View order details and keep track of your food preferences.

# API Endpoints

- **POST /api/signup:**
  - Registers a new user.
  - Request Body: `{ "username": "user", "password": "password" }`

- **POST /api/login:**
  - Logs in an existing user.
  - Request Body: `{ "username": "user", "password": "password" }`

- **GET /api/food:**
  - Retrieves a list of available food items.

- **POST /api/cart/add:**
  - Adds an item to the shopping cart.
  - Request Body: `{ "itemId": "item_id", "quantity": 2 }`

- **GET /api/cart:**
  - Retrieves the current contents of the shopping cart.

- **POST /api/order:**
  - Places a new order.
  - Request Body: `{ "items": [{ "itemId": "item_id", "quantity": 2 }], "totalAmount": 25.99 }`

- **GET /api/orders:**
  - Retrieves a list of past orders for the logged-in user.


