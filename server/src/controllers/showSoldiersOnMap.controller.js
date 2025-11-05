import Soldier from "../models/soldiers.model.js";

const showSoldiersOnMap = async (req, res) => {
  try {
    const soldiers = await Soldier.find({ status: "assigned" })
      .populate("location", "name location");

    const shaped = soldiers.map((s) => ({
      _id: s._id,
      name: s.name,
      rank: s.rank,
      status: s.status,
      location: {
        name: s.location?.name ?? null,
        latitude: s.location?.location?.latitude ?? null,
        longitude: s.location?.location?.longitude ?? null,
      },
    }));

    return res.status(200).json(shaped);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error while showing the soldier on map ${error.message}`,
      });
  }
};

export default showSoldiersOnMap;
