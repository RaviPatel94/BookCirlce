"use client"

import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import {
  FiBook,
  FiCalendar,
  FiUser,
  FiBookmark,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"
import { useCategory } from "./Context/Category"

const BookDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setcategory } = useCategory()
  const [book, setBook] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const recommendationsRef = useRef(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        setBook(res.data.volumeInfo)

        // Fetch recommendations based on categories/genre if available
        if (res.data.volumeInfo.categories && res.data.volumeInfo.categories.length > 0) {
          const category = res.data.volumeInfo.categories[0]
          const recommendationsRes = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=10`,
          )

          // Filter out the current book from recommendations
          const filteredRecommendations = recommendationsRes.data.items.filter((item) => item.id !== id)
          setRecommendations(filteredRecommendations)

          // Check if we need to show the right arrow initially
          setTimeout(() => {
            checkArrowVisibility()
          }, 500)
        }
      } catch (error) {
        console.error("Fetch error:", error)
        setError("Failed to load book details")
      } finally {
        setLoading(false)
      }
    }

    fetchBook()

    // Add scroll event listener to the recommendations container
    const checkScroll = () => {
      checkArrowVisibility()
    }

    if (recommendationsRef.current) {
      recommendationsRef.current.addEventListener("scroll", checkScroll)
    }

    return () => {
      if (recommendationsRef.current) {
        recommendationsRef.current.removeEventListener("scroll", checkScroll)
      }
    }
  }, [id])

  // Function to check if arrows should be visible
  const checkArrowVisibility = () => {
    if (recommendationsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = recommendationsRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Function to scroll recommendations
  const scrollRecommendations = (direction) => {
    if (recommendationsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      recommendationsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })

      // Update arrow visibility after scrolling
      setTimeout(() => {
        checkArrowVisibility()
      }, 500)
    }
  }

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent }
  }

  // Function to add to cart
  const addToCart = () => {
    // Implement your cart logic here
    alert(`${book.title} added to cart!`)
  }

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setcategory(category)
    navigate("/") // Navigate to menu page
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 pt-16">
        <div className="bg-red-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600">Loading book details...</p>
        </div>
      </div>
    )
  }

  // Generate random price for book (since Google Books API doesn't always provide price)
  const randomPrice = Math.floor(Math.random() * (999 - 199 + 1)) + 199

  // Generate random rating if not available
  const rating = book.averageRating || Math.floor(Math.random() * 5) + 1

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 overflow-hidden rounded-lg shadow-lg">
                  {book.imageLinks?.thumbnail ? (
                    <img
                      src={book.imageLinks.thumbnail.replace("http:", "https:") || "/placeholder.svg"}
                      alt={`Cover of ${book.title}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <FiBook className="text-gray-400 text-5xl" />
                    </div>
                  )}
                </div>
                {book.categories && (
                  <span
                    className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded cursor-pointer hover:bg-primary/90"
                    onClick={() => handleCategoryClick(book.categories[0])}
                  >
                    {book.categories[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
                  {book.subtitle && <p className="text-lg text-gray-600 mb-4">{book.subtitle}</p>}

                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {book.ratingsCount ? `(${book.ratingsCount} reviews)` : "(No reviews yet)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FiUser className="text-gray-500 mr-2" />
                      <span className="text-sm">
                        <span className="font-medium">Author: </span>
                        {book.authors?.join(", ") || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="text-gray-500 mr-2" />
                      <span className="text-sm">
                        <span className="font-medium">Published: </span>
                        {book.publishedDate || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiBookmark className="text-gray-500 mr-2" />
                      <span className="text-sm">
                        <span className="font-medium">Publisher: </span>
                        {book.publisher || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiBook className="text-gray-500 mr-2" />
                      <span className="text-sm">
                        <span className="font-medium">Pages: </span>
                        {book.pageCount || "Unknown"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <button
                      className=" border-gray-300 hover:bg-gray-50 text-black py-2 px-6 rounded-lg flex items-center justify-center"
                      onClick={addToCart}
                    >
                      <FiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 py-2 px-6 rounded-lg flex items-center justify-center">
                      <FiHeart className="mr-2" />
                      Add to Wishlist
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 py-2 px-6 rounded-lg flex items-center justify-center sm:ml-auto">
                      <FiShare2 className="mr-2" />
                      Share
                    </button>
                  </div>

                  <div className="text-2xl font-bold text-primary">₹{randomPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          {book.description ? (
            <div className="prose max-w-none" dangerouslySetInnerHTML={createMarkup(book.description)} />
          ) : (
            <p className="text-gray-500 italic">No description available for this book.</p>
          )}
        </div>
      </div>

      {/* Recommendations Section */}
      {recommendations.length > 0 && (
        <div className="container mx-auto px-4 py-8 relative">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>

          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="absolute left-4 top-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              onClick={() => scrollRecommendations("left")}
              aria-label="Scroll left"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="absolute right-4 top-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              onClick={() => scrollRecommendations("right")}
              aria-label="Scroll right"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Recommendations Container */}
          <div
            ref={recommendationsRef}
            className="flex overflow-x-auto gap-4 pb-4 no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {recommendations.map((item) => {
              const thumbnail = item.volumeInfo.imageLinks?.thumbnail?.replace("http:", "https:") || "/placeholder.svg"
              const bookRating = item.volumeInfo.averageRating || Math.floor(Math.random() * 5) + 1
              const bookPrice = Math.floor(Math.random() * (999 - 199 + 1)) + 199

              return (
                <div
                  key={item.id}
                  className="group relative border-2 min-w-[160px] max-w-[160px] h-[240px] overflow-hidden flex flex-col items-center justify-center py-2 hover:py-0 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate(`/book/${item.id}`)}
                >
                  <div className="h-[160.71px] w-[100px] md:w-[106px] md:h-[170.71px] lg:h-[176.71px] lg:w-[120px] group-hover:h-full group-hover:w-full">
                    <img
                      src={thumbnail || "/placeholder.svg"}
                      alt={`Cover of ${item.volumeInfo.title}`}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="flex group-hover:absolute group-hover:bottom-0 group-hover:text-white group-hover:bg-black group-hover:bg-opacity-50 flex-col items-center w-full pt-2">
                    <h3 className="w-11/12 text-sm truncate">{item.volumeInfo.title}</h3>
                    <div className="flex justify-between w-11/12 text-xs">
                      <div>{bookPrice} Rs</div>
                      <div className="flex gap-1">
                        {bookRating}
                        <img src="/images/star.png" alt="rating star" className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default BookDetail

