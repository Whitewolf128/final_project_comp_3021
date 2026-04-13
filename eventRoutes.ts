import express, { Router } from "express";
import {createEventsController, getAllEventsController, updateEventController, deleteEventController} from "../controllers/eventController"
import { validateRequest } from "../middleware/validate";
import { postSchemas} from "../validation/eventValidation";
import cors from "cors";
import authenticate from "../middleware/authenticate";
import { setCustomClaims } from "../controllers/eventController";
import isAuthorized from "../middleware/authorize";
const eventRouter: Router = express.Router();

const authenticatedCorsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
    credentials: true,
    methods: ["POST"],
};

// Only admins can set custom claims
eventRouter.post(
    "/setCustomClaims", cors(authenticatedCorsOptions),
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);
// API doc 1: GET event endpoint with request parameters
/**
 * @openapi
 * /Events/:id:
 *   get:
 *     summary: Retrieve a event by ID (Admin only)
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved event details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event:
 *                   $ref: '#/components/schemas/event'
 *       '401':
 *         description: Unauthorized - Missing or invalid token
 *       '403':
 *         description: Forbidden - Admin access required
 *       '404':
 *         description: event not found
 */
eventRouter.get("/events", getAllEventsController);
// API doc 2: Post event endpoint with request parameters
/**
 * @openapi
 * /events/:id:
 *   post:
 *     summary: Retrieve a event by ID (Admin only)
 *     tags: [events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved event details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event:
 *                   $ref: '#/components/schemas/event'
 *       '401':
 *         description: Unauthorized - Missing or invalid token
 *       '403':
 *         description: Forbidden - Admin access required
 *       '404':
 *         description: event not found
 */

eventRouter.post("/events", validateRequest(postSchemas.create), createEventsController);
// API doc 1: GET event endpoint with request parameters
/**
 * @openapi
 * /events/:id:
 *   update:
 *     summary: Retrieve a event by ID (Admin only)
 *     tags: [events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved event details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event:
 *                   $ref: '#/components/schemas/event'
 *       '401':
 *         description: Unauthorized - Missing or invalid token
 *       '403':
 *         description: Forbidden - Admin access required
 *       '404':
 *         description: event not found
 */
eventRouter.put("/events/:id", updateEventController);
// API doc 1: GET event endpoint with request parameters
/**
 * @openapi
 * /events/:id:
 *   delete:
 *     summary: Retrieve a event by ID (Admin only)
 *     tags: [events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the event to retrieve
 *     responses:
 *       '200':
 *         description: Successfully retrieved event details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event:
 *                   $ref: '#/components/schemas/event'
 *       '401':
 *         description: Unauthorized - Missing or invalid token
 *       '403':
 *         description: Forbidden - Admin access required
 *       '404':
 *         description: event not found
 */
eventRouter.delete("/events/:id", deleteEventController);


export default eventRouter;