import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCategory } from './Context/Category';

const Menu = () => {
  const apiKey = import.meta.env.VITE_BOOK;
  const { category } = useCategory();
  const [data, setData] = useState([]);
  const [indexCount, setIndexCount] = useState(40);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMainBooks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40&startIndex=0&key=${apiKey}`
      );
      if (res.data.items) {
        setData(res.data.items);
        console.log(res.data.items)
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to load books");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40&startIndex=${indexCount}&key=${apiKey}`
      );
      if (res.data.items) {
        setData(prevData => [...prevData, ...res.data.items]);
        setIndexCount(prev => prev + 40);
        console.log("loaded more data")
      }
    } catch (error) {
      console.error("Load more error:", error);
      setError("Failed to load more books");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMainBooks();
    setIndexCount(40);
  }, [category]);

  if (error) {
    return (
      <div className="min-h-screen pt-5 px-3 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main id="menu" className="min-h-screen pt-5 px-3 grid3:px-6 pb-5">
      <div className="grid grid-cols-2 grid2:grid-cols-3 grid3:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 grid3:gap-5 lg:grid-cols-7">
        {data.map((item) => {
          const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
          const randomPrice = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
          const rating = (Math.random() * (5 - 3) + 3).toFixed(1);

          if (thumbnail) {
            return (
              <div
                key={item.id}
                className="border-2 flex flex-col items-center justify-center h-max py-2 cursor-pointer hover:bg-gray-200"
              >
                <div className="h-[160.71px] w-[100px] md:w-[106px] md:h-[170.71px] lg:h-[176.71px] lg:w-[120px]">
                  <img
                    src={thumbnail}
                    alt={`Cover of ${item.volumeInfo.title}`}
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="flex flex-col items-center w-full pt-2">
                  <h3 className="w-11/12 text-sm truncate">
                    {item.volumeInfo.title}
                  </h3>
                  <div className="flex justify-between w-11/12 text-xs">
                    <div>{randomPrice} Rs</div>
                    <div className="flex gap-1">
                      {rating}
                      <img src="/images/star.png" alt="rating star" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex w-full justify-center">
        <button
          className="border border-black p-3 hover:bg-black hover:text-white hover:rounded-2xl mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      </div>
    </main>
  );
};

export default Menu;