import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUseersForSidebar,getMessages, sendMessage  } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users",protectRoute, getUseersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);


export default router;