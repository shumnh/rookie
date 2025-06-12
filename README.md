# Mentor-Student Q&A Backend App

## Project Overview
Imagine an online help desk, specifically for students and mentors. This app is like a behind-the-scenes brain for a website where students can ask questions and mentors can provide answers. It makes sure everything works smoothly when people try to use the platform.

### Students can:
- Sign up and log in, like creating an account.
- Ask new questions, like posting a message on a forum.
- Look at, change, or delete their own questions.
- See the answers mentors have given to their questions (and sometimes other students' questions too!).

### Mentors can:
- Sign up and log in, just like students.
- See a list of *all* the questions students have asked.
- Pick a question and write an answer for it.
- Change or delete their own answers.

## Why are we building this?
It's a great way to learn how to build real-world applications. It teaches us about:
- **Who can do what:** Making sure students can only do student things, and mentors can only do mentor things.
- **Organizing information:** How to store questions, answers, and user details so they're easy to find and use.
- **Making the website talk to the app:** How the app handles requests from the website (like "post a question" or "show me answers").

It's a useful project for learning how web services work and building a portfolio!

## What important things does it do?

### a) Accounts and Permissions
- It makes sure only registered users can access the app, and that students and mentors have different abilities based on their role.

### b) Student Questions
- Students can create questions, and the app keeps track of who asked what.

### c) Mentor Answers
- Mentors can see all questions and provide answers, which are then linked to the specific question and mentor.

### d) Viewing Answers
- Students can easily find the answers to their questions.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Authentication
- bcryptjs for password hashing
- CORS
- dotenv
- express-validator

## How does it store information? (Data Models - Simplified)
Think of these as digital index cards, each holding specific information:

### User Card
Holds details about each person, like their username, email, a secret code (password), and whether they are a "student" or a "mentor."

### Question Card
Stores the question's title, the main text of the question, and notes which student asked it.

### Answer Card
Contains the actual answer, and notes which mentor wrote it and which question it answers.

## Putting it all together (How It Works)
1.  A student logs in and writes a question. The app saves this question and remembers which student asked it.
2.  A mentor logs in and sees all the student questions.
3.  The mentor picks a question, writes an answer, and posts it. The app saves this answer, linking it to the mentor and the question.
4.  The student can then go back to their question and see the mentor's answer.
5.  Everyone can only change or delete their *own* content, ensuring privacy and security .

