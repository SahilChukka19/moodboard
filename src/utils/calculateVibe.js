import { RESULTS } from "../data/moodboardData";

/**
 * Takes an array of 5 selected element objects and returns the best-matching persona.
 * Scores each result by counting how many of the user's selected tags match each result's triggerTags.
 * Returns the persona with the highest score (ties broken by order).
 *
 * @param {Array} selectedElements - Array of element objects (with .tag property)
 * @returns {Object} - The winning result persona
 */
export function calculateVibe(selectedElements) {
    const selectedTags = selectedElements.map((el) => el.tag);

    const scores = RESULTS.map((result) => {
        const score = result.triggerTags.filter((tag) =>
            selectedTags.includes(tag)
        ).length;
        return { result, score };
    });

    // Sort by score descending, pick the top one
    scores.sort((a, b) => b.score - a.score);

    return scores[0].result;
}
