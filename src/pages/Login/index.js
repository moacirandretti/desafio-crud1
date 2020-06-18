import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api"
import { Title, Banner, Containner, Form, Footer } from "./style"

const Login = () => {
	const history = useHistory()
	const userToken = localStorage.getItem("userToken")

	const [login, setLogin] = useState("")
	const [pass, setPass] = useState("")

	async function handleLogin(e) {
		e.preventDefault()

		try {
			const response = await api.get("funcionarios")
			const usuario = response.data[0].login
			const password = response.data[0].password

			if (login == usuario && pass == password) {
				localStorage.setItem("userToken", response.data[0].token)
				history.push("/cadastro")
			} else {
				alert("Usuário ou Senha incorretos. Tente novamente!")
			}
		} catch (err) {
			console.log(err)
			alert("Falha no Login tente novamente!")
		}
	}

	return (
		<>
			<Containner>
				<Banner>
					<Title>Login</Title>
				</Banner>
				<Form onSubmit={handleLogin}>
					<input
						type="text"
						placeholder="Usuário é admin"
						required={true}
						minLength={4}
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Senha é 1234"
						required={true}
						minLength={4}
						value={pass}
						onChange={(e) => setPass(e.target.value)}
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
