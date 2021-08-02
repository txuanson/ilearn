import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
import ViewSection from "../pages/Section/ViewSection";
import RegularRoute from "./regular";

export default function MyRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/tutor">
                    <SplashRoute key="/tutor">
                        <TutorDashBoard />
                    </SplashRoute>
                </Route>

                <Route path="/view-section/1">
                    <SplashRoute key="/view-section/1">
                        <ViewSection />
                    </SplashRoute>
                </Route>

                <Route path="/">
                    <SplashRoute key="/">
                        <RegularRoute />
                    </SplashRoute>
                </Route>

                
            </Switch>
        </Router>
    )
}