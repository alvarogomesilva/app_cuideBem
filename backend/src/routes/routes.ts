import { Router } from "express";

// Médicos
// ========
import CreateRecipesController from "../controllers/doctors/CreateRecipesController";
import CreateReportController from "../controllers/doctors/CreateReportController";

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
Route.post("/user", CreateUserController);
Route.post("/login", AuthUserController);
Route.get("/me", authenticate, DetailUserController);

// Rotas do Médico
// ==================
Route.post("/recipes", authenticate, CreateRecipesController);
Route.post("/reports", authenticate, CreateReportController)


// Rotas do paciente
// ==================
Route.post("/patient", authenticate, upload.single("avatar"), CreatePatientController)
Route.get("/patients", authenticate, ListPatientController)

export default Route;
