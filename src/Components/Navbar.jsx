"use client"

import { useEffect, useState, useRef } from "react"
import { useCategory } from "./Context/Category"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

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
  const { setcategory } = useCategory()
  const [search, setsearch] = useState(" ")
  const [allowsearch, setallowsearch] = useState(false)
  const [navopt, setnavopt] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const searchbook = (evt) => {
    if (evt.key === "Enter") {
      setcategory(search)
      // If not on menu page, navigate to menu page
      if (location.pathname !== "/") {
        navigate("/")
      }
    }
  }

  const handleCategoryClick = (category) => {
    setcategory(category)
    if (location.pathname !== "/") {
      navigate("/")
    }
  }

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
                <NavLink to="/login">
                  <li className="border-gray-500 py-2 hover:bg-gray-200 px-2">Login</li>
                </NavLink>
                <NavLink to="/profile">
                  <li className="border-gray-500 py-2 hover:bg-gray-200 px-2">Profile</li>
                </NavLink>
                <li className="py-2 hover:bg-gray-200 border-gray-500 px-2">Contact</li>
                <li className="py-2 hover:bg-gray-200 border-gray-500 px-2">Settings</li>
                <li className="py-2 hover:bg-gray-200 px-2">Signout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
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

