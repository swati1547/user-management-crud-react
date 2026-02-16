# User Management CRUD App (React)

A simple and clean **User Management CRUD Application** built using **React + SCSS**.
This project demonstrates core frontend concepts like form handling, validation, reusable components, API integration, and clean UI structure.

🔗 Live Repo: https://github.com/swati1547/user-management-crud-react

---

## Features

- Add new users
- Edit existing users
- Delete users
- View users in table format
- Form validation (live validation)
- Clean UI with SCSS styling
- Reusable components
- Responsive layout

---

## Tech Stack

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- SCSS (Modular styling)
- HTML5 + CSS3
- Git & GitHub

---

## Project Structure

```
user-management-crud-react/
│
├── public/
│
├── src/
│   ├── assets/
│
│   ├── components/
│   │   ├── userForm.jsx        # Reusable form (Create + Update)
│   │   └── userTable.jsx       # User list table
│
│   ├── config/
│   │   └── userFields.js       # Form field configuration (dynamic form)
│
│   ├── pages/
│   │   └── Home.jsx            # Main page (list + modal handling)
│
│   ├── services/
│   │   └── userApi.js          # Axios API layer (CRUD calls)
│
│   ├── utils/
│   │   └── validationSchema.js # Yup validation schema
│
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point (Vite)
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

```

---

## Concepts Covered

This project focuses on strengthening core frontend fundamentals:

- React component architecture
- Props & state management
- Controlled forms
- Real-time validation
- Conditional rendering
- List rendering with keys
- Event handling
- SCSS modular styling
- Git workflow

---

## Form Validations

- Name required
- Email format validation
- Mobile number validation
- Live warning messages
- Browser validation handled properly

---

## Styling

- SCSS setup with modular structure
- Clean and minimal UI
- Table layout optimized for readability
- Custom edit/delete actions (no default button styling)
- Consistent spacing and layout

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/swati1547/user-management-crud-react.git
cd user-management-crud-react
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## Screens Included

- User list table
- Add/Edit user form
- Live validation messages
- Styled action controls

---

## Future Improvements

- Backend integration (Node / Spring Boot)
- Pagination
- Search & filters
- Toast notifications
- Unit testing
- Deployment (Netlify / Vercel)

---

## Author

**Swati Garje**
Frontend Developer (React)
Focused on building strong fundamentals and real-world projects.

GitHub: https://github.com/swati1547

---
