"use client"

import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { motion, useAnimation, useInView } from 'framer-motion'

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                // sending this info to server:
                name,
                email,
                message
            })
        })

        const { msg, success } = await res.json()
        setError(msg)
        setSuccess(success)

        if (success) {
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    const ref = useRef(null)

    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, inView])

    const variants = {
        hidden: {
            x: '10%',
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }

    return (
        <form
            className='flex flex-col mt-[50px]'
            onSubmit={handleSubmit}
        >
            <label
                className='flex flex-col'
                htmlFor='name'
            >
                <div className='flex space-x-5 mb-[10px]'>
                    <AiOutlineSend color='orange' className="text-xl md:text-2xl" />
                    <p className='text-white'>Send me a message:</p>
                </div>
                <input
                    type='text'
                    name='name'
                    placeholder="Your name"
                    className='flex flex-col py-2 px-6 rounded-sm outline-none border-none font-medium mb-[30px]'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </label>

            <label
                className='flex flex-col'
                htmlFor='email'
            >
                <input
                    type='email'
                    name='email'
                    placeholder="Your email address"
                    className='flex flex-col py-2 px-6 rounded-sm outline-none border-none font-medium mb-[30px]'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label
                className='flex flex-col'
                htmlFor='message'
            >
                <textarea
                    rows={4}
                    name='message'
                    placeholder='Your message'
                    className='flex flex-col py-2 px-6 rounded-sm outline-none border-none font-medium resize-none'
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </label>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ type: 'tween', delay: 2, duration: 1 }}
                className='flex items-end justify-end'
            >
                <button
                    type='submit'
                    className='flex flex-col mt-[10px] w-[40px] items-end font-bold text-orange-500 hover:text-orange-400 transition ease-in-out delay-100'
                >
                    Send
                </button>
            </motion.div>

            <div className='flex flex-col'>
                {
                    error && error.map((e) =>
                        <div
                            className={
                                `${success ? 'text-green-800' : 'text-red-600'} flex justify-end h-[20px] w[50px]`
                            }
                        >
                            {e}
                        </div>
                    )
                }
            </div>
        </form>
    )
}

export default ContactForm