import { AnimatePresence, motion } from "framer-motion";
import ItemCard from "./ItemCard";
import "./Canvas.css";

export default function Canvas({ items, onRemove }) {
    const slots = Array.from({ length: 5 });

    return (
        <div className="canvas">
            <div className="canvas__header">
                <h2 className="canvas__title">Your Moodboard</h2>
                <p className="canvas__subtitle">
                    {items.length === 0
                        ? "Click items from your stash to add them here"
                        : items.length < 5
                            ? `${items.length} / 5 — keep going!`
                            : "🎉 Revealing your design persona..."}
                </p>
            </div>

            <div className="canvas__slots">
                {slots.map((_, i) => {
                    const item = items[i];
                    return (
                        <div className="canvas__slot" key={i}>
                            {item ? (
                                <AnimatePresence>
                                    <ItemCard
                                        key={item.id}
                                        element={item}
                                        onClick={() => onRemove(item)}
                                        isOnCanvas={true}
                                    />
                                </AnimatePresence>
                            ) : (
                                <motion.div
                                    className="canvas__empty-slot"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.06 }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {items.length > 0 && (
                <p className="canvas__remove-hint">Tap a card to remove it</p>
            )}
        </div>
    );
}
