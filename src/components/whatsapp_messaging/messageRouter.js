import { Router } from "express";

import { sendWPMessage } from "./messageController.js";

const router = Router();

router.post("/send-message", sendWPMessage);

export default router;
