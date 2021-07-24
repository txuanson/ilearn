import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard";
<<<<<<< HEAD
import Login from "../pages/Login";
import Register from "../pages/Register";
=======
import CourseDescription from "../pages/CourseDescription";
<<<<<<< HEAD
import CreateNewCourse from "../pages/CreateNewCourse";
import Profile from "../pages/Profile";
=======
>>>>>>> de52ff9b0945b7ee789757c9338e2e47419f0ea6
>>>>>>> parent of a41e529 (header)

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>

                <Route path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <Dashboard />
                    </SplashRoute>
                </Route>
<<<<<<< HEAD

                <Route exact path="/login">
                    <SplashRoute key="/login">
                     <Login></Login>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                     <Register></Register>
<<<<<<< HEAD
                    </SplashRoute>
                </Route> 

=======
=======
>>>>>>> parent of a41e529 (header)
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
>>>>>>> de52ff9b0945b7ee789757c9338e2e47419f0ea6
                    </SplashRoute>
<<<<<<< HEAD
                </Route> 

                <Route exact path="/CreateNewCourse">
                    <SplashRoute key="/CreateNewCourse">
                     <CreateNewCourse/>
                    </SplashRoute>
                </Route>

                <Route exact path="/profile">
                    <SplashRoute key="/profile">
                     <Profile/>
                    </SplashRoute>
                </Route>

=======
                </Route>
            </AnimatePresence>  
>>>>>>> parent of a41e529 (header)
        </Router>
    )
}