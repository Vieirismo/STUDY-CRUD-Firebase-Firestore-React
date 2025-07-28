# 🚀 React with Firebase Firestore Study Project (Real-time CRUD)

This project is a study and practice environment focused on building a React application that interacts with Firebase Firestore in real-time. It demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing "plans," using best practices in code organization and Firebase's modular SDK v9.

**As of now, only the backend part (Firebase Firestore integration) is fully functional and ready. The results of each operation (creation, reading, updating, deleting) can be seen in the browser's console and directly in the Firebase Firestore console.**

---

## ✨ Features

* **Plan Management:** Add, set (create/overwrite), update, and delete plans in Firestore.
* **Real-time Data:** Utilizes Firestore listeners to observe and display plan updates instantly on the frontend.
* **Data Filtering:** Example of using `where` queries to filter plans based on specific criteria.
* **Code Organization:** Clear separation between the "data access" layer (direct Firebase interaction) and the "actions" layer (business logic).

---

## 🛠️ Technologies Used

* **React:** JavaScript library for building user interfaces.
* **Firebase:**
    * **Firestore:** Flexible and scalable NoSQL database for real-time data storage and synchronization.
    * **Firebase CLI:** Command-line tool for managing Firebase projects (including Hosting).
* **JavaScript:** Primary programming language.
* **HTML/CSS:** Basic application structure and styling.
* **(Optional: PropTypes)**: Library for runtime type validation of `props` in React components (for pure JavaScript projects).

---

## ⚙️ How to Run the Project

Follow these steps to set up and run the project on your local machine:

### Prerequisites

* Node.js (version 14 or higher recommended)
* npm (Node.js package manager)
* A Firebase account and a project configured in the console.

### Installation and Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Vieirismo/-ESTUDO-CRUD-Firebase-Firestore-React](https://github.com/Vieirismo/-ESTUDO-CRUD-Firebase-Firestore-React)
    cd nome-da-pasta # Replace with your project's folder name
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Firebase Locally:**
    * Install Firebase CLI tools globally (if you haven't already):
        ```bash
        npm install -g firebase-tools
        ```
    * Log in to your Firebase account:
        ```bash
        firebase login
        ```
    * Initialize Firebase in your project (from the root of your `estudos_react` folder):
        ```bash
        firebase init
        ```
        * Select `Hosting`.
        * Choose `Use an existing project` and select `estudos-next-f68b0` (or your Firebase project name).
        * For the public directory, type `build` (if you used Create React App).
        * Configure as a single-page app: `Yes`.
        * Do not set up GitHub Actions (unless you intend to).
        * **Attention:** If you encounter errors like "Firebase Data Connect API has not been used," access the link provided in the terminal to manually enable the API in the Google Cloud console, then try `firebase init` again.

4.  **Configure Firebase Credentials:**
    * Create a file `src/lib/firebase_config.js` (or wherever you are initializing Firebase).
    * Paste your Firebase credentials (found in your Firebase project settings > "Project settings" > "Your apps" > "Web" > "Config").

    ```javascript
    // src/lib/firebase_config.js
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore"; // Import getFirestore from the correct module

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```
    

### Running the Development Server


After setup, you can start the application:

```bash
npm start
```

---

# 📂 Project Structure 

```.
├── public/                 # Public assets (index.html, favicon, etc.)
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # Application entry point
│   ├── App.css
│   ├── logo.svg
│   ├── lib/
│   │   └── firebase_config.js # Firebase configuration and initialization
│   ├── services/
│   │   ├── actions/        # Business logic and operation orchestration
│   │   │   └── plans_actions.js
│   │   ├── data_access/    # Direct interaction with Firebase Firestore
│   │   │   └── plans_access.js
│   │   └── observers/      # Functions for real-time Firestore listeners
│   │       └── plansObserver.js
│   └── types/              # (If you decide to use TypeScript) Interface definitions
│       └── planType.ts
├── .gitignore             
├── package.json
└── README.md
```

---
## 🤝 Contribution
Feel free to explore, modify, and enhance this project. Suggestions and pull requests are welcome!

---
## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).