"use client"
import { useEffect, useState, useRef } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/categorySlice";
import { logout } from "../store/authSlice";

function Navbar() {
  const categories = [
    "Trending",
    "Fiction",
    "Non-fiction",
    "Academic",
    "Comics",
    "Novels",
    "Biographies",
    "Children's Books",
    "Science Fiction",
    "Fantasy",
    "Self-help",
    "Mystery",
    "Romance",
    "Thriller",
    "Poetry",
    "Graphic Novels",
    "Historical Fiction",
    "Cookbooks",
  ]
  const [search, setsearch] = useState(" ")
  const [allowsearch, setallowsearch] = useState(false)
  const [navopt, setnavopt] = useState(false)
  const [showCategories, setShowCategories] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shouldScrollToMenu, setShouldScrollToMenu] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(useSelector((state) => state.auth.isAuthenticated))
   const dispatch = useDispatch();

  useEffect(() => {
    if (shouldScrollToMenu && location.pathname === "/") {
      const timer = setTimeout(() => {
        scrollToMenuWithRetry()
        setShouldScrollToMenu(false)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [location.pathname, shouldScrollToMenu])

  const scrollToMenuWithRetry = (attempts = 0) => {
    const maxAttempts = 10
    const menuElement = document.getElementById('menu')
    
    if (menuElement) {
      menuElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else if (attempts < maxAttempts) {
      setTimeout(() => scrollToMenuWithRetry(attempts + 1), 100)
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    dispatch(
      logout({
        name : null,
        token : null,
        email: null
      })
    )
    setIsLoggedIn(false);

  };

  const searchbook = (evt) => {
    if (evt.key === "Enter") {
      dispatch(setCategory(search));
      
      if (location.pathname !== "/") {
        setShouldScrollToMenu(true)
        navigate("/")
      } else {
        setTimeout(() => scrollToMenuWithRetry(), 200)
      }
    }
  }

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    
    if (location.pathname !== "/") {
      setShouldScrollToMenu(true)
      navigate("/")
    } else {
      setTimeout(() => scrollToMenuWithRetry(), 200)
    }
  }

  // Handle scroll events to show/hide category section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setShowCategories(false);
      } else {
        setShowCategories(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setnavopt(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="w-screen top-0 fixed pt-2 px-2 z-40 bg-black bg-opacity-50 text-white">
      <div className="flex justify-between items-center pb-1">
        <div className="flex gap-7">
          <Link to="/">
            <h1 className="text-2xl cursor-pointer font-Playfair">BookCircle</h1>
          </Link>
          <div className="relative hidden sm:block">
            <Search color="#000000" className="absolute left-1 top-1" />
            <input
              type="text"
              placeholder="Search"
              className="border border-black w-96 bg-zinc-200 pl-8 py-1 placeholder:text-black text-black placeholder:text-lg outline-none"
              onChange={(e) => setsearch(e.target.value)}
              onKeyDown={searchbook}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <img
            src="/images/search.png"
            alt="Seach icon"
            className="h-6 sm:hidden cursor-pointer"
            onClick={() => setallowsearch((prev) => !prev)}
          />
          <NavLink to="/cart">
            <img src="/images/cart.png" alt="Cart icon" className="h-6 sm:h-8 cursor-pointer" />
          </NavLink>
          <div ref={dropdownRef}>
            <img
              src="/images/pfp.jpg"
              alt="Profile picture"
              className="h-6 sm:h-8 cursor-pointer rounded-full"
              onClick={() => setnavopt((prev) => !prev)}
            />
            <div
              className={`w-48 absolute bg-white right-0 top-[38px] shadow-sm shadow-gray-700 rounded-md text-black py-1 text-lg ${navopt ? "" : "hidden"}`}
            >
              <ul>
                {!isLoggedIn && (
                  <NavLink to="/login">
                    <li className="border-gray-500 py-2 hover:bg-gray-200 px-2">Login</li>
                  </NavLink>
                )}
                <NavLink to={isLoggedIn? "/profile" :"/login"}>
                  <li  className="border-gray-500 py-2 hover:bg-gray-200 px-2">Profile</li>
                </NavLink>
                <li className="py-2 hover:bg-gray-200 border-gray-500 px-2">Contact</li>
                <li className="py-2 hover:bg-gray-200 border-gray-500 px-2">Settings</li>
                {isLoggedIn && (
                  <li
                    className="py-2 hover:bg-gray-200 px-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showCategories ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex overflow-x-auto gap-4 no-scrollbar pb-2 font-light">
          {categories.map((category, index) => (
            <li
              key={index}
              className="h-max whitespace-nowrap hover:underline cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Search"
        className={`sm:hidden border border-black w-11/12 ml-3 bg-zinc-200 px-2 py-1 placeholder:text-black text-black placeholder:text-lg outline-none ${allowsearch ? "block" : "hidden"}`}
        onChange={(e) => setsearch(e.target.value)}
        onKeyDown={searchbook}
      />
    </nav>
  )
}

export default Navbar