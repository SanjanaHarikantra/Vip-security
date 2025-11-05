import express from "express";
import cors from "cors";
import soldierRouter from './routes/soldiers.router.js';

const app = express();

app.use(cors());
app.use(express.json());

// Health endpoint
app.get('/healthz', (req, res) => res.status(200).send('ok'));

// API routes
app.use('/api', soldierRouter);

export { app };

//   const soldiers = [
//   {
//     name: "John Doe",
//     rank: "Private",
//     location: {
//       latitude: 12.9716,
//       longitude: 77.5946
//     },
//     status: "active"
//   },
//   {
//     name: "Alice Smith",
//     rank: "Sergeant",
//     location: {
//       latitude: 12.9720,
//       longitude: 77.5950
//     },
//     status: "active"
//   },
//   {
//     name: "Bob Johnson",
//     rank: "Lieutenant",
//     location: {
//       latitude: 12.9730,
//       longitude: 77.5960
//     },
//     status: "active"
//   },
//   {
//     name: "Charlie Lee",
//     rank: "Captain",
//     location: {
//       latitude: 12.9740,
//       longitude: 77.5970
//     },
//     status: "active"
//   },
//   {
//     name: "David Brown",
//     rank: "Private",
//     location: {
//       latitude: 12.9750,
//       longitude: 77.5980
//     },
//     status: "inactive"
//   },
//   {
//     name: "Emily Davis",
//     rank: "Sergeant",
//     location: {
//       latitude: 12.9760,
//       longitude: 77.5990
//     },
//     status: "inactive"
//   },
//   {
//     name: "Frank Wilson",
//     rank: "Lieutenant",
//     location: {
//       latitude: 12.9770,
//       longitude: 77.6000
//     },
//     status: "active"
//   },
//   {
//     name: "Grace Taylor",
//     rank: "Captain",
//     location: {
//       latitude: 12.9780,
//       longitude: 77.6010
//     },
//     status: "active"
//   },
//   {
//     name: "Hannah Clark",
//     rank: "Private",
//     location: {
//       latitude: 12.9790,
//       longitude: 77.6020
//     },
//     status: "inactive"
//   },
//   {
//     name: "Isaac Walker",
//     rank: "Sergeant",
//     location: {
//       latitude: 12.9800,
//       longitude: 77.6030
//     },
//     status: "active"
//   }
// ];
//   const result = await Soldier.create(soldiers);
//   if (result) res.status(201).json({ message: "Success" });
