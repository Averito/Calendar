import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import {
	HeaderStyled,
	InterviewCalendarStyled,
	AddButton
} from './Header.styled'
import { DaySelector } from './components/DaySelector'
import { DayEvent } from '../EventNotepad/types'

interface HeaderProps {
	selectedDay: string
	setSelectedDay: (newValue: string) => unknown
	selectedHourEvent: DayEvent
	setSelectedHourEvent: Dispatch<SetStateAction<DayEvent>>
}

export const Header: FC<HeaderProps> = ({
	selectedDay,
	setSelectedDay,
	selectedHourEvent,
	setSelectedHourEvent
}) => {
	const onClickCreateEvent: MouseEventHandler<HTMLButtonElement> = () => {
		const newEvent = prompt('Что вы запланировали?')
		const newSelectedHourEvent = {
			...selectedHourEvent,
			event: newEvent ? newEvent : selectedHourEvent.event
		}
		setSelectedHourEvent(newSelectedHourEvent)
	}

	return (
		<HeaderStyled>
			<InterviewCalendarStyled>
				<p>Interview calendar</p>
				<AddButton onClick={onClickCreateEvent}>+</AddButton>
			</InterviewCalendarStyled>
			<DaySelector
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				setSelectedHourEvent={setSelectedHourEvent}
			/>
		</HeaderStyled>
	)
}
