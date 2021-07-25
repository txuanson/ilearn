import Header from "../components/header/Header";
import { auth } from "../utils/auth";
function HomeLayout({ children }) {
  return (
    <div>
      <Header user={auth()}></Header>
      <div className="relative">{children}</div>
    </div>
  );
}

export default HomeLayout;
