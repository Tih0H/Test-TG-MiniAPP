import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import styles from "./Styles/Tape.css";
import Tape from "./Pages/Tape";
import Pagewebsocket from "./Pages/Pagewebsocket";
import Weather from "./Pages/Weather";

function App() {
	return (
		<>
			<div className='App'>
				<NavLink className={styles.nav_link} to='/'>
					лента
				</NavLink>
				<NavLink className={styles.nav_link} to='/websocket'>
					websocket
				</NavLink>
				<NavLink className={styles.nav_link} to='/weather'>
					погода
				</NavLink>
			</div>
			<Routes>
				<Route path='/' element={<Tape />} />
				<Route path='/websocket' element={<Pagewebsocket />} />
				<Route path='/weather' element={<Weather />} />
			</Routes>
		</>
	);
}

export default App;
