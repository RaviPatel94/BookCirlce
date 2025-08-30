import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profileopt() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  // Editable fields
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profilePic, setProfilePic] = useState("/images/pfp.jpg"); // Fixed: consistent naming

  // Read-only info
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token"); // JWT token

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://bookcircleapi.onrender.com/profile", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to load profile");

        const data = await res.json();
        console.log("Profile data:", data); // Debug log

        // Editable
        setFullName(data.fullName || "");
        setPhoneNumber(data.phoneNumber || "");
        setDateOfBirth(data.dateOfBirth || "");
        setProfilePic(data.profilePic || "/images/pfp.jpg"); // Fixed: consistent naming

        // Read-only
        setUsername(data.username || "");
        setEmail(data.email || "");
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  // Handle profile pic change -> upload to backend -> Cloudinary
  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optional: show local preview *instantly*
    setProfilePic(URL.createObjectURL(file)); // Fixed: consistent naming

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://bookcircleapi.onrender.com/profile/upload-picture", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload image");
      const data = await res.json();

      // Use the Cloudinary URL returned by backend
      if (data.url) setProfilePic(data.url); // Fixed: consistent naming
    } catch (err) {
      console.error("Error uploading file:", err);
      // fallback: keep preview or revert if you want
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch("https://bookcircleapi.onrender.com/profile", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          dateOfBirth,
          profilePic,
        }),
      });

      if (!res.ok) toast.error("Failed to update profile");

      const updated = await res.json();
      toast.success("Profile updated successfully!");
      setEdit(false);

      setFullName(updated.fullName || "");
      setPhoneNumber(updated.phoneNumber || "");
      setDateOfBirth(updated.dateOfBirth || "");
      setProfilePic(updated.profilePic || "/images/pfp.jpg"); // Fixed: consistent naming
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Error updating profile");
    }
  };

  return (
    <div id='profile' className='flex h-max pt-14 justify-between items-center w-10/12 md:w-9/12'>
      <div className='flex w-full justify-between h-max items-start'>
        <div className='h-full flex justify-center gap-12 flex-col'>
          <div>
            <h1 className='text-2xl lg:text-3xl mb-1'>Your Profile</h1>
            <p className='bg-slate-200 px-3 py-[2px] rounded-lg w-max text-xs lg:text-sm'>
              !Note : Everyone can see these details on your profile.
            </p>
          </div>

          <div className='z-0 w-max flex flex-col gap-6 text-sm lg:text-base items-center relative grid3:hidden'>
            <button
              className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100'
              onClick={() => edit ? handleSave() : setEdit(true)}
            >
              {edit ? "Save" : "Edit Profile"}
            </button>

            <img 
              src={profilePic} 
              className='size-28 lg:size-32 rounded-full brightness-90' 
              alt="Profile pic"
              onError={(e) => {
                console.log("Image failed to load:", profilePic);
                e.target.src = "/images/pfp.jpg"; // Fallback image
              }}
            />
            <input
              type="file"
              accept='image/*'
              className={`absolute w-max -right-36 top-48 right-0 ${edit ? "" : "hidden"}`}
              onChange={handleFile}
            />
          </div>

          <div className='flex flex-col gap-5 text-base lg:text-lg font-light'>
            <div className='w-max'>
              Username: <input type="text" value={username} readOnly className="px-2 outline-none w-max cursor-default text-black rounded-lg" />
            </div>
            <div>
              Full Name: <input type="text" value={fullName} readOnly={!edit} onChange={e => setFullName(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit ? "bg-slate-200 rounded-lg cursor-text" : ""}`} />
            </div>
            <div>
              Email: <input type="text" value={email} readOnly className="px-2 outline-none w-max cursor-default rounded-lg" />
            </div>
            <div>
              Phone number: <input type="text" value={phoneNumber} readOnly={!edit} onChange={e => setPhoneNumber(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit ? "bg-slate-200 rounded-lg cursor-text" : ""}`} />
            </div>
            <div>
              Date of birth: <input type='date' value={dateOfBirth} readOnly={!edit} onChange={e => setDateOfBirth(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit ? "bg-slate-200 rounded-lg cursor-text" : ""}`} />
            </div>
          </div>
        </div>

        <div className='grid3:flex flex-col gap-6 text-sm lg:text-base items-center relative hidden grid3:block'>
          <button
            className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100'
            onClick={() => edit ? handleSave() : setEdit(true)}
          >
            {edit ? "Save" : "Edit Profile"}
          </button>

          <img 
            src={profilePic} 
            className='size-28 lg:size-32 rounded-full brightness-90' 
            alt="Profile pic"
            onError={(e) => {
              console.log("Image failed to load:", profilePic);
              e.target.src = "/images/pfp.jpg"; // Fallback image
            }}
          />
          <input
            type="file"
            accept='image/*'
            className={`absolute w-max -right-36 top-48 ${edit ? "" : "hidden"}`}
            onChange={handleFile}
          />
        </div>
      </div>
    </div>
  );
}

export default Profileopt;