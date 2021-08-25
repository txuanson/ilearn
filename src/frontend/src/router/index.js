import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
import ViewSection from "../pages/Section/ViewSection";
import Admin from "../pages/Admin/Admin";
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

                <Route path="/admin">
                    <SplashRoute key="/admin">
                        <Admin />
                    </SplashRoute>
                </Route>

                <Route path="/section/61266b24f77d707b9db4af87/6126705d99d0ff7e42a91e4d">
                    <SplashRoute key="/section/61266b24f77d707b9db4af87/6126705d99d0ff7e42a91e4d">
                        <ViewSection 
                        course_id="61266b24f77d707b9db4af87"
                        section_id="6126705d99d0ff7e42a91e4d"/>
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