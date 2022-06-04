import { FC } from 'react'
import moment from 'moment'

import { DayEvent } from '../EventNotepad/types'
import { FooterStyled, FooterButton } from './Footer.styled'

interface FooterProps {
	setSelectedDay: (newValue: string) => unknown
	selectedHourEvent: DayEvent
	setSelectedHourEvent: (newValue: DayEvent) => unknown
}

export const Footer: FC<FooterProps> = ({
	setSelectedDay,
	selectedHourEvent,
	setSelectedHourEvent
}) => {
	const onClickToday = () => {
		setSelectedDay(moment().toISOString())
	}
	const onClickRead = () => {
		alert(selectedHourEvent.event)
	}
	const onClickDelete = () => {
		const updatedSelectedHourEvent = {
			id: selectedHourEvent.id,
			event: ''
		}
		setSelectedHourEvent(updatedSelectedHourEvent)
	}

	return (
		<FooterStyled>
			<FooterButton onClick={onClickToday}>Today</FooterButton>
			{selectedHourEvent.event && (
				<FooterButton onClick={onClickRead}>Read</FooterButton>
			)}
			{selectedHourEvent.id !== undefined && selectedHourEvent.event !== '' && (
				<FooterButton onClick={onClickDelete}>Delete</FooterButton>
			)}
		</FooterStyled>
	)
}
