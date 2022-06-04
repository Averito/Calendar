import { DayEvent } from '../components/Calendar/components/EventNotepad/types'

interface Coordinate {
	x: number
	y: number
}

export const matrixBinarySearch = (dayEventMatrix: DayEvent[][], dayEvent: DayEvent): Coordinate => {
	const nestedArrayLength = dayEventMatrix[0].length

	let min = 0
	let middle = Math.floor((dayEventMatrix.length - 1) / 2)
	let max = dayEventMatrix.length - 1

	let middle2 = -1

	while (middle2 < 0) {
		if ((middle + 1) * nestedArrayLength > dayEvent.id && middle * nestedArrayLength <= dayEvent.id) {
			middle2 = Math.floor((dayEventMatrix[middle].length - 1) / 2)
		}
		if ((middle + 1) * nestedArrayLength <= dayEvent.id) {
			min = middle + 1
		}
		if (middle * nestedArrayLength > dayEvent.id) {
			max = middle - 1
		}

		middle = Math.floor((min + max) / 2)
	}

	let min2 = 0
	let max2 = dayEventMatrix[middle].length - 1

	while (min2 <= max2) {
		if (dayEventMatrix[middle][middle2].id === dayEvent.id) {
			break
		}
		if (dayEventMatrix[middle][middle2].id > dayEvent.id) {
			max2 = middle2 - 1
		}
		if (dayEventMatrix[middle][middle2].id < dayEvent.id) {
			min2 = middle2 + 1
		}

		middle2 = Math.floor((max2 + min2) / 2)
	}

	return { x: middle, y: middle2 }
}
