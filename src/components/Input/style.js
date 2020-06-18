import styled from "styled-components"

export const Input = styled.input`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px auto;
	width: 300px;

	input {
		width: 250px;
		height: 50px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid #d9d9d9;

		&::placeholder {
			color: #d9d9d9;
		}
	}
