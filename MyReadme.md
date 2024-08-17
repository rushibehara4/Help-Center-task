# Help Center API and React Project

## Features

- **Frontend**: 
  - Built with React.
  - Search functionality for filtering cards by title.
  - Modal for submitting new help center cards.

- **Backend**: 
  - Built with Node.js and Express.
  - RESTful API for managing help center cards.
  - Connection to MongoDB for data storage.

- **Database**: 
  - MongoDB for storing help center card details.

## Backend Setup

1. Navigate to the `cd backend` folder.
2. Install dependencies: `npm install`
3. Run the server: `node index.js`

## Frontend Setup

1. Navigate to the `cd frontend` folder.
2. Install dependencies: `npm install`
3. Run the React app: `npm run dev`

## API Endpoints

- **GET /api/ping:** Check if the server is running.

- **POST /api/cards:** Create a new card.
- **GET /api/cards:** Retrieve all cards.
- **GET /api/cards/:title:** Retrieve a specific card by title.
