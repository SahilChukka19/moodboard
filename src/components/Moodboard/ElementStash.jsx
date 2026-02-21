import { AnimatePresence } from "framer-motion";
import ItemCard from "./ItemCard";
import "./ElementStash.css";

export default function ElementStash({ elements, onAdd, canvasCount }) {
    const isFull = canvasCount >= 5;

    return (
        <div className="element-stash">
            <div className="element-stash__header">
                <h2 className="element-stash__title">Your Stash</h2>
                <p className="element-stash__subtitle">
                    {isFull
                        ? "✨ Moodboard full!"
                        : `Pick ${5 - canvasCount} more to reveal your vibe`}
                </p>
            </div>

            <div className="element-stash__grid">
                <AnimatePresence>
                    {elements.map((el) => (
                        <ItemCard
                            key={el.id}
                            element={el}
                            onClick={() => !isFull && onAdd(el)}
                            isOnCanvas={false}
                        />
                    ))}
                </AnimatePresence>

                {elements.length === 0 && (
                    <p className="element-stash__empty">
                        All items added to canvas 🎨
                    </p>
                )}
            </div>
        </div>
    );
}
