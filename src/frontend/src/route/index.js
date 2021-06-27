import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import HomePage from "../page/HomePage";
import SplashRoute from "../component/animation/splashRoute";
import Login from "../page/Login";
import Register from "../page/Register";

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>
                <Route exact path="/">
                    <SplashRoute key="/">
                     <HomePage/>
                    </SplashRoute>
                </Route>

                <Route exact path="/login">
                    <SplashRoute key="/login">
                     <Login/>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                     <Register/>
                    </SplashRoute>
                </Route>
            </AnimatePresence>
        </Router>
    )
}