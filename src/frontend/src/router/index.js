import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard";
import ListCourse from "../pages/ListCourse";

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>
                <Route path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <Dashboard />
                    </SplashRoute>
                </Route>
                <Route path="/listcourse">
                    <SplashRoute key="/listcourse">
                     <ListCourse />
                    </SplashRoute>
                </Route>
            </AnimatePresence>  
        </Router>
    )
}