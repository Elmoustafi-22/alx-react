# 0x07-React Redux Action Creator + Normalizr

## Overview

This project focuses on integrating React with Redux and Normalizr. You will be working with Redux actions, async actions, and schema normalization using Normalizr. The goal is to handle complex state management in a scalable way, particularly for nested JSON data, and to write robust tests for these implementations.

## Learning Objectives

By the end of this project, you should be able to:

- Understand and use Normalizr for normalizing nested JSON data.
- Explain core concepts of Redux, including actions, action creators, and async actions.
- Write tests for Redux actions and action creators.
  
## Key Tasks

1. **Read Data from JSON:**
   - Create a function to retrieve notifications by user ID from a JSON file.
   - Write tests to verify the correctness of the function.

2. **Normalize Nested JSON:**
   - Use Normalizr to create schemas for nested JSON data.
   - Write tests to ensure the normalized data is accurate.

3. **Filter a Normalized Schema:**
   - Update the notification retrieval function to work with normalized data.

4. **Create Course List Actions:**
   - Define and test Redux actions for selecting and unselecting courses.

5. **Create UI Actions:**
   - Define and test actions for user login, logout, and handling notification drawer visibility.

6. **Create Notification Actions:**
   - Define and test actions for marking notifications as read and setting notification filters.

7. **Async Action Creators:**
   - Set up Redux Thunk for handling asynchronous actions.
   - Simulate an API and write async action creators for login actions.
   - Write tests to verify the correct dispatching of actions based on API responses.

## Requirements

- Code will be tested on Ubuntu 18.04 LTS using Node.js 12.x and npm 6.x.
- Use any allowed text editor (vi, vim, emacs, Visual Studio Code).
- All files should end with a newline.
- Tests should pass successfully.
- A `README.md` file is mandatory at the root of the project.

## Repository Structure

- **GitHub Repository:** `alx-react`
- **Project Directory:** `0x07-react_redux_action_creator_normalizr`

This project will solidify your understanding of Redux and how to manage complex state with Normalizr, preparing you for more advanced topics in React development.