import { FC, MouseEventHandler, useEffect, useState } from 'react'
import moment from 'moment'

import {
	DaySelectorStyled,
	WeekDaySelectorStyled,
	WeekSlider
} from './DaySelector.styled'
import { momentFormat } from 'helpers/momentFormat'
import { WeekDay } from './types'
import { DayEvent } from '../../../EventNotepad/types'

interface DaySelectorProps {
	selectedDay: string
	setSelectedDay: (newValue: string) => unknown
	setSelectedHourEvent: (newValue: DayEvent) => unknown
}

export const DaySelector: FC<DaySelectorProps> = ({
	selectedDay,
	setSelectedDay,
	setSelectedHourEvent
}) => {
	const [week, setWeek] = useState<WeekDay[]>([] as WeekDay[])

	useEffect(() => {
		// Проверяем есть ли выбранная дата в массиве
		if (week.some(day => day.stringDate === momentFormat(selectedDay))) {
			return
		}

		const newWeekArray: WeekDay[] = []

		for (let i = 1; i <= 7; i++) {
			newWeekArray.push({
				stringDate: moment(selectedDay).weekday(i).format('DD/dddd/MMMM/YYYY'),
				ISOFormat: moment(selectedDay).weekday(i).toISOString()
			})
		}

		setWeek(newWeekArray)
	}, [selectedDay, week])

	const onClickDay = (ISOFormat: string): MouseEventHandler<HTMLDivElement> => {
		return () => {
			setSelectedDay(ISOFormat)
			setSelectedHourEvent({} as DayEvent)
		}
	}

	const onClickPrevWeek = () => {
		const newSelectedDay = moment(selectedDay).subtract(7, 'days').toISOString()
		setSelectedDay(newSelectedDay)
	}
	const onClickNextWeek = () => {
		const newSelectedDay = moment(selectedDay)
			.subtract(-7, 'days')
			.toISOString()
		setSelectedDay(newSelectedDay)
	}

	const splitFormattedSelectedDay = moment(selectedDay)
		.format('MMMM/YYYY')
		.split('/')

	return (
		<DaySelectorStyled>
			<WeekDaySelectorStyled>
				{week.map(day => {
					const splitDay = day.stringDate.split('/')
					const selectedWeekDay =
						momentFormat(selectedDay) === day.stringDate ? 'selected' : ''
					return (
						<div key={day.stringDate} onClick={onClickDay(day.ISOFormat)}>
							<p>{splitDay[1].charAt(0)}</p>
							<p className={selectedWeekDay}>{splitDay[0]}</p>
						</div>
					)
				})}
			</WeekDaySelectorStyled>
			<WeekSlider>
				<button onClick={onClickPrevWeek}>{'<'}</button>
				<p>
					{splitFormattedSelectedDay[0]} {splitFormattedSelectedDay[1]}
				</p>
				<button onClick={onClickNextWeek}>{'>'}</button>
			</WeekSlider>
		</DaySelectorStyled>
	)
}
