import styled from 'styled-components'

export const EventNotepadStyled = styled.div`
	display: flex;
	overflow: hidden auto;
	height: calc(100vh - 127px);
	max-height: 740px;
`
export const EventNotepadTimeStyled = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 0 5px;

	> p:not(:last-of-type) {
		margin-bottom: 35px;
	}
`
export const EventNotepadBoardStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
`
export const EventNotepadCellStyled = styled.div`
	width: calc(100% / 7);
	height: 60px;
	border: 1px solid lightgray;
	cursor: pointer;
	padding: 2px;

	> div {
		height: 100%;
		transition: background-color 0.3s ease;
		background-color: ${(props: { recorded: boolean }) =>
			props.recorded ? 'lightgray' : 'white'};

		&:hover {
			background-color: ${(props: { recorded: boolean }) =>
				props.recorded ? 'gray' : 'lightgray'};
		}
	}
`
