import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Input from '../../../components/Input'
import { styles } from './styles'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Submit from '../../../components/Submit'
import api from '../../../api';
import { format } from 'date-fns'

export default function NewDailyRoutineGuardian() {
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        patient_id: "93f90455-386e-4d27-abdc-a09a65ffdc67",
        title: "",
        description: "",
        hour: new Date(),
        date: new Date(),
        final_date: new Date()
    })
    const [datePickerVisible1, setDatePickerVisibl1] = useState(false);
    const [datePickerVisible2, setDatePickerVisible2] = useState(false);
    const [datePickerVisible3, setDatePickerVisible3] = useState(false);


    const showDate1 = () => setDatePickerVisibl1(true);
    const showDate2 = () => setDatePickerVisible2(true);
    const showDate3 = () => setDatePickerVisible3(true);

    const hideDatePicker1 = () => setDatePickerVisibl1(false);
    const hideDatePicker2 = () => setDatePickerVisible2(false);
    const hideDatePicker3 = () => setDatePickerVisible3(false);

    const handleConfirmDate1 = (date) => {
        setInputs({ ...inputs, date: date });
        hideDatePicker1();
    };

    const handleConfirmDate2 = (date) => {
        setInputs({ ...inputs, final_date: date });
        hideDatePicker2();
    };

    const handleConfirmDate3= (date) => {
        setInputs({ ...inputs, hour: date });
        hideDatePicker3();
    };

    const handleDailyRoutine = async () => {
        setLoading(true)
        try {
            const response = await api.post('/dailys', inputs)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Input
                    placeholder='Paciente'
                />
                <Input
                    placeholder='Titulo'
                    value={inputs.title}
                    onChangeText={(text) => setInputs({ ...inputs, title: text })}
                />

                <Input
                    placeholder='Descrição'
                    value={inputs.description}
                    onChangeText={(text) => setInputs({ ...inputs, description: text })}
                />

                <View style={styles.boxDates}>
                    <TouchableOpacity
                        style={styles.input}
                        onPress={showDate1}
                    >
                        <Text>{format(inputs.date, 'dd/MM/yyyy')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.input}
                        placeholder='Data final'
                        onPress={showDate2}
                    >
                        <Text>{format(inputs.final_date, 'dd/MM/yyyy')}</Text>
                    </TouchableOpacity>

                </View>

               <TouchableOpacity style={styles.hour} onPress={showDate3}>
                <Text>{format(inputs.hour, 'HH:mm')}</Text>
               </TouchableOpacity>


                <DateTimePickerModal
                    date={inputs.date_initial}
                    isVisible={datePickerVisible1}
                    mode="date"
                    display='inline'
                    locale='pt'
                    onConfirm={handleConfirmDate1}
                    onCancel={hideDatePicker1}
                />

                <DateTimePickerModal
                    date={inputs.final_date}
                    isVisible={datePickerVisible2}
                    mode="date"
                    display='inline'
                    locale='pt'
                    onConfirm={handleConfirmDate2}
                    onCancel={hideDatePicker2}
                />

                <DateTimePickerModal
                    date={inputs.hour}
                    isVisible={datePickerVisible3}
                    mode="time"
                    display='inline'
                    locale='pt'
                    onConfirm={handleConfirmDate3}
                    onCancel={hideDatePicker3}
                />


                <Submit 
                    text='Adicionar' 
                    onPress={handleDailyRoutine} 
                    loadingAuth={loading}
                    />
            </View>
        </View>
    )
}