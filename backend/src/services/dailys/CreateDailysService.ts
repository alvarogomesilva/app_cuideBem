import Prisma from "../../prisma";

interface Dailys {
  title: string;
  hour: Date;
  description: string;
  date_initial: string;
  final_date: string;
  patient_id: string;
}

const CreateDailysService = async ({
  title,
  hour,
  description,
  date_initial,
  final_date,
  patient_id,
}: Dailys) => {
  if (!title) return { messageError: "Title is required!" };
  if (!hour) return { messageError: "Hour is required!" };
  if (!description) return { messageError: "Description is required!" };
  if (!patient_id) return { messageError: "Patient_id is required!" };

  const start = new Date(date_initial);
  const end = new Date(final_date);

  // Loop que itera sobre cada dia entre a data inicial e a final, inclusive
  for (let currentDate = new Date(start); currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
    const dailys = await Prisma.daily.create({
      data: {
        title,
        hour,
        description,
        date_initial: currentDate.toISOString(),
        final_date: currentDate.toISOString(),
        done: false,
        patient_id,
      },
    });

  }

  return { message: "Daily entries created successfully!" };
};

export default CreateDailysService;
