# AapKaGhar

AapKaGhar is a responsive web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project aims to provide a seamless and efficient platform for managing real estate properties.

## Features
- User authentication and authorization
- Property listing and management
- Search and filter options
- Responsive and user-friendly UI
- API integration for dynamic data fetching

## Project Structure
The project is structured into two main folders:
1. **api/** - Contains the backend code (server-side)
2. **client/** - Contains the frontend code (client-side)

## Installation & Setup
To set up the project locally, follow these steps:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/AapKaGhar.git
cd AapKaGhar
```

### 2. Install Dependencies

Run the following command in both `api` and `client` folders to install the required node modules:

```bash
npm install
```

### 3. Environment Variables Setup


#### Client Environment Variables

Create a `.env` file in the `client` folder with the following variables:

```
REACT_APP_URL='http://localhost:3000'
REACT_APP_SUPA_URL=your_supabase_url
REACT_APP_SUPA_API_KEY=your_supabase_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_API_ID=your_firebase_api_id
REACT_APP_CHATBOX_API_KEY=your_chatbox_api_key
```

**Functions:**
- `REACT_APP_URL`: Base URL for your frontend application
- `REACT_APP_SUPA_URL`: URL for Supabase connection (for database/authentication)
- `REACT_APP_SUPA_API_KEY`: API key for Supabase services
- `REACT_APP_FIREBASE_API_KEY`: API key for Firebase integration
- `REACT_APP_FIREBASE_API_ID`: Application ID for Firebase
- `REACT_APP_CHATBOX_API_KEY`: API key for chat functionality

#### Server Environment Variables

Create a `.env` file in the `api` folder with the following variables:

```
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SENDER_EMAIL=ishaanj2612@gmail.com
```

**Functions:**
- `MONGO`: MongoDB connection string for database access
- `JWT_SECRET`: Secret key for JSON Web Token generation and validation
- `PORT`: Port number on which the server will run
- `NODE_ENV`: Current environment (development, production, etc.)
- `SMTP_USER`: Username for email service (for sending notifications/password resets)
- `SMTP_PASS`: Password for email service
- `SENDER_EMAIL`: Email address used as the sender for all outgoing emails

### 4. Running the Server

Navigate to the `api` folder and start the backend server:

```bash
cd api
npm run server
```


### 5. Running the Client

Navigate to the `client` folder and start the frontend:

```bash
cd client
npm start
```

### 6. Access the Application

Once both the client and server are running, open your browser and visit:

```
http://localhost:3000
```

## Technologies Used

* **Frontend**: React.js, Redux, Bootstrap
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: JWT (JSON Web Tokens)

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

Developed by **Ishaan Jain**

new update