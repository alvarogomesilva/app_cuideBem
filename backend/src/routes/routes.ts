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
import UpdatePatientController from "../controllers/patients/UpdatePatientController";

import authenticate from "../middlewares/autenticate";
import upload from "../config/multer";
import CreateNewEventController from "../controllers/events/CreateNewEventController";
import ListEventsController from "../controllers/events/ListEventsController";
import CreateDailysController from "../controllers/dailys/CreateDailysController";

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
Route.put("/patients/:id", authenticate, upload.single("avatar"), UpdatePatientController)

// Rotas Novo Evento
// ==================
Route.post("/events", authenticate, CreateNewEventController)
Route.get("/events/:patient", authenticate, ListEventsController)

// Rotas Diário
// =================
Route.post("/dailys", authenticate, CreateDailysController)

export default Route;
