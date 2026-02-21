import { RESULTS } from "../data/moodboardData";

/**
 * Priority-ordered persona detection.
 *
 * Each element now has a `tags` array. We count how many times each
 * tag dimension appears across all 5 selected items, then walk through
 * the priority rules in order, returning the first match.
 *
 * Priority order:
 *  1. explorer ≥ 2   → Indie Explorer
 *  2. cozy ≥ 3       → Cozy Product Thinker
 *  3. creative ≥ 2 AND structured ≥ 1 → Flow State Designer
 *  4. creative ≥ 2 AND playful ≥ 1    → Moodboard Maximalist
 *  5. nostalgic ≥ 2  → Nostalgic Modernist
 *  6. playful ≥ 2 AND structured ≥ 1  → Playful Structured Thinker
 *  7. cozy ≥ 2 AND structured ≥ 1     → Soft Systems Designer
 *  8. (fallback)     → Story-Driven Builder
 *
 * @param {Array} selectedElements - Array of element objects (with .tags array)
 * @returns {Object} - The winning result persona
 */
export function calculateVibe(selectedElements) {
    // Count each tag dimension across selected elements
    const counts = {};
    selectedElements.forEach((el) => {
        const elementTags = el.tags || (el.tag ? [el.tag] : []);
        elementTags.forEach((tag) => {
            counts[tag] = (counts[tag] || 0) + 1;
        });
    });

    const c = (tag) => counts[tag] || 0;
    const find = (id) => RESULTS.find((r) => r.id === id);

    // Walk priority rules in order
    if (c("explorer") >= 2) return find("indie_explorer");
    if (c("cozy") >= 3) return find("cozy_product");
    if (c("creative") >= 2 && c("structured") >= 1) return find("flow_state");
    if (c("creative") >= 2 && c("playful") >= 1) return find("moodboard_maximalist");
    if (c("nostalgic") >= 2) return find("nostalgic_modernist");
    if (c("playful") >= 2 && c("structured") >= 1) return find("playful_structured");
    if (c("cozy") >= 2 && c("structured") >= 1) return find("soft_systems");

    // Fallback — always resolves
    return find("story_driven");
}
