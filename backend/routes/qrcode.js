import express from "express";
import crypto from "crypto";

const router = express.Router();

let currentToken = null;

function generateToken() {
  currentToken = {
    value: crypto.randomBytes(8).toString("hex"),
    expiresAt: Date.now() + 20000
  };
}

router.post("/qrcode", (req, res) => {
  generateToken();
  
  const { subject, time, duration, room, professor } = req.body;
  if (!subject || !time || !duration || !room || !professor){
    res.json({ message: 'All fields required'})
  }

    res.json({
      token: `${currentToken.value}:${currentToken.expiresAt}:${subject}:${time}:${duration}:${room}:${professor}`
    });
});

export default router;
