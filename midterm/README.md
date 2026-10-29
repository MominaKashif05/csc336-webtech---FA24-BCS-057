# Web Technologies Midterm Lab Exam

* **Student Name:** Momina Kashif
* **Roll Number:** FA24-BCS-057
* **Repository:** `csc336-webtech---FA24-BCS-057`
* **Project Directory:** `midterm/`

---

## Project Overview
This repository contains the implementation for the Web Technologies Midterm Lab Exam. The project is built around a Pandora-themed e-commerce web application, featuring custom responsive layouts, field validation, and vanilla JavaScript cart behavior.

---

## Implemented Tasks & Features

### Task 1: Responsive Desktop Mega-Menu & Mobile Accordion
* **Desktop Mega-Menu:** Implemented using pure CSS and HTML. Hovering or focusing (`:focus-within`) on the "Shop by Category" navigation item reveals a full-width dropdown panel with $K = 3$ columns (calculated from roll number $N = 57$). It floats above content using high `z-index` layering without shifting page elements.
* **Mobile Accordion:** For mobile screens below the breakpoint $BP = 657px$, the navigation smoothly transforms into an independent, native HTML `<details>` and `<summary>` accordion.

### Task 2: Secure Checkout Form & HTML5 Validation
* Located in `checkout.html`.
* Features structured fieldsets for contact information and shipping address.
* Enforces strict browser-level validation using native HTML5 attributes:
  * `required` fields for mandatory input.
  * `type="email"` for email verification.
  * `type="tel"` and custom regex `pattern="[0-9]{10,12}"` for phone number validation.
  * `minlength="3"` for names and `pattern="[0-9]{5}"` for postal codes.
* Styled consistently with the project's custom accent hue ($H = 39^\circ$, `hsl(39, 70%, 45%)`).

### Task 3: JavaScript Cart Functionality & Purchase Limits
* Located in `script.js`.
* Handles dynamic cart state tracking and updates a real-time badge count on the shopping bag icon.
* Enforces strict client-side purchase limits (maximum 3 units per item) with alert notifications when limits are exceeded.

---

## File Structure
```text
midterm/
├── index.html        # Main landing page featuring the responsive mega-menu
├── checkout.html     # Secure checkout form with HTML5 native validation
├── style.css         # Custom styling, breakpoints (657px), and accent colors (hsl(39, 70%, 45%))
└── script.js         # Vanilla JavaScript cart logic, badges, and purchase limit enforcement