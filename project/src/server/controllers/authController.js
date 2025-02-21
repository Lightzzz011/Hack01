import { sendOtpEmail } from '../utils/emailSender.js';
import User from '../models/User.js';

// In-memory store for OTPs (use Redis in production)
const otpStore = new Map();

export const sendOtp = async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const otpId = Date.now().toString();

    // Store OTP with a 5-minute expiry
    otpStore.set(otpId, { email, otp, expires: Date.now() + 300000 });

    // Send OTP via email
    sendOtpEmail(email, otp);

    res.status(200).json({ otpId });
};

export const verifyOtp = async (req, res) => {
    const { otpId, otp, email, password } = req.body;
    const storedOtp = otpStore.get(otpId);

    if (!storedOtp || storedOtp.email !== email || storedOtp.otp !== parseInt(otp)) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (Date.now() > storedOtp.expires) {
        return res.status(400).json({ message: 'OTP expired' });
    }

    // Create user account
    const user = new User({ email, password });
    await user.save();

    // Clear OTP from store
    otpStore.delete(otpId);

    res.status(201).json({ message: 'Account created successfully' });
};