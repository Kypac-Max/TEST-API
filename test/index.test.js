const { app } = require('../index');
const request = require('supertest');

describe('GET /getAll', () => {
	test('Should respond with a 200 status code.', async () => {
		const response = await request(app).get('/getAll').send();
		expect(response.statusCode).toBe(200);
	});

	test('Should respond an object.', async () => {
		const response = await request(app).get('/getAll').send();
		expect(response.body).toBeInstanceOf(Object);
	});

	test('Get posts from DB with all related information.', async () => {
		await request(app)
			.get('/getAll')
			.send()
			.then((response) => {
				expect(response._body.data.length > 1)
			});
	});
});

describe('GET /getOne', () => {
	test('Should respond with a 200 status code.', async () => {
		const response = await request(app)
			.get('/getOne')
			.query({ id: 1 })
			.send();
		expect(response.statusCode).toBe(200);
	});

	test('Should respond an object.', async () => {
		const response = await request(app)
			.get('/getOne')
			.query({ id: 1 })
			.send();
		expect(response.body).toBeInstanceOf(Object);
	});

	test('Get one post from DB with all related information.', async () => {
		await request(app)
			.get('/getOne')
			.query({ id: 1 })
			.send()
			.then((response) => {
				expect(response._body).toEqual({
					status: 200,
					data: [
						{
							userId: 1,
							id: 1,
							title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
							body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
						},
					],
				});
			});
	});
});

describe('POST /addPost', () => {
	test('Should respond with a 200 status code.', async () => {
		const response = await request(app).post('/addPost').send({
			title: 'fooo',
			body: 'baar',
			userId: 3,
		});
		expect(response.statusCode).toBe(200);
	});

	test('Should respond an object.', async () => {
		const response = await request(app).post('/addPost').send({
			title: 'fooo',
			body: 'baar',
			userId: 3,
		});
		expect(response.body).toBeInstanceOf(Object);
	});

	test('Add new post to the DB.', async () => {
		await request(app)
			.post('/addPost')
			.send({
				title: 'fooo',
				body: 'baar',
				userId: 3,
			})
			.then((response) => {
				expect(response._body).toEqual({
					status: 200,
					data: [
						{
							title: 'fooo',
							body: 'baar',
							userId: 3,
							id: 101,
						},
					],
				});
			});
	});
});

describe('PUT /updatePost', () => {
	test('Should respond with a 200 status code.', async () => {
		const response = await request(app).put('/updatePost').send({
			id: 2,
			title: 'foao',
			body: 'basr',
			userId: 3,
		});
		expect(response.statusCode).toBe(200);
	});

	test('Should respond an object.', async () => {
		const response = await request(app).put('/updatePost').send({
			id: 2,
			title: 'foao',
			body: 'basr',
			userId: 3,
		});
		expect(response.body).toBeInstanceOf(Object);
	});

	test('Update existing post from the DB with the given id.', async () => {
		await request(app)
			.put('/updatePost')
			.send({
				id: 2,
				title: 'foao',
				body: 'basr',
				userId: 3,
			})
			.then((response) => {
				expect(response._body).toEqual({
					status: 200,
					data: [
						{
							id: 2,
							title: 'foao',
							body: 'basr',
							userId: 3,
						},
					],
				});
			});
	});
});

describe('DELETE /deletePost', () => {
	test('Should respond with a 200 status code.', async () => {
		const response = await request(app).delete('/deletePost').send();
		expect(response.statusCode).toBe(200);
	});

	test('Should respond an object.', async () => {
		const response = await request(app).delete('/deletePost').send();
		expect(response.body).toBeInstanceOf(Object);
	});

	test('Delete existing post from the DB.', async () => {
		await request(app)
			.delete('/deletePost')
			.send()
			.then((response) => {
				expect(response._body).toEqual({});
			});
	});
});
