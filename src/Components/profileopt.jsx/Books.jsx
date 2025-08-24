import { Trash2 } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Books() {
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [pick, setPick] = useState("401/B ABC nagar, 123456, kak city, india")
    const [editPick, setEditPick] = useState(false)
    const [image, setImage] = useState("/images/bookcover.png")
    const [uploadingImage, setUploadingImage] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        currency: '₹',
        quantity: '',
        description: '',
        coverImageUrl: '/images/bookcover.png'
    })
    const [books, setBooks] = useState([])

    // API Base URL - adjust according to your backend
    const API_BASE_URL = 'https://bookcircleapi.onrender.com'

    // Get JWT token from localStorage
    const getAuthToken = () => {
        return localStorage.getItem('token')
    }

    // Axios instance with auth header
    const apiClient = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    // Add auth token to requests
    apiClient.interceptors.request.use((config) => {
        const token = getAuthToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })

    // Fetch books from API
    const fetchBooks = async () => {
        try {
            setLoading(true)
            const response = await apiClient.get('/your-books')
            setBooks(response.data)
        } catch (error) {
            console.error('Error fetching books:', error)
        } finally {
            setLoading(false)
        }
    }

    // Load books on component mount
    useEffect(() => {
        fetchBooks()
    }, [])

    const editingPick = (e) => {
        e.preventDefault()
        setEditPick((prev) => !prev)
    }

    const handleFile = async (e) => {
        const file = e.target.files[0]
        if (file) {
            // Validate file
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file')
                return
            }

            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                alert('File size should be less than 5MB')
                return
            }

            try {
                setUploadingImage(true)
                
                // Create FormData for file upload
                const formData = new FormData()
                formData.append('file', file)

                // Upload to API
                const response = await apiClient.post('/your-books/upload-cover', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })

                const imageUrl = response.data.coverImageUrl
                setImage(imageUrl)
                setFormData(prev => ({...prev, coverImageUrl: imageUrl}))
            } catch (error) {
                console.error('Error uploading image:', error)
                alert('Failed to upload image. Please try again.')
            } finally {
                setUploadingImage(false)
            }
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleAddBook = async (e) => {
        e.preventDefault()
        
        // Validation
        if (!formData.title || !formData.author || !formData.price || !formData.quantity) {
            alert('Please fill in all required fields')
            return
        }

        if (parseFloat(formData.price) <= 0) {
            alert('Price must be greater than 0')
            return
        }

        if (parseInt(formData.quantity) <= 0) {
            alert('Quantity must be greater than 0')
            return
        }

        try {
            setSubmitting(true)

            // Prepare request data
            const requestData = {
                title: formData.title.trim(),
                author: formData.author.trim(),
                price: parseFloat(formData.price),
                currency: formData.currency,
                quantity: parseInt(formData.quantity),
                description: formData.description.trim(),
                coverImageUrl: formData.coverImageUrl,
                pickupAddress: pick.trim()
            }

            // Send to API
            const response = await apiClient.post('/your-books', requestData)
            
            // Add new book to state
            setBooks(prev => [response.data, ...prev])
            
            // Reset form
            setEditing(false)
            setFormData({
                title: '',
                author: '',
                price: '',
                currency: '₹',
                quantity: '',
                description: '',
                coverImageUrl: '/images/bookcover.png'
            })
            setImage('/images/bookcover.png')
            
            alert('Book added successfully!')
        } catch (error) {
            console.error('Error adding book:', error)
            if (error.response?.status === 400) {
                alert('Please check all required fields and try again.')
            } else {
                alert('Failed to add book. Please try again.')
            }
        } finally {
            setSubmitting(false)
        }
    }

    const handleDeleteBook = async (id) => {
        if (!confirm('Are you sure you want to delete this book?')) {
            return
        }

        try {
            await apiClient.delete(`/your-books/${id}`)
            setBooks(prev => prev.filter(book => book.id !== id))
            alert('Book deleted successfully!')
        } catch (error) {
            console.error('Error deleting book:', error)
            alert('Failed to delete book. Please try again.')
        }
    }

    if (loading) {
        return (
            <div id='mybooks' className='w-11/12 flex flex-col items-center justify-center'>
                <div className='px-2 grid3:px-4 lg:w-11/12 flex flex-col items-center'>
                    <h1 className='text-2xl lg:text-3xl mb-4'>Your Books</h1>
                    <div className='text-center py-8'>Loading your books...</div>
                </div>
            </div>
        )
    }

    return (
        <div id='mybooks' className='w-11/12 flex flex-col items-center justify-center'>
            <div className='px-2 grid3:px-4 lg:w-11/12 flex flex-col items-start'>
                <div className='flex w-full justify-between'>
                    <h1 className='text-2xl lg:text-3xl mb-4'>Your Books</h1>
                    <button 
                        className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max disabled:opacity-50'
                        onClick={() => setEditing((prev) => !prev)}
                        disabled={submitting}
                    >
                        {editing ? 'Cancel' : 'Add Book'}
                    </button>
                </div>

                <form onSubmit={handleAddBook} className={`py-6 flex flex-col gap-4 w-full ${editing ? "" : "hidden"}`}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col items-start gap-6 text-base lg:text-lg'>
                            <div>
                                <label htmlFor="title">Title : </label>
                                <input 
                                    type="text" 
                                    name='title' 
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className='bg-slate-200 outline-none px-1 rounded-md' 
                                    disabled={submitting}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="author">Author : </label>
                                <input 
                                    type="text" 
                                    name='author'
                                    value={formData.author}
                                    onChange={handleInputChange}
                                    className='bg-slate-200 outline-none px-1 rounded-md' 
                                    disabled={submitting}
                                    required
                                />
                            </div>

                            <div className='flex grid3:hidden flex-col sm:flex-row gap-3 h-max'>
                                <img src={image} className='h-28 w-20 object-fill' alt="Book cover preview" />
                                <div className=''>
                                    <p>Click and Upload a picture of book cover.</p>
                                    <input 
                                        type="file" 
                                        accept='image/*' 
                                        className='bg-slate-100 w-40' 
                                        onChange={handleFile} 
                                        disabled={uploadingImage || submitting}
                                    />
                                    {uploadingImage && <p className='text-sm text-blue-600'>Uploading...</p>}
                                </div>
                            </div>

                            <div className='flex gap-2 grid2:gap-10 w-full'>
                                <div>
                                    <label htmlFor="price">Price : </label>
                                    <input 
                                        type="number" 
                                        name='price'
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        className='bg-slate-200 outline-none px-1 rounded-md w-20' 
                                        min="0.01"
                                        step="0.01"
                                        disabled={submitting}
                                        required
                                    />
                                    <select 
                                        name="currency" 
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className='cursor-pointer outline-none'
                                        disabled={submitting}
                                    >
                                        <option value="₹">₹</option>
                                        <option value="$">$</option>
                                        <option value="€">€</option>
                                        <option value="£">£</option>
                                        <option value="¥">¥</option>
                                        <option value="₩">₩</option>
                                        <option value="₦">₦</option>
                                        <option value="₽">₽</option>
                                        <option value="₪">₪</option>
                                        <option value="֏">֏</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="quantity">Quantity : </label>
                                    <input 
                                        type="number" 
                                        name='quantity'
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        className='bg-slate-200 outline-none px-1 rounded-md w-10' 
                                        min="1"
                                        disabled={submitting}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="padd">Pick up address : </label>
                                <input 
                                    type="text" 
                                    name='padd' 
                                    value={pick} 
                                    className={`lg:w-[275px] outline-none truncate px-1 py-[2px] rounded-md ${editPick ? "bg-slate-200" : ""}`} 
                                    onChange={(e) => setPick(e.target.value)} 
                                    readOnly={!editPick} 
                                    disabled={submitting}
                                />
                                <button 
                                    type="button"
                                    className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max disabled:opacity-50 ml-2' 
                                    onClick={editingPick}
                                    disabled={submitting}
                                >
                                    {editPick ? "Save" : "Edit"}
                                </button>
                            </div>
                            <div className='flex grid2:flex-row flex-col gap-1 rounded-md'>
                                <label htmlFor="description" className='whitespace-nowrap'>Description : </label>
                                <textarea 
                                    name="description" 
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className='px-1 bg-slate-200 outline-none w-64 lg:w-96 h-20' 
                                    placeholder='Information about the book'
                                    disabled={submitting}
                                ></textarea>
                            </div>
                        </div>
                        <div className='hidden grid3:flex flex-col sm:flex-row gap-3 h-max'>
                            <img src={image} className='h-28 w-20 object-fill' alt="Book cover preview" />
                            <div className='w-40 flex flex-col justify-between'>
                                <p>Click and Upload a picture of book cover.</p>
                                <input 
                                    type="file" 
                                    accept='image/*' 
                                    className='bg-slate-100 w-40' 
                                    onChange={handleFile}
                                    disabled={uploadingImage || submitting}
                                />
                                {uploadingImage && <p className='text-sm text-blue-600'>Uploading...</p>}
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className='bg-blue-500 mx-auto px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 w-max h-max disabled:opacity-50'
                        disabled={submitting || uploadingImage}
                    >
                        {submitting ? 'Adding...' : 'Add'}
                    </button>
                </form>

                {books.length === 0 ? (
                    <div className='w-full text-center py-8 text-gray-500'>
                        <p>No books found. Add your first book!</p>
                    </div>
                ) : (
                    <table className='mx-auto w-full grid3:w-[97%] lg:w-[95%] h-max table-fixed text-center border border-black grid3:border-none rounded-xl border-separate border-spacing-y-6 grid3:border-spacing-y-2 font lg:font-normal'>
                        <thead className='hidden grid3:contents border-b border-slate-700 text-sm sm:text-[16px] lg:text-lg'>
                            <tr>
                                <th className='font-medium'>Cover</th>
                                <th className='w-44 lg:w-52 font-medium'>Title</th>
                                <th className='font-medium'>Price</th>
                                <th className='font-medium'>Date</th>
                                <th className='font-medium'>Orders</th>
                                <th className='font-medium'>Remove</th>
                            </tr>
                        </thead>
                        <tbody className='h-full'>
                            {books.map((book) => (
                                <tr key={book.id} className='text-sm sm:text-[16px] lg:text-lg h-full w-full grid3:hover:bg-slate-100'>
                                    <td className='w-3/12'>
                                        <img 
                                            src={book.coverImageUrl || '/images/bookcover.png'} 
                                            className='h-20 lg:h-24 mx-auto' 
                                            alt={book.title}
                                            onError={(e) => {
                                                e.target.src = '/images/bookcover.png'
                                            }}
                                        />
                                    </td>
                                    <td className='w-6/12 h-full py-1'>
                                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                                            <div className='min-w-44 truncate'>{book.title}
                                                <div className='text-sm font-light'>by {book.author}</div>
                                            </div>
                                            <div className='flex w-full grid3:hidden justify-between'>
                                                <div>{book.currency}{book.price}</div>
                                                <div>{book.quantity}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='h-full w-full hidden grid3:table-cell'>{book.currency}{book.price}</td>
                                    <td className='h-full w-full hidden grid3:table-cell'>{book.createdDate}</td>
                                    <td className='py-6 hidden grid3:table-cell'>{book.ordersCount}</td>
                                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                                        <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                                            <Trash2 
                                                className='size-5 lg:size-6 cursor-pointer hover:text-red-600 transition-colors' 
                                                onClick={() => handleDeleteBook(book.id)}
                                            />
                                            <div className='grid3:hidden block'>{book.quantity}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Books