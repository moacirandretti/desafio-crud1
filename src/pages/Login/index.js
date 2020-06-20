import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api"
import * as Yup from "yup"
import { Title, Banner, Containner, Form, Footer } from "./style"

const Login = () => {
	const history = useHistory()
	const userToken = localStorage.getItem("userToken")

	const [login, setLogin] = useState("")
	const [pass, setPass] = useState("")

	// Validação Yup
	const schema = Yup.object().shape({
		login: Yup.string().required("E-mail inválido").email(),
		pass: Yup.string()
			.required("Nome obrigatório")
			.min(4, "Senha com no mínimo 4 caractéres")
	})

	const data = {
		login: login,
		pass: pass
	}

	// Função para fazer login e armazenar o token no localStorage
	async function handleLogin(e) {
		e.preventDefault()

		try {
			await schema.validate(data, { abortEarly: false })

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
						type="email"
						placeholder="Usuário: admin@admin.com"
						required={true}
						minLength={4}
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Senha: 1234"
						required={true}
						minLength={4}
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<button>Logar</button>
				</Form>

				<Footer />
			</Containner>
		</>
	)
}

export default Login
