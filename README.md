User 1 Credentials:    Username - tom@gmail.com  
                       Password - 12345678



User 2 Credentials:   Username - Kevin@gmail.com  
                      Password - 12345678



Link to WebApp ->    https://talkify-c59g.onrender.com



Please Use Incognito Mode for the second User while SigningIn :)






# ✨ Full Stack Realtime Chat App ✨

# Project Overview

This is a **Full Stack Realtime Chat Application** that allows users to communicate instantly with each other using real-time messaging powered by **Socket.io**. The application incorporates user authentication and authorization, online user status tracking, and error handling for a seamless chat experience. It also provides a clean and responsive UI, optimized for different screen sizes, using **TailwindCSS** and **Daisy UI**. 

The backend is built using **Node.js** and **Express**, with **MongoDB** for database management, ensuring scalability and security. JWT tokens are used for secure authentication and session management.

# Tech Stack

- **Frontend**: React.js, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **WebSocket**: Socket.io for real-time communication
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Zustand
- **Image Storage**: Cloudinary for image uploads and management
- **Deployment**: Vercel (Frontend), Heroku/Render (Backend)

# How it Works

1. **User Authentication & Authorization**: 
   - Users can register and log in using JWT-based authentication.
   - Authorization ensures that only logged-in users can send messages and access the chat features.
   
2. **Real-time Messaging**: 
   - Powered by **Socket.io**, users can send and receive messages in real-time without page reloads.
   - The application ensures efficient message delivery and live updates for all connected users.

3. **Online User Status**:
   - The application tracks which users are online using Socket.io, showing real-time status updates within the chat interface.

4. **Global State Management**: 
   - Zustand is used for managing the global state of the application, such as user data and chat status, across different components.

5. **Error Handling**: 
   - Robust error handling is implemented both on the client and server side, ensuring smooth operation even in case of issues like network failures or invalid operations.

# Key Features

- 🔒 **Authentication & Authorization**: Secure login and registration using JWT.
- 💬 **Real-time Messaging**: Send and receive messages instantly via Socket.io.
- 🟢 **Online Status**: View the online/offline status of other users in real-time.
- 📊 **Global State Management**: Efficient state handling with Zustand.
- 🖼️ **Image Upload**: Upload profile pictures or message attachments via Cloudinary.
- 🛠️ **Error Handling**: Comprehensive error handling across client and server for better user experience.
- 🌐 **Cross-Device Compatibility**: Responsive UI with TailwindCSS and Daisy UI for a smooth experience across devices.
- 🚀 **Deployment**: Easy-to-deploy setup with instructions for hosting on platforms like Vercel and Heroku.

## Setup and Configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/realtime-chat-app.git
   cd realtime-chat-app
   ```

2. Create a `.env` file and add the following environment variables:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   JWT_SECRET=your_jwt_secret
   
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   NODE_ENV=development
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the application:

   ```bash
   npm run build
   ```

5. Start the application:

   ```bash
   npm start
   ```



