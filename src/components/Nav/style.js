import styled from "styled-components"

export const NavMenu = styled.div`
	position: sticky;
	top: 0px;
	min-width: 70vh;
	width: 70vw;
	height: 50px;
	border-radius: 0 0 15px 15px;
	margin: 0 auto;
	background-color: #697fbf;

	ul {
		display: flex;
		height: 100%;
		justify-content: space-around;
		align-items: center;
		font-family: "Oswald", sans-serif;
		font-size: 20px;
		color: #fff;
		list-style: none;
	}

	li:hover {
		color: #fff;
		transition: 1s;
	}
`
