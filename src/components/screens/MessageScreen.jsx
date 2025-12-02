"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed whitespace-pre-line text-center overflow-y-scroll no-scrollbar max-h-[400px]">


                    Happy Birthday, my love ❤️✨ <br />
                    There are so many things I want to tell you,<br />
                    but the simplest truth is this —<br />
                    my life feels complete because you’re in it 💞.<br />

                    You’re not just the girl I love…<br />
                    you’re the girl I want to walk beside through everything —<br />
                    my happiest days, my hardest moments, <br /> and all the little memories in between 💑.<br />

                    I love the way you smile 😊, the way you talk ✨,<br />
                    the way you care 💗, and the way you make me feel important without even trying.<br />
                    You have this soft magic that turns ordinary moments<br />
                    into memories worth keeping forever 🌸📸.<br />

                    Today is your day 🎂🎉, but honestly…<br />
                    every day feels special when it has you in it 💖.<br />

                    I want to love you like a man who knows he has found <br /> his soulmate 💍❤️.<br />
                    I want to protect you 🤝, support you 🫶, laugh with you 😂, dream with you 🌟,<br />
                    and hold you close when the world feels heavy 🤗💞.<br />

                    One day, I want to be more than just someone you love —<br />
                    I want to be the man who stands beside you as your husband 👩‍❤️‍👨,<br />
                    your partner, your forever companion.<br />
                    I want to wake up every morning knowing that<br />
                    you are the reason my heart feels full 🌅💗.    <br />
                    You deserve the softest love 💐, the warmest hugs 🤍,<br />
                    and a lifetime of happiness 🌈 —<br />
                    and I promise to give you everything I can,<br />
                    with all my heart, for all my life ❤️‍🔥.<br />
                    
                    And before anything else…  <br />
                    <b>I love you</b>, <br /> more than words can ever explain ❤️.<br />

                    Happy Birthday, my future…<br />
                    my world…<br />
                    my Bangaram... 💕✨.<br />
                    <br />
                                       
                               💘💗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;💕💖<br />
                            💞 💕 💓   &nbsp; 💓 💕 💞<br />
                            💖 💗 💘 ❤️‍🔥 💘 💗 💖<br />
                            💞 💕 💓 💗 💓 💕 💞<br />
                                💗 💖 💘 💝 💖<br />
                                    💕 💓 💗<br />
                                        ❤️‍🔥<br />
                    <br />
                    And Finally🌅,<br />
                    <b> I Love You Lakshmi🫂</b><br />
                    <span className="signature">❤️ Yours lovely ❤️</span> <br />
                     Mahesh 👻✨



                </p>

                </motion.div>
            </div>
        </div>
    )
}