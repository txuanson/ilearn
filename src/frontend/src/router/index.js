import { BrowserRouter as Router, Route } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
import RegularRoute from "./regular";


export default function MyRoute() {
    return(
        <Router>
            <Route path="/tutor">
                <SplashRoute key="/tutor">
                    <TutorDashBoard />
                </SplashRoute>
            </Route>

            <Route  path="/">
                <SplashRoute key="/">
                    <RegularRoute />
                </SplashRoute>
            </Route>
        </Router>
    )
}