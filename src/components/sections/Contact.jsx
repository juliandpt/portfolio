import { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [buttonState, setButtonState] = useState('idle')

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación del email al enviar
    const isValid = validateEmail(email)
    setIsEmailInvalid(!isValid)

    if (!isValid) return

    setButtonState('sending')

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })

      if (res.ok) {
        setButtonState('ok')
      } else {
        setButtonState('ko')
      }
    } catch (error) {
      console.error('Error al enviar el mensaje', error)
      setButtonState('error')
    }

    setTimeout(() => {
      resetForm()
    }, 3000)
  }

  const resetForm = () => {
    setEmail('')
    setMessage('')
    setButtonState('idle')
    setIsEmailInvalid(false)
  }

  return (
    <section id="contact" className="animate-in animate-delay-300 pb-20 pt-16">
      <div className="relative mx-auto w-full">
        <h2 className="text-xl font-medium">Contacto</h2>
        <form onSubmit={handleSubmit} className="group mt-4 space-y-4">
          <div>
            <input
              name="email"
              id="email"
              autoComplete="off"
              className={`block w-full transform rounded border p-2.5 text-sm placeholder-neutral-600 duration-200 focus:border-neutral-500 focus:placeholder-neutral-500 focus:outline-none ${
                isEmailInvalid
                  ? 'border-red-500 text-red-500 focus:border-red-500'
                  : 'border-neutral-700 text-white'
              }`}
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsEmailInvalid(false)
              }}
            />

            {isEmailInvalid && (
              <span className="mt-1 block text-sm text-red-500">
                Introduce una dirección de email válida
              </span>
            )}
          </div>

          <textarea
            id="message"
            name="message"
            rows="2"
            autoComplete="off"
            className="field-sizing-content block min-h-[80px] w-full transform resize-none rounded border border-neutral-700 p-2.5 text-sm placeholder-neutral-600 duration-200 focus:border-neutral-500 focus:placeholder-neutral-500 focus:outline-none"
            placeholder="Mensaje"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className={`h-10 w-full rounded px-5 py-3 text-center text-sm font-medium transition duration-200 ${buttonState === 'ok' ? 'bg-green-500 text-white' : ''} ${buttonState === 'ko' ? 'bg-red-100 text-white' : ''} ${
              buttonState === 'sending' ||
              buttonState === 'ok' ||
              buttonState === 'ko' ||
              !email ||
              !message
                ? 'cursor-not-allowed text-neutral-700'
                : 'text-white hover:bg-white/10'
            }`}
            disabled={
              buttonState === 'sending' ||
              buttonState === 'ok' ||
              buttonState === 'ko' ||
              !email ||
              !message
            }
          >
            {buttonState === 'idle' && 'Enviar mensaje'}
            {buttonState === 'sending' && (
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-white" />
              </div>
            )}
            {buttonState === 'ok' && 'Email enviado con éxito!'}
            {buttonState === 'ko' && 'Inténtelo más tarde'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
