/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map((a) => a.reverse().map((b) => b === 0 ? 1 : 0));
};