import { motion } from "framer-motion";
import "./ItemCard.css";

// Variants defined outside component to avoid re-creation on render
const cardVariants = {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.7 },
};

export default function ItemCard({ element, onClick, isOnCanvas }) {
    return (
        <motion.div
            layoutId={element.id}
            className={`item-card ${isOnCanvas ? "item-card--canvas" : ""}`}
            onClick={onClick}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            layout
        >
            <div className="item-card__img-wrap">
                <img
                    src={element.image}
                    alt={element.alt}
                    className="item-card__img"
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <span className="item-card__label">{element.label}</span>
        </motion.div>
    );
}
