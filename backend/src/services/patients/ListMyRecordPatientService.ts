import Prisma from "../../prisma";

interface Record {
    patient_id: string;
    doctor_id: string;
}

const ListMyRecordPatientService = async ({ patient_id, doctor_id }: Record) => {

    const record = await Prisma.record.findFirst({
        where: { patient_id, doctor_id }
    })

    return record;
}

export default ListMyRecordPatientService