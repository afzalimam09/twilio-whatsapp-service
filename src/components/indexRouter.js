import { Router } from "express";
import messageRouter from "./whatsapp_messaging/messageRouter.js";

const router = Router();

router.use("/wp-message", messageRouter);

export default router;
