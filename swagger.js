const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUIExpress = require('swagger-ui-express');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'TEST API',
			version: '1.0.0',
			description:
				'List and documentation of all endpoints available in the api',
		},
	},
	apis: ['./routes/post.routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDoc = (app, port) => {
	app.use(
		'/docs',
		swaggerUIExpress.serve,
		swaggerUIExpress.setup(swaggerSpec)
	);
	app.get('/docs.json', (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(swaggerSpec);
	});
	console.log(
		`Documentation of the api running in http://localhost:${port}/docs`
	);
};
module.exports = { swaggerDoc };
