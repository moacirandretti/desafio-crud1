import styled from "styled-components"

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	text-align: center;
	line-height: 60px;
`

export const Containner = styled.div`
	/* max-width: 100vw; */
	width: 90vw;
	min-height: 90vh;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 8px;
	position: relative;

	table {
		margin: 20px auto;
		width: 100%;
		overflow-x: auto;
		border-spacing: 1;
		border-collapse: collapse;
		background: white;
		border-radius: 6px;
		overflow: hidden;

		font-family: Roboto, sans-serif;
		border: 1px solid white;
	}

	td {
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #fff;
	}

	tr:nth-child(odd) {
		background-color: #ddd;
	}

	th {
		background-color: #697fbf;
		color: white;
		padding: 10px;
	}

	a {
		color: #949494;
		font-size: 18px;
		text-decoration: none;
		text-align: center;
	}

	input {
		width: 100%;
		height: 30px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid #d9d9d9;
		background-color: rgba(255, 255, 255, 0.8);
	}
`

export const Input = styled.input.attrs((props) => ({
	type: "text"
}))`
		width: 60px;
		height: 30px;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom: 1px solid #d9d9d9;



		&::placeholder {
			color: #d9d9d9;
		}
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

export const FormSubmit = styled.form`
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
		&:focus {
			opacity: 0.8;
			background-color: #697fbf;
		}
	}
`
export const Footer = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-around;
	align-items: center;
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
export const ButtonNav = styled.button`
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
		&:focus {
			opacity: 0.8;
			background-color: #697fbf;
		}
	}
`

export const NavBar = styled.div`
	display: flex;
	justify-content: space-evenly;
`
