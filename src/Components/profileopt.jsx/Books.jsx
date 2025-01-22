import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

function Books() {
    const [editing, setEditing] = useState(false)
    const [pick, setPick] = useState("401/B ABC nagar, 123456, kak city, india")
    const [editPick, setEditPick] = useState(false)
    const [image, setImage] = useState("/images/pfp.jpg")
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        currency: '₹',
        quantity: '',
        description: '',
        image: '/images/pfp.jpg'
    })
    const [books, setBooks] = useState([
        {
            id: 1,
            cover: "/images/book3.jpg",
            title: "Wonder worm",
            author: "Saurabh Patel",
            price: "490",
            currency: "₹",
            quantity: 1,
            orders: 2,
            date: "26/12/2024"
        },
        {
            id: 2,
            cover: "/images/book4.jpg",
            title: "Grace the heart of the fire",
            author: "Peterwattson",
            price: "360",
            currency: "₹",
            quantity: 4,
            orders: 3,
            date: "20/12/2024"
        },
        {
            id: 3,
            cover: "/images/book5.jpg",
            title: "Nutrition and you with readings",
            author: "Dr Khushi Mishra",
            price: "620",
            currency: "₹",
            quantity: 2,
            orders: 4,
            date: "02/12/2024"
        }
    ])

    const editingPick = (e) => {
        e.preventDefault()
        setEditPick((prev) => !prev)
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setImage(imageUrl)
            setFormData(prev => ({...prev, image: imageUrl}))
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleAddBook = (e) => {
        e.preventDefault()
        if (!formData.title || !formData.author || !formData.price || !formData.quantity) {
            alert('Please fill in all required fields')
            return
        }

        const newBook = {
            id: books.length + 1,
            cover: formData.image,
            title: formData.title,
            author: formData.author,
            price: formData.price,
            currency: formData.currency,
            quantity: parseInt(formData.quantity),
            orders: 0,
            date: new Date().toLocaleDateString()
        }

        setBooks(prev => [...prev, newBook])
        setEditing(false)
        setFormData({
            title: '',
            author: '',
            price: '',
            currency: '₹',
            quantity: '',
            description: '',
            image: '/images/pfp.jpg'
        })
        setImage('/images/pfp.jpg')
    }

    const handleDeleteBook = (id) => {
        setBooks(prev => prev.filter(book => book.id !== id))
    }

    return (
        <div id='mybooks' className='w-full flex flex-col items-center justify-center'>
            <div className='px-2 grid3:px-4 lg:w-11/12 flex flex-col items-start'>
                <div className='flex w-full justify-between'>
                    <h1 className='text-2xl lg:text-3xl mb-4'>Your Books</h1>
                    <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max'
                        onClick={() => setEditing((prev) => !prev)}
                    >Add Book</button>
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
                                />
                            </div>

                            <div className='flex grid3:hidden flex-col sm:flex-row gap-3 h-max'>
                                <img src={image} className='h-28 w-20 object-fill' />
                                <div className=''>
                                    <p>Click and Upload a picture of book cover.</p>
                                    <input type="file" accept='image/*' className='bg-slate-100 w-40' onChange={handleFile} />
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
                                    />
                                    <select 
                                        name="currency" 
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className='cursor-pointer outline-none'
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
                                />
                                <button 
                                    type="button"
                                    className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max' 
                                    onClick={editingPick}
                                >{editPick ? "Save" : "Edit"}</button>
                            </div>
                            <div className='flex grid2:flex-row flex-col gap-1 rounded-md'>
                                <label htmlFor="description" className='whitespace-nowrap'>Description : </label>
                                <textarea 
                                    name="description" 
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className='px-1 bg-slate-200 outline-none w-64 lg:w-96 h-20' 
                                    placeholder='Information about the book'
                                ></textarea>
                            </div>
                        </div>
                        <div className='hidden grid3:flex flex-col sm:flex-row gap-3 h-max'>
                            <img src={image} className='h-28 w-20 object-fill' />
                            <div className='w-40 flex flex-col justify-between'>
                                <p>Click and Upload a picture of book cover.</p>
                                <input type="file" accept='image/*' className='bg-slate-100 w-40' onChange={handleFile} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='bg-blue-500 mx-auto px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 w-max h-max'>
                        Add
                    </button>
                </form>

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
                            <tr key={book.id} className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                                <td className='w-3/12'><img src={book.cover} className='h-20 lg:h-24 mx-auto' alt="" /></td>
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
                                <td className='h-full w-full hidden grid3:table-cell'>{book.date}</td>
                                <td className='py-6 hidden grid3:table-cell'>{book.orders}</td>
                                <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                                    <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                                        <Trash2 
                                            className='size-5 lg:size-6 cursor-pointer' 
                                            onClick={() => handleDeleteBook(book.id)}
                                        />
                                        <div className='grid3:hidden block'>{book.quantity}</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Books