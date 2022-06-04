import { FC, MouseEventHandler, useEffect, useState } from 'react'
import moment from 'moment'

import { DayEvent } from './types'
import { EventNotepadStyled, EventNotepadCellStyled, EventNotepadBoardStyled, EventNotepadTimeStyled } from './EventNotepad.styled'
import { matrixBinarySearch } from '../../../../helpers/matrixBinarySearch'

interface EventNotepadProps {
	selectedDay: string
	selectedHourEvent: DayEvent
	setSelectedHourEvent: (newValue: DayEvent) => unknown
}

export const EventNotepad: FC<EventNotepadProps> = ({ selectedDay, selectedHourEvent, setSelectedHourEvent }) => {
	const [events, setEvents] = useState<DayEvent[][]>([])

	useEffect(() => {
		const formattedSelectedDay = moment(selectedDay).format('DD/MM/YYYY')
		const currentDayString = localStorage.getItem(formattedSelectedDay)

		if (currentDayString) {
			const currentDayParse = JSON.parse(currentDayString) as DayEvent[][]

			if (selectedHourEvent.id === undefined) return setEvents(currentDayParse)

			const coordinates = matrixBinarySearch(currentDayParse, selectedHourEvent)
			const { x, y } = coordinates

			if (selectedHourEvent.event === currentDayParse[x][y].event) return setEvents(currentDayParse)

			currentDayParse[x][y].event = selectedHourEvent.event
			localStorage.setItem(formattedSelectedDay, JSON.stringify(currentDayParse))

			return setEvents(currentDayParse)
		}

		const newDayEventMatrix: DayEvent[][] = []

		for (let x = 0; x < 24; x++) {
			newDayEventMatrix[x] = []
			for (let y = 0; y < 7; y++) {
				newDayEventMatrix[x][y] = {
					id: x * 7 + y,
					event: ''
				}
			}
		}

		localStorage.setItem(formattedSelectedDay, JSON.stringify(newDayEventMatrix))
		setEvents(newDayEventMatrix)
	}, [selectedDay, selectedHourEvent])

	const onClickCell = (dayEvent: DayEvent): MouseEventHandler<HTMLDivElement> => {
		return () => {
			setSelectedHourEvent(dayEvent)
		}
	}

	return (
		<EventNotepadStyled>
			<EventNotepadTimeStyled>
				<p>00:00</p>
				<p>01:00</p>
				<p>02:00</p>
				<p>03:00</p>
				<p>04:00</p>
				<p>05:00</p>
				<p>06:00</p>
				<p>07:00</p>
				<p>08:00</p>
				<p>09:00</p>
				<p>10:00</p>
				<p>11:00</p>
				<p>12:00</p>
				<p>13:00</p>
				<p>14:00</p>
				<p>15:00</p>
				<p>16:00</p>
				<p>17:00</p>
				<p>18:00</p>
				<p>19:00</p>
				<p>20:00</p>
				<p>21:00</p>
				<p>22:00</p>
				<p>23:00</p>
				<p>24:00</p>
			</EventNotepadTimeStyled>
			<EventNotepadBoardStyled>
				{events.map(hourEvents => {
					return hourEvents.map(event => (
						<EventNotepadCellStyled
							onClick={onClickCell(event)}
							key={event.id}
							recorded={event.event || selectedHourEvent.id === event.id}
						>
							<div />
						</EventNotepadCellStyled>
					))
				})}
			</EventNotepadBoardStyled>
		</EventNotepadStyled>
	)
}
