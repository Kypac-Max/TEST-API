const post = require('../controllers/post.controllers');
const express = require('express');
const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Posts:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           description: Post ID owner of the post
 *           example: 1
 *         id:
 *           type: integer
 *           description: Post ID
 *           example: 1
 *         title:
 *           type: string
 *           description: Post title
 *           example: Post Title
 *         body:
 *           type: string
 *           description: Post Body
 *           example: Post description
 */

/**
 * @openapi
 * /getAll:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get all posts.
 *     description: Get 100 posts from DB.
 *     responses:
 *       200:
 *         description: Posts information obtained successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Posts"
 *       500:
 *         description: Request Failed.
 */
router.get('/getAll', post.getPosts);

/**
 * @openapi
 * /getOne:
 *   get:
 *     tags:
 *       - Post
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         type: number
 *         example: 1
 *     summary: Get one post.
 *     description: Get one post from DB with all related information.
 *     responses:
 *       200:
 *         description: Post information obtained successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Posts"
 *       404:
 *         description: Post not found.
 *       500:
 *         description: Request failed.
 */
router.get('/getOne', post.getPost);

/**
 * @openapi
 * /addPost:
 *   post:
 *     tags:
 *       - Post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                title:
 *                  type: string
 *                  example: foo
 *                body:
 *                  type: string
 *                  example: bar
 *                userId:
 *                  type: number
 *                  example: 1
 *     summary: Add a new post.
 *     description: Add new post to the DB.
 *     responses:
 *       200:
 *         description: Post added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Posts"
 *       401:
 *         description: Access denied.
 *       500:
 *         description: Request Failed.
 */
router.post('/addPost', post.addPost);

/**
 * @openapi
 * /updatePos/:
 *   update:
 *     tags:
 *       - Post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                id:
 *                  type: number
 *                  example: 2
 *                title:
 *                  type: string
 *                  example: foo
 *                body:
 *                  type: string
 *                  example: bar
 *                userId:
 *                  type: number
 *                  example: 1
 *     summary: Update existing post.
 *     description: Update existing post from the DB with the given id.
 *     responses:
 *       200:
 *         description: Post edited successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Posts"
 *       500:
 *         description: Request Failed.
 */
router.put('/updatePost', post.updatePost);

/**
 * @openapi
 * /deletePost:
 *   delete:
 *     tags:
 *       - Post
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         type: number
 *         example: 1
 *     summary: Delete existing post.
 *     description: Delete existing post from the DB.
 *     responses:
 *       200:
 *         description: Post successfully deleted.
 *       404:
 *         description: Post not found.
 *       500:
 *         description: Request failed.
 */
router.delete('/deletePost', post.deletePost);

module.exports = router;
