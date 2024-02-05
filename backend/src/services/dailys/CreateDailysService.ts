import { parseISO, addDays, format } from 'date-fns';
import Prisma from '../../prisma';

interface Dailys {
  title: string;
  hour: Date;
  description: string;
  date: string;
  final_date: string;
  patient_id: string;
}

const CreateDailysService = async ({
  title,
  hour,
  description,
  date,
  final_date,
  patient_id,
}: Dailys) => {
  if (!title) return { messageError: 'Title is required!' };
  if (!hour) return { messageError: 'Hour is required!' };
  if (!description) return { messageError: 'Description is required!' };
  if (!patient_id) return { messageError: 'Patient_id is required!' };
  if (!date) return { error: 'Date is required!' }
  if (!final_date) return { error: 'Final date required!' }

  const start = parseISO(date);
  const end = parseISO(final_date); 

  for (let currentDate = start; currentDate <= end; currentDate = addDays(currentDate, 1)) {
    const formattedDate = format(currentDate, 'dd-MM-yyyy');

    const dailys = await Prisma.daily.create({ 
      data: {
        title,
        hour,
        description,
        date: formattedDate,
        done: false,
        patient_id,
      },
    });
  }

  return { message: 'Daily entries created successfully!' };
};

export default CreateDailysService;
