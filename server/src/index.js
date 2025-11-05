import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const dataFile = path.resolve(__dirname, '../../soldiers.json');

function loadSoldiers() {
  const raw = fs.readFileSync(dataFile, 'utf-8');
  const data = JSON.parse(raw);
  return Array.isArray(data) ? data : (data?.soldiers ?? []);
}

function saveSoldiers(soldiers) {
  fs.writeFileSync(dataFile, JSON.stringify(soldiers, null, 2) + '\n', 'utf-8');
}

// List all soldiers
app.get('/api/soldiers', (req, res) => {
  try {
    const soldiers = loadSoldiers();
    res.json({ soldiers });
  } catch (err) {
    console.error('Failed to read soldiers.json:', err.message);
    res.status(500).json({ error: 'Failed to load soldiers' });
  }
});

// Get only soldiers that have a location
app.get('/api/locations', (req, res) => {
  try {
    const withLoc = loadSoldiers().filter(
      (s) => s.location && typeof s.location.lat === 'number' && typeof s.location.lng === 'number'
    );
    res.json({ soldiers: withLoc });
  } catch (err) {
    console.error('Failed to load locations:', err.message);
    res.status(500).json({ error: 'Failed to load locations' });
  }
});

// Assign/update a soldier's location
app.post('/api/soldiers/assign', (req, res) => {
  try {
    const { name, location } = req.body || {};
    if (!name || !location || typeof location.lat !== 'number' || typeof location.lng !== 'number') {
      return res.status(400).json({ error: 'Provide name and location {lat, lng}' });
    }
    const soldiers = loadSoldiers();
    const idx = soldiers.findIndex((s) => s.name === name);
    if (idx === -1) return res.status(404).json({ error: 'Soldier not found' });

    soldiers[idx].location = { lat: location.lat, lng: location.lng };
    saveSoldiers(soldiers);
    return res.json({ soldier: soldiers[idx] });
  } catch (err) {
    console.error('Failed to assign location:', err.message);
    res.status(500).json({ error: 'Failed to assign location' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
