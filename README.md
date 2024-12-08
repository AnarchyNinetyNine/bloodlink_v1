# BloodLink v1

## Getting Started

Welcome to the project! This application is built using ['Next.js'](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, make sure you have the following installed:

- ['Node.js'](https://nodejs.org/) (v14 or later)
- ['npm'](https://www.npmjs.com/) (comes with Node.js) or ['yarn'](https://yarnpkg.com/) / ['pnpm'](https://pnpm.io/) / ['bun'](https://bun.sh/)

## Installation

To get started with the project, clone this repository and install the dependencies:

```bash
git clone https://github.com/AnarchyNinetyNine/bloodlink_v1
cd bloodlink_v1
npm install --legacy-peer-deps
```

## Environment Variables
Before running the application, you need to create a .env file in the root directory and define the following environment variables:

```bash
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database>?schema=public"  
JWT_SECRET=<your-secret-key>  
```

### Explanation

'DATABASE_URL'
This is the connection string for your PostgreSQL database. Replace the placeholders as follows:

<user>: Your PostgreSQL username
<password>: Your PostgreSQL password
<database>: The name of your database

Ensure the database is accessible from your development environment.

'JWT_SECRET'
A secret key used for signing and verifying JSON Web Tokens (JWTs). Use a secure and random string. For example, generate one using the following command:
```bash
openssl rand -base64 32
```

## Running the Development Server

Once you’ve set up your environment variables, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Now, open ['http://localhost:3000'](http://localhost:3000) in your browser to view the app. The page will auto-update as you make changes to the code.

# Available Pages

Here are the available pages in the application:

## 1. Home Page (`/`)
The landing page of the application. This page provides an introduction and access to key areas of the app.

## 2. Donor Account Sign-Up (`/donor/account/sign-up`)
A registration page for new donors. On this page, users can create an account by providing their details.

## 3. Donor Account Sign-In (`/donor/account/sign-in`)
An authentication page for existing users to log in using their credentials. After successful sign-in, users can access their dashboard and other features.

## 4. Dashboard (`/dashboard`)
The central hub where authenticated users can view and manage their account settings, donations, and other activities. This page requires users to be logged in.

---

# Development Tips

## Hot Reloading
The development server supports hot reloading, which means any changes you make to the code will automatically be reflected in the browser without the need for a manual refresh.

## Font Optimization
This project uses the `next/font` feature to automatically optimize and load the Geist font, improving performance and user experience.

---

# Customizing the Project

## Pages
You can start editing the pages by modifying the corresponding files in the `app` directory (e.g., `app/page.tsx` for the homepage).

## Styles
Modify the styling as needed in the `styles` directory to change the look and feel of the application.

## Components
Custom components can be added to the `components` directory for reuse throughout the app.


## Tech Stack and Libraries

This project utilizes the following tech stack and libraries:

### **Frontend**
- **React** (v19.0.0-rc): A JavaScript library for building user interfaces. React is used to build interactive UIs and handle state management.  
  ['React Documentation'](https://reactjs.org/docs/getting-started.html)

- **Next.js** (v15.0.3): A React framework that enables server-side rendering, static site generation, and API routes. It is used for building the full-stack application with features like automatic code splitting, fast refresh, and optimized performance.  
  ['Next.js Documentation'](https://nextjs.org/docs)

- **Tailwind CSS** (v3.4.1): A utility-first CSS framework for rapid UI development. It is used to style components with minimal effort and customizability.  
  ['Tailwind CSS Documentation'](https://tailwindcss.com/docs)

- **Framer Motion** (v11.11.17): A library for animations and interactions, used for adding animations to UI components.  
  ['Framer Motion Documentation'](https://www.framer.com/motion/)

- **React Hook Form** (v7.53.2): A library for handling forms in React with minimal re-rendering and good performance. It simplifies form validation and state management.  
  ['React Hook Form Documentation'](https://react-hook-form.com/)

- **React Hot Toast** (v2.4.1): A simple toast notification library for React, used to display loading, success, and error messages throughout the application.  
  ['React Hot Toast Documentation'](https://react-hot-toast.com/)

- **clsx** (v2.1.1): A utility for constructing `className` strings conditionally, used to simplify applying dynamic styles in JSX.  
  ['clsx Documentation'](https://github.com/lukeed/clsx)

### Design Inspirations  
The design of this project has been thoughtfully curated using resources from the following platforms:  

- [**Cuicui Day**](https://cuicui.day/): Leveraged for its elegant and minimalist UI patterns that enhance both aesthetics and functionality.  
- [**Syntax UI**](https://syntaxui.com/): Inspired by its component-based approach for creating modular, scalable, and reusable design elements.  
- [**UI Layout**](https://www.ui-layout.com/): Used as a reference for fluid and adaptive layout strategies to ensure responsiveness across devices.  
- [**Flash UI Blocks**](https://flashui.site/blocks): Provided ready-to-use blocks for efficient prototyping and development.  


### **Backend and Database**
- **Prisma** (v6.0.0): A TypeScript ORM that simplifies database operations with auto-generated queries, migrations, and schema management. Used for interacting with the database (e.g., creating and querying users).  
  ['Prisma Documentation'](https://www.prisma.io/docs)

- **bcrypt** (v5.1.1) / **bcryptjs** (v2.4.3): Libraries used for hashing passwords to ensure security when storing user credentials. `bcryptjs` is a pure JavaScript implementation of bcrypt, providing similar functionality.  
  ['bcrypt Documentation'](https://www.npmjs.com/package/bcrypt)  
  ['bcryptjs Documentation'](https://www.npmjs.com/package/bcryptjs)

- **JSON Web Token (JWT)** (v9.0.2): A compact, URL-safe means of representing claims between two parties. Used for securely transmitting user authentication tokens.  
  ['JWT Documentation'](https://jwt.io/introduction/)

### **Development Tools**
- **TypeScript** (v5): A statically typed superset of JavaScript that adds type safety and enables advanced features like interfaces and type inference.  
  ['TypeScript Documentation'](https://www.typescriptlang.org/docs/)

- **ESLint** (v8): A tool for identifying and fixing problems in JavaScript and TypeScript code, ensuring code quality and consistency.  
  ['ESLint Documentation'](https://eslint.org/docs/user-guide/getting-started)

- **Prisma Migrations** (v6.0.0): Prisma's database migration tool for versioning and applying schema changes to the database.  
  ['Prisma Migrations Documentation'](https://www.prisma.io/docs/concepts/components/prisma-migrate)

- **Nodemon** (v3.1.7): A tool that automatically restarts the Node.js application when file changes are detected, making the development process faster and more efficient.  
  ['Nodemon Documentation'](https://nodemon.io/)

- **PostCSS** (v8): A tool for transforming CSS with JavaScript plugins, used for enhancing and optimizing styles.  
  ['PostCSS Documentation'](https://postcss.org/)

### **Other Libraries**
- **@prisma/client** (v6.0.0): A library that auto-generates the client API for interacting with the database, built on top of Prisma ORM.  
  ['@prisma/client Documentation'](https://www.prisma.io/docs/concepts/components/prisma-client)

- **Axios** (v1.7.9): A promise-based HTTP client for making requests to RESTful APIs. Used to interact with the backend services.  
  ['Axios Documentation'](https://axios-http.com/docs/intro)

- **@react-google-maps/api** (v2.20.3): A set of React components for integrating Google Maps into the project, providing a seamless experience for map-based features.  
  ['@react-google-maps/api Documentation'](https://react-google-maps-api-docs.netlify.app/)

- **@tabler/icons-react** (v3.22.0): A library of icons for use with React applications, providing scalable and customizable SVG icons.  
  ['@tabler/icons-react Documentation'](https://tablericons.com/)

- **Oxy UI** (v3.0.3): A React component library for quickly building UI elements with ease.  
  ['Oxy UI Documentation'](https://oxy-ui.com)

### **Environment and Build Tools**
- **dotenv** (v16.4.7): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.  
  ['dotenv Documentation'](https://www.npmjs.com/package/dotenv)

- **tailwindcss-animate** (v1.0.7): A library providing utility classes for animations in Tailwind CSS.  
  ['tailwindcss-animate Documentation'](https://github.com/benface/tailwindcss-animate)

---

This stack provides a robust foundation for building a modern full-stack web application, with a strong emphasis on performance, security, and developer experience.
