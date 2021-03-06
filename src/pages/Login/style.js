import styled from "styled-components"

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	text-align: center;
	line-height: 60px;
`

export const Containner = styled.div`
	max-width: 500px;
	width: 100%;
	height: 300px;
	margin: 20vh auto;
	background-color: #fff;
	border-radius: 8px;
	position: relative;

	a {
		color: #949494;
		font-size: 18px;
		text-decoration: none;
		text-align: center;
	}
`

export const Banner = styled.div`
	background-color: #4557bf;
	width: 100%;
	height: 60px;
	text-align: center;
	color: #fff;
	overflow: none;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px auto;
	width: 300px;

	input {
		width: 250px;
		text-align: center;
		font-size: 30px;
		height: 50px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid #d9d9d9;

		&:focus {
			transition: 900ms;
			border-bottom: 1px solid #4557bf;
		}

		&::placeholder {
			color: #d9d9d9;
			font-size: 20px;
		}
	}

	button {
		width: 120px;
		height: 35px;
		color: #fff;
		font-size: 20px;
		border: 0;
		margin-top: 10px;
		border-radius: 5px;
		background-color: #f24182;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
			transition: 600ms;
		}
	}
`
export const Footer = styled.div`
	position: absolute;
	bottom: 1px;
	margin: 0 auto;
	height: 50px;
	width: 100%;
	border-top: 1px solid #d9d9d9;
	text-align: center;

	a {
		color: #949494;
		font-size: 14px;
		text-decoration: none;
	}
`
