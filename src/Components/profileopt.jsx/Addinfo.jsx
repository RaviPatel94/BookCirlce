import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Addinfo() {
  const [edit, setEdit] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch("https://bookcircleapi.onrender.com/address", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) toast.error("Failed to fetch address");
        return res.json();
      })
      .then((data) => {
        if (data) {
          setAddress1(data.addressLine1 || "");
          setAddress2(data.addressLine2 || "");
          setCity(data.city || "");
          setPostal(data.postalCode || "");
          setCountry(data.country || "");
        }
      })
      .catch((err) => console.error(err));
  }, [token]);

  // Save or update address
  const handleSave = () => {
    if (!token) return;
    fetch("https://bookcircleapi.onrender.com/address", {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addressLine1: address1,
        addressLine2: address2,
        city: city,
        postalCode: postal,
        country: country,
      }),
    })
      .then((res) => {
        if (!res.ok) toast.error("Failed to save address");
        else toast.success("updated data sucessfully")
        return res.json();
      })
      .then((data) => {
        setAddress1(data.addressLine1 || "");
        setAddress2(data.addressLine2 || "");
        setCity(data.city || "");
        setPostal(data.postalCode || "");
        setCountry(data.country || "");
        setEdit(false); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      id="address"
      className="flex h-max justify-between items-center w-10/12 md:w-9/12"
    >
      <div className="flex w-full justify-between h-max items-start">
        <div className="h-full flex justify-center gap-8 md:gap-12 flex-col">
          <div>
            <h1 className="text-2xl lg:text-3xl mb-1">Address Info</h1>
            <p className="bg-slate-200 px-3 py-[2px] rounded-lg w-max text-xs lg:text-sm">
              This Information won't be visible to anyone.
            </p>
          </div>
          <button
            className="bg-blue-500 px-3 py-1 md:hidden rounded-md hover:bg-blue-600 hover:text-gray-100 w-max text-sm lg:text-base"
            onClick={() => (edit ? handleSave() : setEdit(true))}
          >
            {edit ? "Save" : "Edit Address"}
          </button>
          <div className="flex flex-col gap-5 text-base lg:text-lg font-light">
            <div className="w-max">
              Address line 1 :{" "}
              <input
                type="text"
                placeholder="201/C, ABC building"
                value={address1}
                readOnly={!edit}
                onChange={(e) => setAddress1(e.target.value)}
                className={`px-2 outline-none w-max cursor-default ${
                  edit ? "bg-slate-200 rounded-lg cursor-text" : ""
                }`}
              />
            </div>
            <div>
              Address line 2 :{" "}
              <input
                type="text"
                placeholder="xyz nagar"
                value={address2}
                readOnly={!edit}
                onChange={(e) => setAddress2(e.target.value)}
                className={`px-2 outline-none w-max cursor-default ${
                  edit ? "bg-slate-200 rounded-lg cursor-text" : ""
                }`}
              />
            </div>
            <div>
              City :{" "}
              <input
                type="text"
                placeholder="Your city"
                value={city}
                readOnly={!edit}
                onChange={(e) => setCity(e.target.value)}
                className={`px-2 outline-none w-max cursor-default ${
                  edit ? "bg-slate-200 rounded-lg cursor-text" : ""
                }`}
              />
            </div>
            <div>
              Postal code :{" "}
              <input
                type="number"
                placeholder="Your postal"
                value={postal}
                readOnly={!edit}
                onChange={(e) => setPostal(e.target.value)}
                className={`px-2 outline-none w-max cursor-default ${
                  edit ? "bg-slate-200 rounded-lg cursor-text" : ""
                }`}
              />
            </div>
            <div>
              Country :{" "}
              <input
                type="text"
                placeholder="Your Country"
                value={country}
                readOnly={!edit}
                onChange={(e) => setCountry(e.target.value)}
                className={`px-2 outline-none w-max cursor-default ${
                  edit ? "bg-slate-200 rounded-lg cursor-text" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center relative">
          <button
            className="hidden md:block bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100"
            onClick={() => (edit ? handleSave() : setEdit(true))}
          >
            {edit ? "Save" : "Edit Address"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addinfo;
