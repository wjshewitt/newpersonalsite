# Project Overview

This is a personal website for Will Hewitt, a history graduate in London. The site is built with [Next.js](https://nextjs.org/) and styled with [Tailwind CSS](https://tailwindcss.com/). The design is simple and clean, with a focus on readability. The site is responsive and works well on different screen sizes.

The main technologies used are:

*   **Next.js:** A React framework for building server-side rendered and static websites.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

The project is structured as a standard Next.js application. The main page is `app/page.tsx`, which renders the `HomeShell` component. The `HomeShell` component is the main layout of the site and includes the navigation and different sections of the page. The content of the sections is hardcoded in the `HomeShell.tsx` file.

The site's aesthetic is described as "sophisticated minimalism meeting classical typography." It uses a warm, off-white background with deep teal text and accents. The typography features EB Garamond for headings and body text, and IBM Plex Mono for navigation and UI labels.

The implementation is a single-page application with a fixed navigation bar and scrollable content sections. It features a fixed border frame to create a window effect, and a radial gradient vignette at the top of the page for an atmospheric effect. The navigation bar has a hover effect that animates an underline for each link.

# Building and Running

To get started with the project, you need to have Node.js and npm installed.

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server on `http://localhost:3000`.

3.  **Build the project:**

    ```bash
    npm run build
    ```

    This will create an optimized production build of the project.

4.  **Start the production server:**

    ```bash
    npm run start
    ```

    This will start the production server.

5.  **Lint the project:**

    ```bash
    npm run lint
    ```

    This will run the ESLint linter to check for any code quality issues.

# Development Conventions

*   **Coding Style:** The project uses the standard Next.js coding style.
*   **Testing:** There are no tests in the project.
*   **Contribution Guidelines:** There are no contribution guidelines in the project.
