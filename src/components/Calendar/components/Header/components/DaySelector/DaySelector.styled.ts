import styled from 'styled-components'

export const DaySelectorStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background: lightgray;
	padding: 5px;
`
export const WeekDaySelectorStyled = styled.div`
	display: flex;
	
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		margin: 0 4px;
		
		> p:last-of-type {
			cursor: pointer;
			border: none;
			border-radius: 50%;
			padding: 5px 8px;
			
			&.selected {
				background: crimson;
				color: white;
			}
		}
	}
`
export const WeekSlider = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: min(100%, 300px);
	font-weight: bold;
	
	> button {
    border: none;
    background: transparent;
    color: crimson;
    font-size: 30px;
    cursor: pointer;
	}
`
