import { Request, Response } from "express";
import CreatePatientService from "../../services/patients/CreatePatientService";
import sharp from "sharp";
import { unlink } from 'fs/promises';

const CreatePatientController = async (req: Request, res: Response) => {

    const { name, birth } = req.body
    const user_id = req.user_id
    let avatar: string;

    if (req.file) {
        const extension = req.file.mimetype.substring(6)
        let randomName = Math.floor(Math.random() * 999999999) + Date.now()
        await sharp(req.file.path)
            .resize(300)
            .toFile(`./uploads/${randomName}.${extension}`)

        avatar = `${randomName}.${extension}`
        await unlink(req.file.path)
    }  

    const patient = await CreatePatientService({ name, photo: avatar, birth, user_id })
    return res.json(patient)
}

export default CreatePatientController;