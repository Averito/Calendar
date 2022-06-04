import styled from 'styled-components'

export const HeaderStyled = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	border-bottom: 1px solid gray;
	background: white;
`
export const InterviewCalendarStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	border-bottom: 1px solid gray;
`
export const AddButton = styled.button`
	border: none;
	background: transparent;
	transition: all 0.5s ease;
	color: crimson;
	font-size: 30px;
	cursor: pointer;
	&:hover {
		transform: rotate(180deg);
	}
`
