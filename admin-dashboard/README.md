# U.G.O. Admin Dashboard

This is the admin dashboard web application for the U.G.O. service platform.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system
- Firebase project created with Firestore and Authentication enabled

### Installation

1. Navigate to the `admin-dashboard` directory:

```bash
cd admin-dashboard
```

2. Install dependencies:

```bash
npm install react react-dom firebase
npm install --save-dev @types/react @types/react-dom
```

3. Configure Firebase:

- Replace the placeholder values in `src/firebaseConfig.ts` with your Firebase project configuration.

### Running the Dashboard

To start the development server:

```bash
npm start
```

or if using Create React App:

```bash
npm run start
```

### Building for Production

To build the app for production:

```bash
npm run build
```

## Features

- View registered users
- View service requests
- View usage statistics
- Send notifications to users
- Moderate ratings and comments

## Notes

- Ensure your Firebase Firestore rules allow read/write access as needed for the dashboard.
- Install any additional dependencies as required.

## Troubleshooting

If you encounter module not found errors, verify that all dependencies are installed correctly.

For any issues, consult the Firebase and React documentation.

---
