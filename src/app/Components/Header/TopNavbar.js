import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";

function CustomNavbar() {
  const isUserSignedIn = !!localStorage.getItem('token');
  const [loading, setLoading] = useState(true); // State to manage loading state
  const user = useSelector(state => state.auth.user);
  const username = user ? user.username : "Loading..."; // Display "Loading..." only when user data is not available
  console.log("Is user signed in:", isUserSignedIn);
  console.log("User data:", user);

  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories())
      .then(() => setLoading(false)) // Set loading state to false when user data is fetched
      .catch(() => setLoading(false)); // Set loading state to false even if there's an error fetching user data
  }, [dispatch]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          {isUserSignedIn && !loading ? username : "Shop Now"} {/* Display username only when user data is available and loading state is false */}
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isUserSignedIn ? (
              <>
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
              </>
            ) : (
              <>
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
                <NavLink to={"/register"} className="nav-link">
                  Signup
                </NavLink>
              </>
            )}
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => (
                  <Link
                    to={`/category/${c}`}
                    className="text-capitalize dropdown-item"
                    key={index}
                  >
                    {c}
                  </Link>
                ))}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
