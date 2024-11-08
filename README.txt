### Plant Shop Project

## Overview
This project is a React-based application that I originally designed as a UI/UX layout over a year ago. The goal was to create a fully functional, user-friendly interface for a plant shop. Recently, through Coursera, I revisited and completed the project, transforming it into a React-based web application. This project is part of my certification and showcases my progress and skillset in web development, specifically using React and Redux.

While developing this project, I opted to focus on a single product throughout the site to streamline the process. This decision allowed me to allocate my time more efficiently, as it minimized the complexity of managing multiple products in a local project context. My intention was to create a functional demonstration without overcomplicating the implementation.

Note: I didn't focus on improving the UI design to be responsive to different screen sizes, I used a simple design that focused on the basic functionality only. The goal was to save time and effort, since this is just a local learning project.

# Key Project Features
**GitHub Repository**
- GitHub Repository URL: Public URL to the GitHub repository
  - Redux-related Code: Includes all relevant Redux code files
  - Landing Page

**1. Hero Image:** A unique background image for the landing page
  - Company Description: A brief paragraph describing the company
  - Company Name: Clearly displayed
  - Start Button: A button to navigate to the product list page

**2. Product List Page**
  - Unique Plant Listings: Six unique indoor plants for sale, each displaying a thumbnail, name, and price 
  - Category Organization: Plants are organized into at least three categories
  - Add to Cart Button: Each plant has an "Add to Cart" button with the following functionality
    - When selected, the cart icon increments by one.
    - Button becomes disabled once selected.
    - The selected plant is added to the cart.

**3. Header**
  - Page Display: Header appears on both the product list page and the cart page
  - Cart Icon: Shows the total number of items in the cart
  - Navigation Links: Allows switching between the product list and cart pages

**4. Cart Page**
  - Total Item Count: Displays the total number of items in the cart
  - Total Cost: Shows the cumulative cost of items in the cart
  - Checkout Button: Displays a message like "Coming Soon" when clicked
  - Continue Shopping Button: Links back to the product list page
  - Plant Item Display: Each plant in the cart shows a thumbnail, name, and unit price
  - Quantity Increase Button: Increases the quantity of an item in the cart and updates all relevant values
  - Quantity Decrease Button: Decreases the quantity of an item in the cart and updates values accordingly
  - Remove Button: Allows removal of an item from the cart

# Technologies Used
1. **React & ReactDOM:** Core libraries for building UI.
2. **Redux Toolkit & React Redux:** For state management.
3. **React Router & React Router DOM:** For navigation and routing.
4. **React Error Boundary:** To handle errors gracefully.
5. **Swiper:** For creating carousels/sliders.
6. **Web Vitals:** For performance metrics.
7. **Create React App Scripts:** For managing build and test processes.

## How to Run the Project
1. Clone the repository:
   - `git clone [your-repository-url]`
   - `cd [your-repository-name]`
2. Install dependencies:
   - `npm install`
3. Run the development server:
   - `npm start`
4. Open the application in your browser at `http://localhost:3000`.

## Acknowledgments
Special thanks to Coursera for the guidance and resources provided throughout the certification course, which allowed me to complete this project and advance my understanding of React and Redux.