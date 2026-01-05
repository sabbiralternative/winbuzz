import RecentEvent from "./RecentEvent";
import NavMiddleMenu from "./NavMiddleMenu";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <header>
      <TopNav />
      <RecentEvent />
      <NavMiddleMenu />
    </header>
  );
};

export default Navbar;
