# Rest Countries Api

"The Wild Oasis" is a small boutique hotel with 8 luxurious wooden cabins

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Overview

This project is an internal hotel management app to manage everything about the hotel: bookings, cabins, and guests, as well as to check in guests when they arrive.

## Features

- Display a list of [items, e.g., countries] with details in card format.
- Search and filter functionality.
- Detailed view of each item with more specific information.
- Persistent caching and data management.
- State management with Redux and Context API.
- Pagination

## Technologies Used

This project was built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Supabase**: An open-source backend-as-a-service platform providing real-time database and authentication.
- **React Router**: Handles routing and navigation in single-page applications.
- **React Query**: Fetches, caches, and synchronizes server-side data with the UI.
- **React Error Boundary**: Provides error handling and fallback rendering for React applications.
- **React Hook Form**: Simplifies form handling and validation in React apps.
- **React Hot Toast**: Displays customizable and beautiful toast notifications in React apps.
- **React Icons**: Offers a collection of icons to enhance user interfaces.
- **Recharts**: Provides flexible and composable charting solutions for React applications.
- **Styled Components**: Enables writing CSS-in-JS for styling React components.
- **Date-fns**: A lightweight library for working with dates in JavaScript.
- **Vite**: A fast and modern build tool for web development.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm/yarn installed on your machine.
- Clone this repository.

### Installation

1. Install the project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Once you have installed the dependencies and started the development server, you can use the application as follows:

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to:

   ```bash
   http://localhost:3000
   ```

3. Use the following features:

- Login: username: jonas@example.com, password: pass0987
- Dark Mode: Toggle the theme switcher to switch between light and dark modes.
- Home: Data visualization of all the bookings for the last 7days, 30days and 90days
- Bookings: Checkin, Checkout, Delete and navigate through the bookings
- Cabins: Create, Edit, Delete and Duplicate Cabins
- Users: Create new users. Users can only be created inside the app by a logged in staff or employee.
- Settings: Edit/update the states for the booking

## Contributing

Contributions are welcome and appreciated! To contribute, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top of this repository to create a copy of it on your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/rest-countries-api.git
   ```
3. Create a new branch: Create a branch for your feature or bug fix.

   ```bash
   git checkout -b feature-or-bugfix-name
   ```

4. Make changes: Add your changes or new features to the codebase.

5. Commit changes: Commit your changes with a meaningful commit message.
   ```bash
   git commit -m "Description of your changes"
   ```
6. Push changes: Push your changes to your forked repository.
   ```bash
   git push origin feature-or-bugfix-name
   ```

### Guidelines

- Follow the coding style used in the project.
- Write clear, concise commit messages.
- Ensure your code passes all tests and linting checks.
- Keep your pull requests focused and avoid mixing unrelated changes.

Thank you for contributing to this project!
