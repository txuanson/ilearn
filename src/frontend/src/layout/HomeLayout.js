import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { auth } from "../utils/auth";
function HomeLayout({ children }) {
  return (
    <div>
      <Header user={auth()}></Header>
      <div className="relative">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayout;
