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
import DeleteEventController from "../controllers/events/DeleteEventController";
import ListPrescriptionPatientController from "../controllers/doctors/ListPrescriptionPatientController";
import ListDailyController from "../controllers/dailys/ListDailyController";
import ListUserController from "../controllers/users/ListUserController";
import DoneDailyController from "../controllers/dailys/DoneDailyController";
import UpdatePrescriptionPatientController from "../controllers/doctors/UpdatePrescriptionPatientController";
import RecordPatientController from "../controllers/doctors/RecordPatientController";
import ListRecordPatientController from "../controllers/doctors/ListRecordPatientController";
import UpdateRecordPatientController from "../controllers/doctors/UpdateRecordPatientController";
import ListMyPrescriptionPatientController from "../controllers/patients/ListPrescriptionPatientController";
import ListMyRecordPatientController from "../controllers/patients/ListMyRecordPatientController";

// ==============================================================================================

const Route = Router();

// Rotas de Usuario
// ==================
Route.post("/users", CreateUserController);
Route.post("/login", AuthUserController);
Route.get("/me", authenticate, DetailUserController);
Route.get('/users/:id', authenticate, ListUserController)

// Rotas do Médico
// ==================
Route.post("/prescriptions", authenticate, PrescriptionPatientController)
Route.get('/prescriptions/:id', authenticate, ListPrescriptionPatientController)
Route.put('/prescriptions/:id', authenticate, UpdatePrescriptionPatientController)
Route.get('/patients/:id/:doctor', authenticate, ListMyPrescriptionPatientController)


Route.post('/records', authenticate, RecordPatientController)
Route.get('/records/:id', authenticate, ListRecordPatientController)
Route.put('/records/:id', authenticate, UpdateRecordPatientController)
Route.get('/records/:id/:doctor', authenticate, ListMyRecordPatientController)

// Rotas do paciente
// ==================
Route.post("/patients", authenticate, upload.single("avatar"), CreatePatientController)
Route.get("/patients", authenticate, ListPatientController)
Route.put("/patients/:id", authenticate, upload.single("avatar"), UpdatePatientController)

// Rotas Novo Evento
// ==================
Route.post("/events", authenticate, CreateNewEventController)
Route.get("/events/:patient", authenticate, ListEventsController)
Route.delete('/events/:id', authenticate, DeleteEventController)

// Rotas Diário
// =================
Route.post("/dailys", authenticate, CreateDailysController)
Route.get("/dailys/:id/:date", authenticate, ListDailyController)
Route.put("/dailys/:id", authenticate, DoneDailyController)

export default Route;
