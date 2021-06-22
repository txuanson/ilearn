import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import HomePage from "../page/HomePage";
import SplashRoute from "../component/animation/splashRoute";
import Login from "../page/Login";

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
            </AnimatePresence>
        </Router>
    )
}