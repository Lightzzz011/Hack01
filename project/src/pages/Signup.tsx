import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpId, setOtpId] = useState('');
    const [step, setStep] = useState(1); // 1: Email, 2: OTP

    const handleSendOtp = async () => {
      try {
          const response = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
          const data = response.data as { otpId: string };
          setOtpId(data.otpId);
          setStep(2);
      } catch (error) {
          alert('Failed to send OTP');
      }
  };

  const handleVerifyOtp = async () => {
      try {
          await axios.post('http://localhost:5000/api/auth/verify-otp', { otpId, otp, email });
          alert('OTP verified successfully!');
          // Redirect to login or dashboard
      } catch (error) {
          alert('Invalid OTP or error verifying OTP');
      }
  };

    return (
        <div>
            {step === 1 ? (
                <div>
                    <h1>Sign Up</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSendOtp}>Send OTP</button>
                </div>
            ) : (
                <div>
                    <h1>Verify OTP</h1>
                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
            )}
        </div>
    );
};

export default Signup;