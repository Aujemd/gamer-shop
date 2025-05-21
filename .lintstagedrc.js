const path = require("node:path");

/**
 * @description Lint staged files with ESLint
 * @param filenames - Array of filenames to lint
 * @returns - Command to run ESLint on the staged files
 */
function buildEslintCommand(filenames) {
    return `next lint --fix --file ${filenames
        .map(f => path.relative(process.cwd(), f))
        .join(" --file ")}`;
}

module.exports = {
    "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
