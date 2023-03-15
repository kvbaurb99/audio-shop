# Audiophile React Shop

Full-stack audio e-commerce shop

## Requirements

- App can be run only in development mode with Docker, folder with assets is ignored, this is because files are from [Front End Mentor](https://www.frontendmentor.io/home) and are covered by licence.

- If you want run app locally with Docker you will have to install `Docker Desktop` and then you can install and run app with steps below.

## Installation and run with Docker

To run the app with Docker, follow these steps:

1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop)

2. Clone the repository by running the following command in your terminal:

```javascript
    git@github.com:kvbaurb99/audio-shop.git
```

3. Navigate to the `audio-shop` directory in your terminal and run the following command to start the app in development mode:

``` javascript
    docker-compose -f docker-compose-dev.yml up
```

This will start the app and print logs to the console. You can view the app by opening a web browser and navigating to http://localhost:3000.

Note that you should run this command in the directory where the docker-compose.dev.yml file is located.

## Features

### Product Categories

- Easily switch between different product categories such as headphones, speakers, and earphones.

### Product Details 

-  View detailed information about each product, including images, specifications.

### Cart Management

-  View detailed information about each product, including images, specifications.
### Checkout form

- Provide user information such as name, address, and payment method to complete the purchase.

### Order Summary

- View a summary of the order after completing the purchase, including the order number, shipping information, and estimated delivery date.

### Account Management

- Create an account to view order history

### Mobile Responsive Design

- Enjoy a seamless shopping experience on any device, including desktop and mobile.

### Navigation Bar

- Easy access to important features such as Your Orders and Cart.

## Live demo

https://audiophile-kvbaur99.netlify.app/

## Technologies

- ReactJS
- Tailwind CSS
- HTML5
- Rest API, Axios
- NodeJS with Express
- MySQL Database

