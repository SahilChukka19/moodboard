import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./ResultModal.css";

const stagger = (delay) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 },
});

export default function ResultModal({ persona, onReset }) {
    const hasLaunched = useRef(false);

    useEffect(() => {
        if (persona && !hasLaunched.current) {
            hasLaunched.current = true;
            const colors = ["#F9C6D0", "#D4A3A3", "#E8DCC8", "#B5D8E8", "#D4C5E2"];
            confetti({
                particleCount: 70,
                spread: 65,
                origin: { y: 0.45 },
                colors,
                ticks: 180,
                gravity: 0.85,
                shapes: ["circle"],
            });
            setTimeout(() => {
                confetti({ particleCount: 40, angle: 62, spread: 52, origin: { x: 0, y: 0.6 }, colors });
                confetti({ particleCount: 40, angle: 118, spread: 52, origin: { x: 1, y: 0.6 }, colors });
            }, 380);
        }
        // Reset when persona clears so confetti fires again next time
        if (!persona) hasLaunched.current = false;
    }, [persona]);

    return (
        <AnimatePresence>
            {persona && (
                <motion.div
                    className="result-modal__backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onReset}
                >
                    <motion.div
                        className="result-modal__card"
                        style={{ background: persona.gradient }}
                        initial={{ opacity: 0, scale: 0.78, y: 44 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 18 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.08 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Badge */}
                        <div className="result-modal__badge">your design persona</div>

                        {/* Emoji */}
                        <motion.span
                            className="result-modal__emoji"
                            initial={{ scale: 0, rotate: -15 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 280, delay: 0.22 }}
                        >
                            {persona.emoji}
                        </motion.span>

                        {/* Title */}
                        <motion.h1 className="result-modal__title" {...stagger(0.3)}>
                            {persona.title}
                        </motion.h1>

                        {/* Hook — poetic opener */}
                        <motion.p className="result-modal__hook" {...stagger(0.4)}>
                            {persona.copy.hook}
                        </motion.p>

                        {/* Punchy body lines */}
                        <motion.div className="result-modal__body" {...stagger(0.48)}>
                            {persona.copy.body.map((line, i) => (
                                <span key={i} className="result-modal__body-line">
                                    {line}
                                </span>
                            ))}
                        </motion.div>

                        {/* Connector context */}
                        <motion.p className="result-modal__context" {...stagger(0.56)}>
                            {persona.copy.context}
                        </motion.p>

                        {/* Trait pills */}
                        <motion.div className="result-modal__traits" {...stagger(0.64)}>
                            {persona.copy.traits.map((trait) => (
                                <span key={trait} className="result-modal__trait-pill">
                                    ✦ {trait}
                                </span>
                            ))}
                        </motion.div>

                        {/* Reset */}
                        <motion.button
                            className="result-modal__reset-btn"
                            onClick={onReset}
                            {...stagger(0.76)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            ↩ Try Again
                        </motion.button>

                        <p className="result-modal__dismiss">click outside to dismiss</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
