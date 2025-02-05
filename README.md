# Shopping Cart and Purchase Flow

## Overview
This project implements a shopping cart and purchase flow using React.js. The application allows users to log in, view product details, add items to the cart, and make purchases. It also integrates user authentication and sends relevant data to a server using a webhook.

## Features

### 1. User Authentication
- Users must log in to access the shopping cart and make a purchase.
- Authentication API: `https://reqres.in/api/login`
- Sample Credentials:
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```

### 2. Product Listing & Details
- Fetches product data from an API.
- Displays product details including title, price, and image.

### 3. Shopping Cart Functionality
- Users can add items to the cart.
- Users can update item quantity.
- Users can remove items from the cart.

### 4. Purchase Flow
- Users can proceed to checkout and make a purchase.
- On successful purchase, data is sent to a webhook (`https://webhook.site/`).

## Tech Stack
- **Frontend:** React.js, Context API for state management
- **HTTP Requests:** Axios
- **Routing:** React Router

## Installation & Setup
### Prerequisites
- Node.js installed

### Steps to Run
1. Clone the repository:
   ```sh
   git clone <repo-link>
   cd shopping-cart-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm run dev
   ```
4. Open the browser and navigate to `http://localhost:5173`.

## API Endpoints Used
- **Login API:** `POST https://reqres.in/api/login`
- **Webhook URL:** `https://webhook.site/` (for sending purchase data)

## Deploy Link:- https://navankur-task.netlify.app/cart

## Folder Structure
```
📂 shopping-cart-app
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── Cart.js
│   │   ├── Login.js
│   │   ├── AuthContext.js
│   │   ├── CartContext.js
│   ├── App.js
│   ├── main.jsx
├── 📜 README.md
├── 📜 package.json
```

## Deployment
The application can be deployed on **Netlify** or **Render**.

## Future Improvements
- Implement payment gateway integration.
- Add user profile and order history.
- Improve UI/UX with better design.

## Author
- **Silvi Maheshwari** 🚀
