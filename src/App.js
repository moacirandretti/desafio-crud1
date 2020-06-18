import React from "react"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import GlobalStyle from "./pages/Styles/global"

const App = () => (
	<>
		<BrowserRouter>
			<Routes />
			<GlobalStyle />
		</BrowserRouter>
	</>
)

export default App
