module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	rules:{
		"indent": ["error", "tab"],
		"no-console": 1,
		"default-case": 2,
		"react-hooks/exhaustive-deps":0
 
	},
	extends: `react-app`,
}