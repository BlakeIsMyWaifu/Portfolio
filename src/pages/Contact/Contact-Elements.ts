import styled, { css, keyframes } from 'styled-components'
import { cream, deepBlue, silverPink, zodiacBlue } from 'utils/colours'

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const TextInput = css`
	border-style: none;
	background: transparent;
	outline: none;
	flex-grow: 1;
	color: ${cream};
	font-size: 16px;
	line-height: 2.4rem;
	vertical-align: middle;
	text-transform: none;
	&::placeholder {
		color: ${silverPink}
	}
`

interface FormContainerProps {
	isMobile: boolean;
}

const desktopGrid = css`
	grid-template-rows: 1.5fr 6fr 1.2fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "email name" "message message" ". button";
`

const mobileGrid = css`
	grid-template-rows: 1.5fr 1.5fr 6fr 1.2fr;
	grid-template-columns: 1fr;
	grid-template-areas: "email" "name" "message" "button";
`

export const FormContainer = styled.div<FormContainerProps>`
	display: grid;
	grid-gap: 16px;
	margin-top: 4rem;
	${props => props.isMobile ? mobileGrid : desktopGrid}
`

interface InputWrapperProps {
	area: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
	grid-area: ${props => props.area};
	width: calc(100% - 2rem);
	position: relative;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	border-radius: 2px;
	padding: 4px 1rem;
	background: ${zodiacBlue};
	&:after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		height: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		background-position: 0% 0%;
		background: linear-gradient(to right, #03045E, #023E8A, #0077B6, #0096C7, #00B4D8, #48CAE4, #90E0EF);
		background-size: 500% auto;
		animation: ${css`${gradient}`} 8s linear infinite;
	}
`

export const Input = styled.input`
	${TextInput}
`

export const TextArea = styled.textarea`
	resize: none;
	${TextInput}
`

export const Button = styled.button`
	grid-area: button;
	width: 160px;
	justify-self: end;
	background: none;
	border: none;
	background-color: ${deepBlue};
	color:  ${cream};
	font-size: 1.5rem;
	line-height: 2rem;
	vertical-align: middle;
	transform: color .25s;
	&:hover {
		color: ${silverPink};
	}
`