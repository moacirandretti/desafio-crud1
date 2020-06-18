import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Listagem from "./pages/Listagem"

const Routes = () => {
	return (
		<>
			<Switch>
				<Route component={Login} exact path="/" />
				<Route component={Cadastro} path="/cadastro" />
				<Route component={Listagem} path="/listagem" />
			</Switch>
		</>
	)
}

export default Routes
