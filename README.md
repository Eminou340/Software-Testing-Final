# Student Management & Todo API - Testing Project

This project is a high-quality Node.js RESTful API developed for the Software Testing & QA practical exam. It implements robust authentication, role-based access control, and comprehensive testing suites.

## Key Features

- **JWT Authentication:** Secure registration and login system.
- **RBAC (Role-Based Access Control):** Access levels for `Admin`, `Manager`, and `User`.
- **Todo Management:** Advanced features including priority levels, status tracking, and user assignment.
- **Security:** Password hashing, protected routes, and environment variable management.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Testing:** Mocha, Chai, Supertest
- **Coverage:** C8

## Test Results & Coverage

The project maintains a high standard of quality with the following metrics:

- **Total Tests:** 18
- **Passing Rate:** 100%
- **Code Coverage:** 89.67% (Exceeding the 80% requirement)


Getting Started
1. Installation
Install all required dependencies:npm install


2. Environment Configuration:
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://eminoudah0_db_user:wQZfNiRElaBKORr2@cluster0.bvmlrpw.mongodb.net/todo_app?retryWrites=true&w=majority 

3. Running the Server
Start the server in development mode (with auto-reload): npm run dev


4. Running Tests
Execute the automated test suite (Model, API, and Math tests):

npm test

5.To view the code coverage report:
npm run test:coverage

## Project Structure

- `controllers/`: Logic for handling requests.
- `models/`: Database schemas (User, Todo).
- `middleware/`: Authentication and Role Authorization.
- `routes/`: API endpoint definitions.
- `tests/`: Integration and Unit test files.

## Developer Info
- **Name:** [Eminou Abdou]
- **Reg Number:** [26502/2024]