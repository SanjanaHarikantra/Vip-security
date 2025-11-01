// import { Router } from "express";
// import assignSoldiers from "../controllers/assignForce.controller.js";
// import getLocation from "../controllers/getLocation.controller.js";
// import showSoldiersOnMap from "../controllers/showSoldiersOnMap.controller.js";

// const router = Router();

// router.route('/').get(showSoldiersOnMap);
// router.route('/locations').get(getLocation);
// router.route('/assign-soldiers').post(assignSoldiers);

// export default router;

import { Router } from "express";
import assignSoldiers from "../controllers/assignForce.controller.js";
import getLocation from "../controllers/getLocation.controller.js";
import showSoldiersOnMap from "../controllers/showSoldiersOnMap.controller.js";
import Soldier from "../models/soldiers.model.js";

const router = Router();

// 🟢 Existing routes
router.route("/soldiers").get(showSoldiersOnMap);
router.route("/locations").get(getLocation);
router.route("/assign-soldiers").post(assignSoldiers);

// 🟢 New route: Fetch all soldiers with populated location
router.get("/soldiers", async (req, res) => {
  try {
    const soldiers = await Soldier.find().populate("location");
    res.status(200).json(soldiers);
  } catch (error) {
    console.error("Error fetching soldiers:", error);
    res.status(500).json({ error: "Failed to fetch soldiers" });
  }
});

export default router;
