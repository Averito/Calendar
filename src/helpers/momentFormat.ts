import moment from 'moment'

export const momentFormat = (date?: string) => {
	if (date) {
		return moment(date).format('DD/dddd/MMMM/YYYY')
	}
	return moment().format('DD/dddd/MMMM/YYYY')
}
