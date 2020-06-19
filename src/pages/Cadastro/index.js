import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import axios from "axios"
import * as Yup from "yup"
import crypto from "crypto"
import {
	Title,
	Banner,
	Containner,
	FormSubmit,
	Footer,
	CepButton
} from "./style"

const Cadastro = () => {
	const inputNome = useRef(null)
	const inputCpf = useRef(null)
	const inputEmail = useRef(null)
	const inputCep = useRef(null)
	const inputRua = useRef(null)
	const inputNumero = useRef(null)
	const inputBairro = useRef(null)
	const inputCidade = useRef(null)
	const buttonEnviar = useRef(null)

	const [nome, setNome] = useState("")
	const [cpf, setCpf] = useState("")
	const [email, setEmail] = useState("")
	const [cep, setCep] = useState()
	const [rua, setRua] = useState("")
	const [numero, setNumero] = useState()
	const [bairro, setBairro] = useState("")
	const [cidade, setCidade] = useState("")

	// Validação Yup
	const schema = Yup.object().shape({
		nome: Yup.string().required("Nome obrigatório"),
		cpf: Yup.string()
			.matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { excludeEmptyString: true })
			.min(11, "O CPF deve conter 11 digitos.")
			.required("CPF obrigatório"),

		email: Yup.string().required("E-mail inválido").email(),

		cep: Yup.string().required("CEP obrigatório").min(8, "CEP inválido"),
		rua: Yup.string().required("Insira sua RUA"),

		numero: Yup.number().required("Insira o NÚMERO do seu endereço"),

		bairro: Yup.string().required("Insira o seu BAIRRO"),

		cidade: Yup.string().required("Insira sua CIDADE")
	})

	function mcpf(v) {
		v = v.replace(/\D/g, "") // Remove tudo o que não é dígito
		v = v.replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígitos
		v = v.replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígitos
		// de novo (para o segundo bloco de números)
		v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") // Coloca um hífen entre o terceiro e o quarto dígitos
		return v
	}

	function mCEP(cep) {
		cep = cep.replace(/\D/g, "")
		cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
		cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
		return cep
	}

	function mNum(num) {
		num = num.replace(/\D/g, "")
		return num
	}

	// Pulando para o próximo campo
	function pularCampo(p_campo_origem, p_campo_destino) {
		if (
			p_campo_origem.current.value.length === p_campo_origem.current.maxLength
		)
			p_campo_destino.current.focus()
	}

	// API Via CEP

	const handleCEP = async (cep) => {
		const response = await axios.get(
			`${"https://viacep.com.br/ws/" + cep + "/json/"}`
		)
		setRua(response.data.logradouro)
		setBairro(response.data.bairro)
		setCidade(response.data.localidade)

		return console.log(response.data)
	}

	// Enviando cadastro
	const data = {
		id: crypto.randomBytes(4).toString("HEX"),
		nome: nome,
		cpf: cpf,
		email: email,
		cep: cep,
		rua: rua,
		numero: numero,
		bairro: bairro,
		cidade: cidade
	}

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			await schema.validate(data, { abortEarly: false })
			await api.post("usuarios", data)

			alert("Usuário cadastrado com sucesso!")
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				// console.log(err)
				// alert(err.errors)
				// console.log(err.errors)
				for (const erro of err.errors) {
					console.log(erro)
					// alert(erro)
				}
			}
		}
	}

	return (
		<>
			<Containner>
				<Banner>
					<Title>Cadastro</Title>
				</Banner>
				<FormSubmit onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Nome"
						value={nome}
						onChange={(e) => {
							setNome(e.target.value)
							pularCampo(inputNome, inputCpf)
						}}
						maxLength={40}
						ref={inputNome}
					/>
					<input
						type="text"
						placeholder="CPF"
						value={cpf}
						onChange={(e) => {
							setCpf(mcpf(e.target.value))
							pularCampo(inputCpf, inputEmail)
						}}
						maxLength={14}
						ref={inputCpf}
					/>
					<input
						type="text"
						placeholder="e-mail"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
							pularCampo(inputEmail, inputCep)
						}}
						maxLength={45}
						ref={inputEmail}
					/>
					<input
						type="text"
						placeholder="CEP"
						value={cep}
						onChange={(e) => {
							setCep(e.target.value)
							pularCampo(inputCep, inputRua)
						}}
						maxLength={8}
						ref={inputCep}
					/>
					<CepButton onClick={() => handleCEP(cep)}>Buscar CEP</CepButton>
					<input
						type="text"
						placeholder="Rua"
						value={rua}
						onChange={(e) => {
							setRua(e.target.value)

							pularCampo(inputRua, inputNumero)
						}}
						maxLength={35}
						ref={inputRua}
					/>
					<input
						type="text"
						placeholder="N°"
						value={numero}
						onChange={(e) => {
							setNumero(mNum(e.target.value))
							pularCampo(inputNumero, inputBairro)
						}}
						maxLength={4}
						ref={inputNumero}
					/>
					<input
						type="text"
						placeholder="Bairro"
						value={bairro}
						onChange={(e) => {
							setBairro(e.target.value)
							pularCampo(inputBairro, inputCidade)
						}}
						maxLength={40}
						ref={inputBairro}
					/>
					<input
						type="text"
						placeholder="Cidade"
						value={cidade}
						onChange={(e) => {
							setCidade(e.target.value)
							pularCampo(inputCidade, buttonEnviar)
						}}
						maxLength={35}
						ref={inputCidade}
					/>

					<button type="submit" ref={buttonEnviar}>
						Enviar
					</button>
				</FormSubmit>

				<Footer>
					<Link to="/">
						<a>VOLTAR</a>
					</Link>
					<Link to="/listagem">
						<a>LISTA DE USUÁRIOS</a>
					</Link>
				</Footer>
			</Containner>
		</>
	)
}

export default Cadastro
