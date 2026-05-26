WBS QA Engineer Tech Challenge

Project Overview

This project contains UI automation tests for:

[https://automationintesting.online/](https://automationintesting.online/)

I selected Option B: UI Automation.

---

Tools Used

* Playwright
* TypeScript
* Node.js
* VS Code

---

How To Run The Project

1. Clone the repo

git clone https://github.com/FungaiRobertBoboQA/WBS-TECH-CHALLENGE-F.R.-BOBO.git

2. Open the project folder

cd WBS-TECH-CHALLENGE-F.R.-BOBO

3. Install packages

npm install

4. Install Playwright browsers

npx playwright install

5. Run tests

npm run test

6. Run tests in browser mode

npm run test:headed

7. Open HTML report

npm run report

---

What I Tested

Guest Tests

* View room details
* Create room booking
* Invalid booking validation

Admin Tests

* Valid login
* Invalid login
* Create/edit/delete rooms

---

Problems Found

1. Booking Test Failure

Sometimes the booking test fails because the room or selected dates were already booked from a previous test run.

Expected:
Booking should complete successfully.

Actual:
Booking confirmation does not appear.

---

2. Admin Room Test Failure

Sometimes the room create/edit/delete test fails because room data already exists or changes during the test.

Expected:
Room should create, update, and delete successfully.

Actual:
Updated room is not always found.

---

QA Best Practices Used

* Page Object Model
* Reusable methods
* Environment variables
* No hardcoded URLs
* No sleep timers
* Positive and negative testing
* HTML reporting
* GitHub Actions CI

---

Important Notes

The test environment is shared and keeps old data.

This means some tests may fail if:

* Rooms were already booked
* Room numbers already exist
* Previous test data still exists

---

Reports

After running tests:

npm run report

This opens the Playwright HTML report with:

* Screenshots
* Videos
* Traces
* Pass/fail results

---

Final Note

The framework was built to be clean, scalable, and easy to maintain.

Most failures are caused by shared test data in the public environment, not by the framework structure itself.
