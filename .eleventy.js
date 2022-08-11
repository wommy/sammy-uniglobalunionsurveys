/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function(eleventyConfig) {
	return {
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		}
	}
}
