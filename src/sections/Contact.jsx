import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [buttonState, setButtonState] = useState('idle');

    const validateEmail = (email) => {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/;
        return pattern.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailValid(false);
            return;
        }

        setButtonState('sending');

        // const res = await fetch('/api/sendEmail', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, message }),
        // });

        setTimeout(() => {
            setButtonState('sent');
        }, 2000);

        console.log(res);
    };

    return (
        <div className="w-full max-w-[600px] mx-auto relative">
            <form onSubmit={handleSubmit} className="space-y-8 group">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-black text-sm rounded block w-full p-2.5 outline-none transform duration-200 
                        ${!emailValid
                            ? 'shadow-[0_0_2px_rgba(255,0,0),0_0_5px_rgba(255,0,0,0.2),0_0_15px_rgba(255,0,0,0.2),0_0_30px_rgba(255,0,0,0.2)] placeholder-red-800'
                            : 'focus:shadow-[0_0_2px_rgba(255,255,255,0.5),0_0_5px_rgba(255,255,255,0.2),0_0_15px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.2)] placeholder-white/40'
                        }`}
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                />

                {!emailValid && (
                    <span className="pt-16 text-sm text-red-800">
                        Please enter a valid email address
                    </span>
                )}

                <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="resize-none block p-2.5 w-full min-h-[80px] text-sm rounded bg-black outline-none placeholder-white/40 transform duration-200 focus:shadow-[0_0_2px_rgba(255,255,255),0_0_5px_rgba(255,255,255,0.5),0_0_15px_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.15)]"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="h-10 w-10 rotation-background"/>

                <button
                    type="submit"
                    className="rotation-background py-3 px-5 text-sm font-medium text-center text-white rounded w-full group-invalid:pointer-events-none"
                    disabled={!emailValid}
                >
                    {buttonState === 'idle' && 'Send message'}
                    {buttonState === 'sending' && (
                        <svg
                            className="m-auto animate-spin opacity-0" // Initial opacity 0 for animation
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onAnimationStart={() => {
                                const svg = document.querySelector('.animate-spin');
                                svg.style.opacity = 1; // Set opacity to 1 during animation
                            }}
                        >
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                        </svg>
                    )}
                    {buttonState === 'sent' && (
                        <svg
                            className="m-auto check opacity-0 fadeInImage" // Initial opacity 0 for animation
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 13l4 4L19 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </form>

            <span className="absolute -z-10 top-0 left-0 right-0 mx-auto w-[50%] h-[50%] bg-white/30 rounded-full blur-[90px]" />
        </div>
    );
};

export default Contact;
