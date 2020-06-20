import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api"
import { Title, Banner, Containner, Icon, Busca } from "./style"
import { FiTrash2, FiEdit, FiSearch, FiUsers } from "react-icons/fi"
import { MdCached } from "react-icons/md"
import NavMenu from "../../components/Nav"

const Listagem = () => {
	const [usuarios, setUsuarios] = useState([])

	const [nome, setNome] = useState("")
	const [cpf, setCpf] = useState("")
	const [email, setEmail] = useState("")
	const [cep, setCep] = useState(0)
	const [rua, setRua] = useState("")
	const [numero, setNumero] = useState(0)
	const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("")

	const [query, setQuery] = useState("")

	// Verifica se está logado
	const history = useHistory()

	useEffect(() => {
		const userToken = localStorage.getItem("userToken")

		try {
			const chamaAPI = async () => {
				const response = await api.get("funcionarios")
				const token = response.data[0].token

				if (userToken == token) {
				} else {
					history.push("/")
				}
			}
			chamaAPI()
		} catch (err) {
			history.push("/")
		}
	}, [])

	// Recupera os Usuários cadastrados
	useEffect(() => {
		try {
			async function callAPI() {
				const response = await api.get("usuarios")
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
			const response = api.put(`${"usuarios/" + id}`, {
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
			await api.delete(`usuarios/${id}`)

			setUsuarios(usuarios.filter((pedido) => pedido.id !== id))
		} catch (error) {
			alert("Erro ao DELETAR pedido, tente novamente!")
		}
	}

	// Fazer pesquisa
	async function handleQuery(query) {
		try {
			const response = await api.get("usuarios?q=" + query)
			setUsuarios(response.data)
		} catch (error) {
			alert("Erro a fazer pesquisa! Tente novamente!")
		}
	}

	async function handleQueryOff() {
		try {
			const response = await api.get("usuarios")
			setUsuarios(response.data)
		} catch (error) {
			alert("Erro ao refazer pesquisa!")
		}
	}

	return (
		<>
			<NavMenu />
			<Containner>
				<Banner>
					<Title>Usuários Cadastrados</Title>
				</Banner>

				<Busca>
					<input
						type="text"
						defaultValue={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
					/>
					<FiSearch
						onClick={() => handleQuery(query)}
						size={35}
						style={{ cursor: "pointer" }}
					/>
					<MdCached
						onClick={() => handleQueryOff()}
						size={40}
						style={{ cursor: "pointer", color: "#f24182", paddingLeft: "10px" }}
					/>
				</Busca>

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
										<Icon>
											<FiTrash2
												size={20}
												color="red"
												onClick={() => handleDeletePedido(item.id)}
												style={{ cursor: "pointer" }}
											/>
										</Icon>
									</td>

									<td>
										<Icon>
											<FiEdit
												onClick={() =>
													editUsuarioValue(
														item.id,
														nome === "" ? item.nome : nome,
														cpf === "" ? item.cpf : cpf,
														email === "" ? item.email : email,
														cep === 0 ? item.cep : cep,
														rua === "" ? item.rua : rua,
														numero === 0 ? item.numero : numero,
														bairro === "" ? item.bairro : bairro,
														cidade === "" ? item.cidade : cidade
													)
												}
												color="green"
												style={{ cursor: "pointer" }}
											/>
										</Icon>
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
