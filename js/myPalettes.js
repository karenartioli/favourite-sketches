//This is a second javascript file containing functions to support the main one, "mySketch.js"
//It must also be loaded in index.html

/** @returns a palette chosen at random,
 * as an array of strings each of which represents a colour (e.g. "#f04155")
 */
function randomPalette() {
    const allPalettes = [
        ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"],
        ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
        ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"],
    ];
    return random(allPalettes);
}
