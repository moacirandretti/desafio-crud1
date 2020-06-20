import React from "react"
import { Link, useHistory } from "react-router-dom"
import { FiLogOut, FiUserPlus } from "react-icons/fi"
import { MdViewList } from "react-icons/md"
import { NavMenu } from "./style"

const Nav = () => {
	const history = useHistory()
	const logout = () => {
		localStorage.clear()
		return history.push("/")
	}

	return (
		<NavMenu>
			<ul>
				<li>
					<Link to="/cadastro">
						<FiUserPlus
							style={{ cursor: "pointer", color: "#d9d9d9" }}
							size={30}
						/>
					</Link>
				</li>
				<li>
					<Link to="/listagem">
						<MdViewList
							style={{ cursor: "pointer", color: "#d9d9d9" }}
							size={35}
						/>
					</Link>
				</li>
				<li>
					<FiLogOut
						style={{ cursor: "pointer", color: "#F07D3C" }}
						size={30}
						onClick={logout}
					/>
				</li>
			</ul>
		</NavMenu>
	)
}

export default Nav
