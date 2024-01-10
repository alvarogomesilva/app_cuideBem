import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";
import AuthUserController from "../controllers/users/AuthUserController";
import authenticate from "../middlewares/autenticate";
import DetailUserController from "../controllers/users/DetailUserController";
import CreateReceiveController from "../controllers/doctors/CreateReceiveController";
import CreatePatientController from "../controllers/patients/CreatePatientController";

import upload from "../config/multer";

const Route = Router();

// Rotas de Usuario
// ===================
Route.post("/user", CreateUserController);
Route.post("/login", AuthUserController);
Route.get("/me", authenticate, DetailUserController);

// Rotas do Médico
// ================
Route.post("/doctors", CreateReceiveController);

// Rotas do paciente
// ==================
Route.post("/patient", authenticate, upload.single("avatar"), CreatePatientController)

export default Route;
