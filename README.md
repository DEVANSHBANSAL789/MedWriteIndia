# MedWrite

MedWrite is a comprehensive web application built with React and Vite. It serves as a platform related to medical writing, offering resources, courses, a career centre, freelance opportunities, and a professional network.

## Technologies Used

- **Framework**: [React](https://react.dev/) 19
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```text
MedWrite/
├── public/                 # Public static assets
├── src/
│   ├── assets/             # Images, fonts, and other assets used in components
│   ├── components/         # Reusable React components
│   │   ├── Accordion.jsx
│   │   ├── CourseCard.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHero.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── VideoSection.jsx
│   ├── data/               # Static data and content (e.g., content.js)
│   ├── pages/              # Route-based page components
│   │   ├── About.jsx
│   │   ├── CareerCentre.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── Ethics.jsx
│   │   ├── Events.jsx
│   │   ├── FreelanceCentre.jsx
│   │   ├── Home.jsx
│   │   ├── LearningPathways.jsx
│   │   ├── Membership.jsx
│   │   ├── ProfessionalNetwork.jsx
│   │   └── Resources.jsx
│   ├── App.jsx             # Main application component with routing logic
│   ├── App.css             # Application-specific styles
│   ├── index.css           # Global styles and Tailwind CSS directives
│   └── main.jsx            # Application entry point
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration (used by Tailwind)
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite bundler configuration
```

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd MedWrite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR).
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run preview`**: Locally previews the production build.
- **`npm run lint`**: Runs the oxlint linter to check for code quality issues.
