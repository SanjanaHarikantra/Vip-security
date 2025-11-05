import { Router } from "express";
import assignSoldiers from "../controllers/assignForce.controller.js";
import getLocation from "../controllers/getLocation.controller.js";
import showSoldiersOnMap from "../controllers/showSoldiersOnMap.controller.js";

const router = Router();

// Assigned soldiers for map
router.get('/soldiers', showSoldiersOnMap);

// All locations
router.get('/locations', getLocation);

// Assign soldiers to a location
router.post('/assign-soldiers', assignSoldiers);

export default router;
