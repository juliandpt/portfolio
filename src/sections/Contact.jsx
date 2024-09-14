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

    const resetForm = () => {
        setEmail('');
        setMessage('');
        setButtonState('idle');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailValid(false);
            return;
        }

        setButtonState('sending');

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (res.ok) {
                setButtonState('ok');

                setTimeout(() => {
                    resetForm();
                }, 3000);
            } else {
                setButtonState('ko');

                setTimeout(() => {
                    resetForm();
                }, 3000);
            }

        } catch (error) {
            console.error('Error al enviar el mensaje', error);
            setButtonState('error');

            setTimeout(() => {
                resetForm();
            }, 3000);
        }
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

                <button
                    type="submit"
                    className={`py-3 px-5 h-10 text-sm font-medium text-center rounded w-full transition duration-200
                        ${buttonState === 'ok' ? 'bg-green-500 text-white' : ''}
                        ${buttonState === 'ko' ? 'bg-red-100 text-white' : ''}
                        ${!emailValid || buttonState === 'sending'|| buttonState === 'ok' || buttonState === 'ko' || !email || !message
                            ? 'text-gray-500 cursor-not-allowed' 
                            : 'text-white hover:bg-white/10'
                        }`}
                    disabled={!emailValid || buttonState === 'sending' || buttonState === 'ok' || buttonState === 'ko' || !email || !message}
                >
                    {buttonState === 'idle' && 'Send message'}
                    {buttonState === 'sending' && (
                        <div className='flex space-x-2 justify-center items-center'>
                            <div className='h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                            <div className='h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                            <div className='h-2 w-2 bg-white rounded-full animate-bounce'></div>
                        </div>
                    )}
                    {buttonState === 'ok' && 'Email sent successfully!'}
                    {buttonState === 'ko' && 'Error! Try again'}
                </button>
            </form>

            <span className="absolute -z-10 top-0 left-0 right-0 mx-auto w-[50%] h-[50%] bg-white/30 rounded-full blur-[90px]" />
        </div>
    );
};

export default Contact;
