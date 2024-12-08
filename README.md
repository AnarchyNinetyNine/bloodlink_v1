This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Tech Stack and Libraries

This project utilizes the following tech stack and libraries:

### **Frontend**
- **React** (v19.0.0-rc): A JavaScript library for building user interfaces. React is used to build interactive UIs and handle state management.  
  [React Documentation](https://reactjs.org/docs/getting-started.html)

- **Next.js** (v15.0.3): A React framework that enables server-side rendering, static site generation, and API routes. It is used for building the full-stack application with features like automatic code splitting, fast refresh, and optimized performance.  
  [Next.js Documentation](https://nextjs.org/docs)

- **Tailwind CSS** (v3.4.1): A utility-first CSS framework for rapid UI development. It is used to style components with minimal effort and customizability.  
  [Tailwind CSS Documentation](https://tailwindcss.com/docs)

- **Framer Motion** (v11.11.17): A library for animations and interactions, used for adding animations to UI components.  
  [Framer Motion Documentation](https://www.framer.com/motion/)

- **React Hook Form** (v7.53.2): A library for handling forms in React with minimal re-rendering and good performance. It simplifies form validation and state management.  
  [React Hook Form Documentation](https://react-hook-form.com/)

- **React Hot Toast** (v2.4.1): A simple toast notification library for React, used to display loading, success, and error messages throughout the application.  
  [React Hot Toast Documentation](https://react-hot-toast.com/)

- **clsx** (v2.1.1): A utility for constructing `className` strings conditionally, used to simplify applying dynamic styles in JSX.  
  [clsx Documentation](https://github.com/lukeed/clsx)

### **Backend and Database**
- **Prisma** (v6.0.0): A TypeScript ORM that simplifies database operations with auto-generated queries, migrations, and schema management. Used for interacting with the database (e.g., creating and querying users).  
  [Prisma Documentation](https://www.prisma.io/docs)

- **bcrypt** (v5.1.1) / **bcryptjs** (v2.4.3): Libraries used for hashing passwords to ensure security when storing user credentials. `bcryptjs` is a pure JavaScript implementation of bcrypt, providing similar functionality.  
  [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)  
  [bcryptjs Documentation](https://www.npmjs.com/package/bcryptjs)

- **JSON Web Token (JWT)** (v9.0.2): A compact, URL-safe means of representing claims between two parties. Used for securely transmitting user authentication tokens.  
  [JWT Documentation](https://jwt.io/introduction/)

### **Development Tools**
- **TypeScript** (v5): A statically typed superset of JavaScript that adds type safety and enables advanced features like interfaces and type inference.  
  [TypeScript Documentation](https://www.typescriptlang.org/docs/)

- **ESLint** (v8): A tool for identifying and fixing problems in JavaScript and TypeScript code, ensuring code quality and consistency.  
  [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)

- **Prisma Migrations** (v6.0.0): Prisma's database migration tool for versioning and applying schema changes to the database.  
  [Prisma Migrations Documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)

- **Nodemon** (v3.1.7): A tool that automatically restarts the Node.js application when file changes are detected, making the development process faster and more efficient.  
  [Nodemon Documentation](https://nodemon.io/)

- **PostCSS** (v8): A tool for transforming CSS with JavaScript plugins, used for enhancing and optimizing styles.  
  [PostCSS Documentation](https://postcss.org/)

### **Other Libraries**
- **@prisma/client** (v6.0.0): A library that auto-generates the client API for interacting with the database, built on top of Prisma ORM.  
  [@prisma/client Documentation](https://www.prisma.io/docs/concepts/components/prisma-client)

- **Axios** (v1.7.9): A promise-based HTTP client for making requests to RESTful APIs. Used to interact with the backend services.  
  [Axios Documentation](https://axios-http.com/docs/intro)

- **@react-google-maps/api** (v2.20.3): A set of React components for integrating Google Maps into the project, providing a seamless experience for map-based features.  
  [@react-google-maps/api Documentation](https://react-google-maps-api-docs.netlify.app/)

- **@tabler/icons-react** (v3.22.0): A library of icons for use with React applications, providing scalable and customizable SVG icons.  
  [@tabler/icons-react Documentation](https://tablericons.com/)

- **Oxy UI** (v3.0.3): A React component library for quickly building UI elements with ease.  
  [Oxy UI Documentation](https://oxy-ui.com)

### **Environment and Build Tools**
- **dotenv** (v16.4.7): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.  
  [dotenv Documentation](https://www.npmjs.com/package/dotenv)

- **tailwindcss-animate** (v1.0.7): A library providing utility classes for animations in Tailwind CSS.  
  [tailwindcss-animate Documentation](https://github.com/benface/tailwindcss-animate)

---

This stack provides a robust foundation for building a modern full-stack web application, with a strong emphasis on performance, security, and developer experience.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
