import { Request, Response } from "express";
import UpdatePatientService from "../../services/patients/UpdatePatientService";
import sharp from "sharp";
import { unlink } from 'fs/promises';

const UpdatePatientController = async (req: Request, res: Response) => {

    const id_patient = req.params.id
    const { name, birth } = req.body

    let avatar: string | null = null;

    if (req.file) {
        const extension = req.file.mimetype.substring(6)
        let randomName = Math.floor(Math.random() * 999999999) + Date.now()
        await sharp(req.file.path)
            .resize(300)
            .toFile(`./uploads/${randomName}.${extension}`)

        avatar = `${randomName}.${extension}`
        await unlink(req.file.path)
        console.log(req.file.path)
    }  


    const patient = await UpdatePatientService({ id_patient, name, photo: avatar, birth })
    return res.json(patient)
}

export default UpdatePatientController