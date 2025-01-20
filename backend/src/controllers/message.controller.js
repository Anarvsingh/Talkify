import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { io, getRecieverSocketId } from "../lib/socket.js";


export const getUseersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}


export const getMessages = async (req,res) => {
    try {
        
         const {id: userToChatId} = req.params;
         const myId = req.user._id;

         const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
         })
         res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}


export const sendMessage = async (req, res) => {
    try {
      const { text, image } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;
  
      let imageUrl;
  
      if (image) {
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse.secure_url;
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
      });
  
      await newMessage.save();
  
      const receiverSocketId = await getRecieverSocketId(receiverId); // Handle async behavior
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
      }
  
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error sending message:", error);
      let errorMessage = "An error occurred";
      if (error.name === "ValidationError") {
        errorMessage = "Validation error: " + error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      res.status(400).json({ error: errorMessage }); // More specific message
    }
  };
