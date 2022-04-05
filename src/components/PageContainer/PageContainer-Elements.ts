import styled from 'styled-components'
import { mulledBlue } from 'utils/colours'

export const Container = styled.div`
	position: absolute;
	width: calc(100% - 300px);
	right: 0;
	min-height: 100%;
	background-color: ${mulledBlue};
`

export const ChildWrapper = styled.div`
	padding: 16px;
`