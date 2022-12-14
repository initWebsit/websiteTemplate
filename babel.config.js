module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				"targets": {
					"browsers": [
						"> 1%",
						"last 2 versions"
					]
				},
				"useBuiltIns": "usage",
				"corejs": 3
			}
		],
		"@babel/preset-react"
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-syntax-dynamic-import",
		[
			"@babel/plugin-proposal-decorators",
			{
				"legacy": true
			}
		],
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-optional-chaining",
		"@babel/plugin-proposal-nullish-coalescing-operator"
	]
}