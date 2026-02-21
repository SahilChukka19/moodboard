import { useState, useEffect, useCallback } from "react";
import { LayoutGroup } from "framer-motion";
import { ELEMENTS } from "../../data/moodboardData";
import { calculateVibe } from "../../utils/calculateVibe";
import ElementStash from "./ElementStash";
import Canvas from "./Canvas";
import ResultModal from "./ResultModal";
import "./MoodboardGame.css";

const MAX_ITEMS = 5;

export default function MoodboardGame() {
    const [stashItems, setStashItems] = useState(ELEMENTS);
    const [canvasItems, setCanvasItems] = useState([]);
    const [persona, setPersona] = useState(null);

    useEffect(() => {
        if (canvasItems.length === MAX_ITEMS) {
            const timer = setTimeout(() => {
                setPersona(calculateVibe(canvasItems));
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [canvasItems]);

    const handleAdd = useCallback(
        (element) => {
            if (canvasItems.length >= MAX_ITEMS) return;
            setStashItems((prev) => prev.filter((el) => el.id !== element.id));
            setCanvasItems((prev) => [...prev, element]);
        },
        [canvasItems.length]
    );

    const handleRemove = useCallback((element) => {
        setCanvasItems((prev) => prev.filter((el) => el.id !== element.id));
        setStashItems((prev) => [...prev, element]);
    }, []);

    const handleReset = useCallback(() => {
        setPersona(null);
        setCanvasItems([]);
        setStashItems(ELEMENTS);
    }, []);

    return (
        <div className="moodboard-game">
            <div className="moodboard-game__grain" aria-hidden />

            <header className="moodboard-game__hero">
                <p className="moodboard-game__eyebrow">interactive portfolio element</p>
                <h1 className="moodboard-game__heading">Build Your Moodboard</h1>
                <p className="moodboard-game__subheading">
                    Choose 5 things that speak to you. We'll tell you something true.
                </p>
            </header>

            <LayoutGroup>
                <div className="moodboard-game__layout">
                    <div className="moodboard-game__pane moodboard-game__pane--stash">
                        <ElementStash
                            elements={stashItems}
                            onAdd={handleAdd}
                            canvasCount={canvasItems.length}
                        />
                    </div>

                    <div className="moodboard-game__divider" aria-hidden />

                    <div className="moodboard-game__pane moodboard-game__pane--canvas">
                        <Canvas items={canvasItems} onRemove={handleRemove} />
                    </div>
                </div>
            </LayoutGroup>

            <ResultModal persona={persona} onReset={handleReset} />
        </div>
    );
}
