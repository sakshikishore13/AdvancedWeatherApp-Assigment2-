Weather App (Full Stack CRUD)

Description:
This project is a full-stack weather application that allows users to:
- Enter a location and a date range
- Fetch the current weather using OpenWeatherMap API
- Save the weather data and query details into a MongoDB database
- View and delete saved weather queries

Tech Stack:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (MongoDB Atlas)
- API: OpenWeatherMap

Setup Instructions:
1. Clone or extract the project folder.
2. Install required packages in the terminal using:
   npm install

3. Create a `.env` file in the root directory with the following:
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5000

4. Start the backend server using:
   node server.js

5. Open the `index.html` file in your browser.

6. In `index.html`, replace the line:
   const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
   with your actual OpenWeatherMap API key.

Functionality:
- Fetches and displays current weather data for the entered location.
- Allows storing the search with a date range into MongoDB.
- Displays saved records in a table.
- Users can delete individual records.

Note:
This version fetches only current weather data. Historical weather data requires a paid plan from OpenWeatherMap.
