import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Shop from "../pages/Shop";


import { UserProvider } from "../components/Context/UserContext";
import { FilterProvider } from "../components/Context/FilterContext";
import { ProductProvider } from "../components/Context/ProductContext";

function App() {
	return (
		<Router>
			<UserProvider>
				<ProductProvider>
					<FilterProvider>
						<Header />
						<Switch>
							<Route exact path="/" component={Shop} />
						</Switch>
					</FilterProvider>
				</ProductProvider>
			</UserProvider>
		</Router>
	);
}

export default App;