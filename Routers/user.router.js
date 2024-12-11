import express from "express"
import { changePassword, forgotPassword, login,register, verifyString} from "../Controller/user.controller.js";

import { get } from "mongoose";

const router = express.Router(); // Create a new router object using Express

router.post("/register",register);
router.post("/login",login);
router.post("/forgotpassword",forgotPassword);
router.post("/verifystring",verifyString);
router.post("/changepassword",changePassword);



export default router;