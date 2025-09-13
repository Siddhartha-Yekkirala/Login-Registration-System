# Login-Registration-System
A simple and responsive Login &amp; Registration System built using HTML, CSS, and JavaScript. This project demonstrates form validation, password confirmation, DOM manipulation, and navigation between Sign In, Sign Up, and a Dashboard page.
# Login & Registration System with Dashboard
![image alt](https://friendly-pink-w0ooce3fqt.edgeone.app/Screenshot%202025-09-13%20at%207.00.53 PM.png)
This is a simple **Login and Registration system** built with **HTML, CSS, and JavaScript**.  
It allows users to register, log in, and access a personalized dashboard.  

## 🚀 Features
- **User Registration**
  - Collects full name, email, and password.
  - Validates password and confirm password.
  - Stores user details in `localStorage`.

- **User Login**
  - Authenticates using stored credentials.
  - Redirects to the dashboard upon successful login.

- **Dashboard**
  - Greets the logged-in user with their name.
  - Includes a logout button to clear the session.

- **Responsive UI**
  - Modern card-based layout.
  - Smooth animations between Login and Sign-up forms.
  - Styled using CSS with gradient overlays and hover effects.

## 📂 Project Structure
project-folder/
│── index.html # Login & Registration page
│── dashboard.html # User dashboard after login
│── style.css # Styling for UI/UX
│── script.js # Handles form logic & localStorage


## ⚙️ How It Works
1. **Registration**
   - User enters details.
   - Data (name, email, password) is saved to `localStorage`.

2. **Login**
   - User enters email and password.
   - Script checks against stored credentials.
   - If correct → Redirects to `dashboard.html`.

3. **Dashboard**
   - Displays "Hello, [username]".
   - Logout button clears session and redirects back to login.

## 🛠️ Technologies Used
- **HTML5** – Structure of pages
- **CSS3** – Styling and transitions
- **JavaScript (ES6)** – Client-side logic
- **Font Awesome** – Icons for input fields

## ▶️ Usage
1. Open `index.html` in a browser.
2. Create a new account using the **Sign Up** form.
3. Log in with the same credentials.
4. You’ll be redirected to the dashboard.
5. Click **Logout** to return to the login page.

## ⚠️ Limitations
- No backend integration – all data is stored in the browser’s `localStorage`.
- Not secure for production (passwords are not hashed).
- Meant for **learning/demo purposes only**.

## 📸 Screenshots
- **Login & Register Page**
- **Dashboard with Welcome Message**

---

👨‍💻 Developed for practice with **Front-End Web Development**.
