import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import HomePage from "../page/HomePage";
import SplashRoute from "../component/animation/splashRoute";
import Login from "../page/Login";
import DashBoard from "../page/DashBoard";
import AuthenZoom from "../page/AuthZoom";
import Register from "../page/Register";
import CourseDescription from "../page/CourseDescription";

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
                <Route exact path="/connect-zoom">
                    <SplashRoute key="/connect-zoom">
                     <AuthenZoom/>
                    </SplashRoute>
                </Route>

                <Route exact path="/description">
                    <SplashRoute key="/description">
                        <CourseDescription
                        cover = "/img/default-class-cover.png"
                        name ="Welcome to AI"
                        text = "First approach - brief introduction"
                        category = "Programming"
                        type = "Public"
                        content = "## ***This is markdown content***"
                        />
                    </SplashRoute>
                </Route>
                <Route exact path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <DashBoard />
                    </SplashRoute>
                </Route>
            </AnimatePresence>  
        </Router>
    )
}