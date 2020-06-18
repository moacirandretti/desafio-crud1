import React from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import { Title, Banner, Containner, Form, Footer } from "./style"

const Login = () => {
	return (
		<>
			<Containner>
				<Banner>
					<Title>Login</Title>
				</Banner>
				<Form>
					<input type="text" placeholder="Usuário" required={true} />

					<input
						type="password"
						placeholder="Senha"
						required={true}
						minLength={4}
						maxLength={8}
					/>
					<button>Logar</button>
				</Form>

				<Footer>
					<Link to="/cadastro">
						<a>REGISTRAR</a>
					</Link>
				</Footer>
			</Containner>
		</>
	)
}

export default Login
