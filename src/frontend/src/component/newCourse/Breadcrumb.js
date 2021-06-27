import 'bootstrap/dist/css/bootstrap.css';
import classes from "./Breadcrumb.module.css";

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb" className={classes.main}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">iLearn</a></li>
                <li className="breadcrumb-item"><a href="#">List course</a></li>
                <li className="breadcrumb-item active" aria-current="page">New course</li>
            </ol>   
        </nav>
    )
}

export default Breadcrumb;
