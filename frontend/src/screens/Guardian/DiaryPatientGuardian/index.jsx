import { Text, View } from 'react-native'
import ButtonBottom from '../../../components/ButtonBottom'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { AgendaList, Calendar, CalendarProvider, ExpandableCalendar, LocaleConfig, WeekCalendar } from 'react-native-calendars';
import { useRef, useState } from 'react';

export const agendaItems = [
    {
        title: '2024-03-30',
        data: [
            { id: '1', title: 'Reunião de Equipe', description: 'Discussão de projetos futuros', location: 'Sala 101' },
        ],
    },
    {
        title: '2024-02-01',
        data: [
            { id: '3', title: 'Entrega do Projeto', description: 'Entregar projeto finalizado ao cliente', location: 'Escritório do Cliente' },
            { id: '4', title: 'Treinamento Interno', description: 'Treinamento sobre novas tecnologias', location: 'Sala de Treinamento' },
        ],
    },
    // Adicione mais itens conforme necessário
];

// Função para gerar datas marcadas para teste
export const getMarkedDates = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato YYYY-MM-DD

    return {
        [currentDate]: { selected: true, selectedColor: 'blue' }, // Marca a data atual como selecionada (pode ajustar as propriedades conforme necessário)
        '2024-01-30': { marked: true, dotColor: 'red' }, // Exemplo de outra data marcada
        // Adicione mais datas marcadas conforme necessário
    };
};
const testIDs = {
    weekCalendar: {
        CONTAINER: 'weekCalendarContainer',
    },
    expandableCalendar: {
        CONTAINER: 'expandableCalendarContainer',
    },
    agendaList: 'agendaListContainer',
    todayButton: 'todayButton',
    eventItem: (eventId) => `eventItem-${eventId}`, // Use um ID único para cada item de evento
    // Adicione mais testIDs conforme necessário
};


LocaleConfig.locales['pt'] = {
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt';

export default function DiaryPatientGuardian() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState('');
    const weekView = false
    const marked = useRef(getMarkedDates());
    return (
        <View style={styles.container}>
            <CalendarProvider
                style={styles.content}
                date='2023-03-31'
                showTodayButton={true}
            >
                {weekView ? (
                    <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={marked.current} />
                ) : (
                    <ExpandableCalendar
                        testID={testIDs.expandableCalendar.CONTAINER}
                        // horizontal={false}
                        // hideArrows
                        // disablePan
                        // hideKnob
                        // initialPosition={ExpandableCalendar.positions.OPEN}
                        calendarStyle={styles.calendar}
                        // headerStyle={styles.header} // for horizontal only
                        // disableWeekScroll
                        // disableAllTouchEventsForDisabledDays
                        firstDay={1}
                        markedDates={marked.current}

                    // animateScroll
                    // closeOnDayPress={false}
                    />
                )}

                <View>
                    <AgendaList
                        sections={agendaItems}
                        sectionStyle={styles.section}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text>{item.title}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </CalendarProvider>

            <ButtonBottom onPress={() => navigation.navigate('NewDiaryPatientGuardian')} />
        </View>
    )
}