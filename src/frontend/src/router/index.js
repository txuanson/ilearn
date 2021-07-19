import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>

                <Route path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <Dashboard />
                    </SplashRoute>
                </Route>

                <Route exact path="/login">
                    <SplashRoute key="/login">
                     <Login></Login>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                     <Register></Register>
                    </SplashRoute>
                </Route>
            </AnimatePresence>  
        </Router>
    )
}