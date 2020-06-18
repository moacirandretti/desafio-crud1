import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import {
	Title,
	Banner,
	Containner,
	FormSubmit,
	Footer,
	Input,
	ButtonNav,
	NavBar
} from "./style"
import { FiTrash2, FiEdit } from "react-icons/fi"

const Listagem = () => {
	const [usuarios, setUsuarios] = useState([])
	const [statusCheckbox, setStatusCheckbox] = useState(false)

	const [id, setID] = useState("")
	const [nome, setNome] = useState("")
	const [cpf, setCpf] = useState("")
	const [email, setEmail] = useState("")
	const [cep, setCep] = useState()
	const [rua, setRua] = useState("")
	const [numero, setNumero] = useState()
	const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("")

	// Recupera os Usuários cadastrados
	useEffect(() => {
		try {
			async function callAPI() {
				const response = await api.get("users")
				setUsuarios(response.data)
			}
			callAPI()
		} catch (erro) {
			alert("Erro ao recuperar listagem de usuários.")
		}
	}, [])

	// Alterar o Usuário
	const [usuarioValue, setusuarioValue] = useState("")

	const editUsuarioValue = (
		id,
		novoNome,
		novoCpf,
		novoEmail,
		novoCep,
		novoRua,
		novoNumero,
		novoBairro,
		novoCidade
	) => {
		try {
			const response = api.put(`${"users/" + id}`, {
				nome: novoNome,
				cpf: novoCpf,
				email: novoEmail,
				cep: novoCep,
				rua: novoRua,
				numero: novoNumero,
				bairro: novoBairro,
				cidade: novoCidade
			})
			alert("Usuário alterado!")
		} catch (err) {
			console.log(err)
			alert("Erro ao editar pedido!")
		}
	}

	// Deletar Usuário
	async function handleDeletePedido(id) {
		try {
			await api.delete(`users/${id}`)

			setUsuarios(usuarios.filter((pedido) => pedido.id !== id))
		} catch (error) {
			alert("Erro ao DELETAR pedido, tente novamente!")
		}
	}

	return (
		<>
			<Containner>
				<Banner>
					<Title>Usuários Cadastrados</Title>
				</Banner>

				<NavBar>
					<Link to="/cadastro">
						<ButtonNav>Cadastro</ButtonNav>
					</Link>

					<Link to="/">
						<ButtonNav>LogOut</ButtonNav>
					</Link>
				</NavBar>

				<table>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>CPF</th>
						<th>E-mail</th>
						<th>CEP</th>
						<th>Rua</th>
						<th>Número</th>
						<th>Bairro</th>
						<th>Cidade</th>
						<th>Deletar</th>
						<th>Editar</th>
					</tr>
					{usuarios.map((item) => {
						return (
							<>
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>
										<input
											type="text"
											onChange={(e) => setNome(e.target.value)}
											defaultValue={item.nome}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setCpf(e.target.value)}
											defaultValue={item.cpf}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setEmail(e.target.value)}
											defaultValue={item.email}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setCep(e.target.value)}
											defaultValue={item.cep}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setRua(e.target.value)}
											defaultValue={item.rua}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setNumero(e.target.value)}
											defaultValue={item.numero}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setBairro(e.target.value)}
											defaultValue={item.bairro}
										/>
									</td>
									<td>
										<input
											type="text"
											onChange={(e) => setCidade(e.target.value)}
											defaultValue={item.cidade}
										/>
									</td>

									<td>
										<FiTrash2
											size={20}
											color="red"
											onClick={() => handleDeletePedido(item.id)}
											style={{ cursor: "pointer" }}
										/>
									</td>

									<td>
										<FiEdit
											onClick={() =>
												editUsuarioValue(
													item.id,
													nome,
													cpf,
													email,
													cep,
													rua,
													numero,
													bairro,
													cidade
												)
											}
											color="green"
											style={{ cursor: "pointer" }}
										/>
									</td>
								</tr>
							</>
						)
					})}
				</table>
			</Containner>
		</>
	)
}

export default Listagem
