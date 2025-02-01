import React from 'react';

function Help() {
  return (
    <div id="help" className="flex flex-col gap-8 items-start w-10/12 md:w-9/12 pb-6">
      <h2 className="text-3xl">Frequently asked questions</h2>
      <div className="flex flex-col gap-3 items-center w-full text-lg font-light">
        <details className="border hover:bg-gray-100 border-gray-300 shadow-md w-full py-3 flex flex-col items-start px-9 transition-all duration-300">
          <summary className="cursor-pointer w-full flex justify-between">
            <div>Can I trust the sellers?</div>
            <div className="text-gray-500">&#9660;</div>
          </summary>
          <p className="text-base">Yes, all the sellers are verified by us and you can trust them.</p>
        </details>
        <details className="border hover:bg-gray-100 border-gray-300 shadow-md w-full py-3 flex flex-col items-start px-9 transition-all duration-300">
          <summary className="cursor-pointer w-full flex justify-between">
            <div>In how many days will I receive my order?</div>
            <div className="text-gray-500">&#9660;</div>
          </summary>
          <p className="text-base">Delivery is done in 5-7 days on average.</p>
        </details>
        <details className="border hover:bg-gray-100 border-gray-300 shadow-md w-full py-3 flex flex-col items-start px-9 transition-all duration-300">
          <summary className="cursor-pointer w-full flex justify-between">
            <div>What price should I set for my book?</div>
            <div className="text-gray-500">&#9660;</div>
          </summary>
          <p className="text-base">Full price if new book, around 75% if second hand, and 50% if third hand.</p>
        </details>
        <details className="border hover:bg-gray-100 border-gray-300 shadow-md w-full py-3 flex flex-col items-start px-9 transition-all duration-300">
          <summary className="cursor-pointer w-full flex justify-between">
            <div>Can this be delivered in my country?</div>
            <div className="text-gray-500">&#9660;</div>
          </summary>
          <p className="text-base">Our service is available in 130 countries. Refer to this list: <span className="text-blue-500 cursor-pointer underline">countries</span></p>
        </details>
        <div className="border hover:bg-gray-100 border-gray-300 shadow-md w-full py-3 px-9 cursor-pointer transition-all duration-300">Other</div>
      </div>
    </div>
  );
}

export default Help;