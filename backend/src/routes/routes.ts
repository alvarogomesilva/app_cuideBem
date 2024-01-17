import { Router } from "express";

// Médicos
// ========
import PrescriptionPatientController from "../controllers/doctors/PrescriptionPatientController";

// Usuários
// =========
import CreateUserController from "../controllers/users/CreateUserController";
import AuthUserController from "../controllers/users/AuthUserController";
import DetailUserController from "../controllers/users/DetailUserController";

// Pacientes
// ==========
import ListPatientController from "../controllers/patients/ListPatientController";
import CreatePatientController from "../controllers/patients/CreatePatientController";

import authenticate from "../middlewares/autenticate";
import upload from "../config/multer";

// ==============================================================================================

const Route = Router();

// Rotas de Usuario
// ==================
Route.post("/users", CreateUserController);
Route.post("/login", AuthUserController);
Route.get("/me", authenticate, DetailUserController);

// Rotas do Médico
// ==================
Route.put("/prescriptions", authenticate, PrescriptionPatientController)


// Rotas do paciente
// ==================
Route.post("/patients", authenticate, upload.single("avatar"), CreatePatientController)
Route.get("/patients", authenticate, ListPatientController)

export default Route;
