import React, { useEffect, useState } from "react"
import axios from "axios"
import { FaTrash } from "react-icons/fa"
import toast from "react-hot-toast"

function Cart() {
  const [cartItems, setCartItems] = useState([])

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await axios.get("https://bookcircleapi.onrender.com/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setCartItems(res.data)
    } catch (error) {
      console.error("Error fetching cart:", error)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  // remove handler
  const handleRemove = async (bookId) => {
    try {
      const token = localStorage.getItem("token")
      await axios.delete(`https://bookcircleapi.onrender.com/cart/remove/${bookId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      toast.success("Item removed from cart")
      setCartItems((prev) => prev.filter((item) => item.bookId !== bookId))
    } catch (error) {
      console.error("Error removing item:", error)
      toast.error("Failed to remove item")
    }
  }

  function getDateFiveDaysAhead() {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 5)
    return currentDate.toISOString().split("T")[0]
  }

  // Corrected calculations with 5% discount
  const totalMrp = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const discountPercent = 5
  const discountAmount = Math.round((totalMrp * discountPercent) / 100)
  const subtotal = totalMrp - discountAmount
  const shipping = 15
  const finalPrice = subtotal + shipping

  return (
    <div className="pt-20 w-full px-3 sm:px-5 flex flex-col lg:flex-row lg:justify-between min-h-screen gap-4 lg:gap-6">
      {/* Cart Items Table - Mobile Optimized */}
      <div className="lg:w-[65%] overflow-x-auto">
        {/* Mobile Card View */}
        <div className="block sm:hidden space-y-4">
          {cartItems.map((item) => (
            <div key={item.id || item.bookId} className="border border-gray-300 rounded-lg p-4 bg-white">
              <div className="flex gap-3">
                <img src={item.imageUrl} alt="Book Cover" className="h-24 w-auto flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-gray-600 mb-2">By: {item.author}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Price:</span>
                      <span className="text-sm font-medium">{item.price}rs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Qty:</span>
                      <input
                        type="number"
                        defaultValue={item.quantity}
                        className="w-12 text-xs outline-none border border-gray-300 rounded px-1 py-1"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Delivery:</span>
                      <span className="text-xs">{getDateFiveDaysAhead()}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.bookId)}
                  className="text-red-600 hover:text-red-800 transition flex-shrink-0"
                >
                  <FaTrash size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <table className="table-auto w-full h-max hidden sm:table">
          <thead className="font-Playfair">
            <tr className="border-b border-black text-sm lg:text-lg">
              <th className="text-left px-2 lg:px-4 py-2 font-light">Book</th>
              <th className="text-left px-2 lg:px-4 py-2 font-light">Info</th>
              <th className="text-left px-2 lg:px-4 py-2 font-light">Price</th>
              <th className="text-left px-2 lg:px-4 py-2 font-light">Qty</th>
              <th className="text-left px-2 lg:px-4 py-2 font-light hidden md:table-cell">Delivery by</th>
              <th className="text-center px-2 lg:px-4 py-2 font-light">Remove</th>
            </tr>
          </thead>
          <tbody className="h-full">
            {cartItems.map((item) => (
              <tr key={item.id || item.bookId} className="border-b border-black h-full">
                <td className="px-2 lg:px-4 py-2">
                  <img src={item.imageUrl} alt="Book Cover" className="h-20 sm:h-28 lg:h-32 w-auto" />
                </td>
                <td className="px-2 lg:px-4 py-2">
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base font-light">{item.title}</p>
                    <h3 className="text-xs text-gray-600">By: {item.author}</h3>
                  </div>
                </td>
                <td className="px-2 lg:px-4 py-2 text-sm lg:text-lg">{item.price}rs</td>
                <td className="px-2 lg:px-4 py-2">
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    className="text-black placeholder:text-black w-12 sm:w-16 outline-none text-sm lg:text-lg px-1 py-1 hover:bg-gray-200 border border-gray-300 rounded"
                  />
                </td>
                <td className="px-2 lg:px-4 py-2 text-sm lg:text-lg whitespace-nowrap hidden md:table-cell">
                  {getDateFiveDaysAhead()}
                </td>
                <td className="px-2 lg:px-4 py-2 text-center">
                  <button
                    onClick={() => handleRemove(item.bookId)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary - Mobile Optimized */}
      <div className="lg:w-4/12 h-max px-4 py-4 border rounded-xl border-slate-400">
        <p className="text-2xl lg:text-3xl mb-4">Order detail</p>
        
        <table className="border-separate border-spacing-1 text-sm lg:text-base mb-3 font-light w-full">
          <tbody>
            <tr>
              <td>Total MRP:</td>
              <td className="text-end">{totalMrp}rs</td>
            </tr>
            <tr>
              <td>Discount ({discountPercent}%):</td>
              <td className="text-end text-green-600">-{discountAmount}rs</td>
            </tr>
            <tr>
              <td>Subtotal:</td>
              <td className="text-end">{subtotal}rs</td>
            </tr>
          </tbody>
        </table>
        
        <hr className="border-1 border-black mb-3" />
        
        <button className="mb-3 text-sm lg:text-base text-green-600 border px-3 py-2 rounded-lg border-green-600 hover:text-white hover:bg-green-600 transition-all duration-150 w-full sm:w-auto">
          Apply coupons
        </button>
        
        <hr className="border-1 border-black mb-3" />
        
        <p className="text-sm pt-3 mb-2">Other charges</p>
        
        <div className="font-light flex flex-col py-2 gap-1 mb-3">
          <label htmlFor="address" className="text-sm">Address:</label>
          <textarea
            name="address"
            rows="2"
            className="outline-none bg-gray-200 px-2 py-2 rounded-md text-sm resize-none"
            defaultValue="401/B XYZ building, abc city, 123456, India"
          />
        </div>
        
        <table className="w-full mb-3">
          <tbody>
            <tr className="w-full">
              <td className="text-sm lg:text-base font-light">Shipping charges:</td>
              <td className="text-sm lg:text-base text-end font-light">{shipping}rs</td>
            </tr>
          </tbody>
        </table>
        
        <hr className="border-1 border-black mb-3" />
        
        <table className="w-full">
          <tbody>
            <tr className="w-full text-lg font-medium">
              <td className="pt-3">Final Price:</td>
              <td className="text-end pt-3">{finalPrice}rs</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="mt-4 w-full px-4 py-3 rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer transition-all duration-200 text-center text-sm lg:text-base">
                  Proceed to payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart