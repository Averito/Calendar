import { FC, useState } from 'react'
import moment from 'moment'

import { CalendarStyled } from './Calendar.styled'
import { Header } from './components/Header'
import { EventNotepad } from './components/EventNotepad'
import { Footer } from './components/Footer'
import { DayEvent } from './components/EventNotepad/types'

export const Calendar: FC = () => {
	const [selectedDay, setSelectedDay] = useState<string>(moment().toISOString())
	const [selectedHourEvent, setSelectedHourEvent] = useState<DayEvent>(
		{} as DayEvent
	)

	return (
		<CalendarStyled>
			<Header
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				selectedHourEvent={selectedHourEvent}
				setSelectedHourEvent={setSelectedHourEvent}
			/>
			<EventNotepad
				selectedDay={selectedDay}
				selectedHourEvent={selectedHourEvent}
				setSelectedHourEvent={setSelectedHourEvent}
			/>
			<Footer
				setSelectedDay={setSelectedDay}
				selectedHourEvent={selectedHourEvent}
				setSelectedHourEvent={setSelectedHourEvent}
			/>
		</CalendarStyled>
	)
}
