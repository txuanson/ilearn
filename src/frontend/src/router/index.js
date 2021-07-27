import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";
import TutorDashBoard from "../pages/TutorDashboard/TutorDashboard";
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

                <Route path="/">
                    <SplashRoute key="/">
                        <RegularRoute />
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                     <Register></Register>
                     </SplashRoute>
                </Route>

                <Route path="/coursedescription">
                    <SplashRoute key="/coursedescription">
                     <CourseDescription
                     name = "Welcome to our website"
                     category = "Category"
                     cover ="/logo512.png"
                     public = {false}
                     text = "Brief description about the course. Brief description about the course."
                     content ="## 📖 About this class"
                     />
                    </SplashRoute>
                </Route> 
            <Route exact path="/">
                <SplashRoute key="/">
                    <HomePage />
                </SplashRoute>
            </Route>

            <Route exact path="/dashboard">
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

            <Route exact  path="/coursedescription">
                <SplashRoute key="/coursedescription">
                    <CourseDescription
                    name = "Welcome to our website"
                    category = "Category"
                    cover ="/default-class-cover.png"
                    public = {false}
                    text = "Brief description about the course. Brief description about the course."
                    content ="## 📖 About this class"
                    />
                </SplashRoute>
            </Route>

            </Switch>
        </Router>
    )
}