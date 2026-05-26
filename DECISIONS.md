# Decisions

## Why I Picked UI Testing

I picked UI testing because I wanted to test what real users see and use on the website.

## What I Used

- Playwright
- TypeScript
- VS Code

## Why I Used Them

Playwright is fast and good for testing websites.

TypeScript helps keep the code clean and easy to read.

## How I Built The Project

I used:
- tests folder for test files
- pages folder for page actions
- utils folder for test data
- config folder for environment settings

This keeps the framework clean and easy to maintain.

## What I Tested

### Guest
- View rooms
- Book a room
- Invalid booking form

### Admin
- Valid login
- Invalid login
- Create, edit and delete rooms

## Why Some Tests Failed

Some tests failed because the website keeps old data.

Example:
- Rooms already booked before
- Room numbers already created before

So sometimes the app blocks the action because the data already exists.

## Problems Found

### 1. Booking test sometimes fails because dates are already booked.

Expected:
Show booking confirmed.

Actual:
Booking does not complete.

### 2. Admin room test sometimes fails because room data changes after editing.

Expected:
Room should update and delete correctly.

Actual:
Updated room is not always found.

## How I Would Improve It

- Use new dates every time
- Create unique room numbers
- Add automatic cleanup after tests
- Add API setup and teardown
- Add cross-browser testing

## QA Best Practices Used

- Page Object Model
- No hardcoded URLs
- No sleep timers
- Reusable code
- Positive and negative tests
- HTML reports
- GitHub Actions CI

## Final Note

The framework is clean, scalable, and easy to maintain.

Most failures are caused by shared test data in the public environment, not by the framework structure itself.
