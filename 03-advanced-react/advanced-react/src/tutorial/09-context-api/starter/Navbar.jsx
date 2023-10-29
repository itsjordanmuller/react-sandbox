import { createContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Jordan" });

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logoutUser }}>
      <nav
        className="navbar"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
