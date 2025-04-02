import React, { useState } from "react";
import Button from './Button';

const EmailInput = ({ buttonText }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            setError("Please enter your work email");
        } else {
            if (validateEmail(email)) {
                alert("Form submitted");
            } else {
                setError("Please enter a valid email address.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-between flex-col items-center sm:flex-row gap-[12px] md:gap-[7px]">
                <div className="w-full">
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full p-2 text-lg border border-gray-300 rounded-[3px] h-[53px] text-gray-900 placeholder:text-gray-300"
                        placeholder="Your Work Email"
                    />
                </div>
                <div className="w-full">
                    <Button className="h-[53px] w-full md:w-[210px] bg-red-600 text-[16px]" type="submit">
                        {buttonText}
                    </Button>
                </div>
            </div>
            {error && <div className="flex justify-center text-white text-sm mt-2">{error}</div>}
        </form>
    );
};

export default EmailInput;
