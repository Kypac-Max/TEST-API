const axios = require('axios');
const URL_BASE = process.env.URL_BASE;

module.exports = {
	getPosts: async (req, res) => {
		try {
			let config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: `${URL_BASE}/posts`,
				headers: {},
			};

			axios.request(config).then((response) => {
				res.json({
					status: 200,
					data: response.data,
				});
			});
		} catch (error) {
			res.status(500).json({ error: 'Error making the request.' });
		}
	},
	getPost: async (req, res) => {
		try {
			let config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: `${URL_BASE}/posts/${req.query.id}`,
				headers: {},
			};

			axios.request(config).then((response) => {
				res.json({
					status: 200,
					data: [response.data],
				});
			});
		} catch (error) {
			res.status(500).json({ error: 'Error making the request.' });
		}
	},
	addPost: async (req, res) => {
		try {
			let data = JSON.stringify(req.body);
			let config = {
				method: 'post',
				maxBodyLength: Infinity,
				url: `${URL_BASE}/posts`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: data,
			};
			axios.request(config).then((response) => {
				res.json({
					status: 200,
					data: [response.data],
				});
			});
		} catch (error) {
			res.status(500).json({ error: 'Error making the request.' });
		}
	},
	updatePost: async (req, res) => {
		try {
			let data = JSON.stringify(req.body);
			let config = {
				method: 'put',
				maxBodyLength: Infinity,
				url: `${URL_BASE}/posts/${req.body.id}`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: data,
			};
			axios.request(config).then((response) => {
				res.json({
					status: 200,
					data: [response.data],
				});
			});
		} catch (error) {
			res.status(500).json({ error: 'Error making the request.' });
		}
	},
	deletePost: async (req, res) => {
		try {
			let data = '';
			let config = {
				method: 'delete',
				maxBodyLength: Infinity,
				url: `${URL_BASE}/posts/${req.query.id}`,
				headers: {},
				data: data,
			};
			axios.request(config).then((response) => {
				res.json(response.data);
			});
		} catch (error) {
			res.status(500).json({ error: 'Error making the request.' });
		}
	},
};
