# FrontEnd Development Capstone Project- Group 26
A React based collaborative website design for the final capstone project from Group 26, FrontEnd Academy Class 2026, TS Academy Phoenix Cohort 2026.

# Live Demo
This is the deployed link for the website: https://solstat.vercel.app/


# Project Summary
Team Co-Build is the 26th group assigned by TS Academy Phoenix  to participate in the collaborative final capstone project as part of the core requirements for the completion of the FrontEnd Development Phoenix Cohort. This project entails coding and hosting of a mockup figma design of a planet education website into a working web application using **React**, **HTML**, **CSS** and **Javascript**. It was designed to assess and demonstrate the team's proficiency in core front-end development, API integration, responsive design, React architecture, Git collaboration, documentation, and application deployment while translating provided designs into functional web applications - all skills covered throughout the Front-End Development TS Academy Course

# Team Members
1. Ajibade Abdulsalam https://github.com/Eclipse-017- Team Lead
2. Esther Okpor https://github.com/Estimilita/Estimilita - Asst Team Lead 1
3. Richard Okafor https://github.com/Rekahdo - Asst Team Lead 2
4. Adebayo Adebanjo https://github.com/silver-orioha
5. Silver Orioha https://github.com/bayoradebajo
6. Tosin Abdul https://github.com/tosinabdul2-sudo

# Team Contributions


The mockup design was divided into reusable React components, with members tasked with implementing and styling their respective sections to facilitate efficient collaboration and maintain a component-based architecture. Below is a summary of the team's contributions:

### 1. Hero Section

The Hero Section was handled by **Ajibade Abdulsalam**. He implemented the introductory layout and applied CSS principles including Flexbox, typography, spacing, and responsive design techniques to create an engaging landing section that introduces users to the website. As the team, his further responsiblities included:
    * Coordinating team activities and component assignments.
    * Managing Git collaboration and integration of members' contributions.
    * Reviewing and maintaining consistency across the codebase.
    * Ensuring adherence to the provided Figma design specifications.
    * Overseeing project structure and overall application architecture.


### 2. Image Gallery Section

The Image Section was implemented by **Esther Okpor**. She handled the layout and styling of the image gallery, ensuring that visual assets were displayed in an organized and responsive manner. The Planet Grid and Planet Card components of the Image Gallery section were also handled by her. She structured the planetary information cards and ensuring consistency in layout and styling across different screen sizes.

### 3. Video Section

The Video Section was developed by **Adebayo Adebanjo**. He integrated the video component and designed the surrounding content layout to provide users with an immersive educational experience.

### 4. Table Section

The Table Section was implemented by **Silver Orioha**. She was responsible for organizing and styling tabular information in a manner that promotes readability and accessibility.

### 5. Form Section

The Form Section was handled by **Richard Okafor**. He implemented the structure and styling of the user input and form validation while ensuring consistency with the overall design language of the application. 
 
#### Technical Features & Core Implementation

* **Dual-Layer Client Validation:** Implements native HTML5 constraint validation attributes (`required`, `maxLength`, and semantic `type="email"/"tel"`) directly on form inputs. This acts as an immediate structural boundary, providing a lightweight fallback validation layer before JavaScript execution begins.
* **Schema-Based Validation:** Leverages the **Yup** validation parsing engine to enforce rigorous data-integrity rules asynchronously prior to network dispatch. It features custom validation patterns, including a robust Regex matcher engineered to accept both standard and internationalized Nigerian phone formats (`0...` or `+234...`).
* **Real-time State & Constraint Tracking:** Implements dual-purpose real-time UI state tracking. As the user inputs text, character thresholds are automatically evaluated, and a dynamic tracking system calculates string limits to display exactly how many characters remain out of the maximum allocation ($100$ characters).
* **Network Interruption & Offline Resilience:** Employs a defensive connection fail-safe utilizing the browser's native `navigator.onLine` API. If a user tries to submit data while offline, the system halts execution immediately, blocks processing queues, and triggers a localized network alert banner without exhausting bandwidth.
* **Form URL-Encoding Serialization:** Implements asynchronous `fetch` requests pointing to the designated backend API layer (`https://whitebricks.com/tsacademy.php`). Raw state objects are securely transformed on the fly into `application/x-www-form-urlencoded` formats utilizing the modern `URLSearchParams` web standard.
* **Accessible (A11y) Architecture:** Built entirely utilizing accessible semantic elements. The form container incorporates dynamic `aria-live` regions (`assertive` and `polite`), paired with programmatic validation attributes (`aria-invalid` and `aria-describedby`) to automatically broadcast field-error states to assistive screen readers.

### 6. Footer Section

The Footer Section was developed by **Esther Okpor and Richard Okafor**. They both designed and styled the footer area, incorporating navigation elements and supplementary information while maintaining responsiveness.

### 7. Reusable Components and Integration

The reusable components, application integration, and were overseen by **Richard Okafor** 


# How to run the Project locally

Before getting started, ensure that Node.js is installed on your computer. You can verify the installation by running:
node -v

If Node.js is not installed, download and install it from the official website.

### Step 1: Open Your Terminal
Open your terminal or command prompt.

### Step 2: Clone the Repository

Navigate to the directory where you would like to save the project and run:
git clone <repository-url>

### Step 3: Navigate to the Project Directory
Move into the project's root directory (the directory containing the package.json file):
cd <project-folder-name>

### Step 4: Install Dependencies
Install all required project dependencies by running:npm install

This command will create a node_modules folder containing the packages required for the application to run.

Additionally, the project uses Yup for additional form validation and React Scroll for smooth page scrolling effect. 
If these libraries are not included in the installed dependencies, install it separately using this commands:
npm i yup
npm i react-scroll

### Step 5: Start the Development Server
Since the application is built with Vite, start the local development server with:
npm run dev

### Step 6: Open the Application in Your Browser
After the server starts successfully, the terminal will display a local URL similar to:
http://localhost:5173/

Open the link by Copying and pasting the address into your web browser. The application should now be running locally and ready for development.


### Conclusion

Through this collaborative approach, Team Co-Build successfully recreated the provided Figma design into a functional React web application while demonstrating the principles of component-based development, responsive design, version control, and teamwork.