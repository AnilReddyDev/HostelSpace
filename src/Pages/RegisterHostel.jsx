import React, { useState } from "react";

function RegisterHostel() {
  const [details, setDetails] = useState({
    hostelname: "",
    location: "",
    hosteldes: "",
    accommodationType: "", // Updated field name
    typeOfRooms: {
      "2-sharing": false,
      "3-sharing": false,
      "4-sharing": false,
      "5-sharing": false,
      "6-sharing": false,
    },
    pricing: {
      "2-sharing": "",
      "3-sharing": "",
      "4-sharing": "",
      "5-sharing": "",
      "6-sharing": "",
    },
    facilities: {
      wifi: false,
      hotwater: false,
      lockers: false,
    },
    ownername: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "accommodationType") {
      // Handling accommodationType
      setDetails((prev) => ({
        ...prev,
        accommodationType: value,
      }));
    } else if (name.startsWith("room_")) {
      // Handling typeOfRooms
      const room = name.split("_")[1];
      setDetails((prev) => ({
        ...prev,
        typeOfRooms: {
          ...prev.typeOfRooms,
          [room]: checked,
        },
      }));
    } else if (name.startsWith("pricing_")) {
      // Handling pricing
      const room = name.split("_")[1];
      setDetails((prev) => ({
        ...prev,
        pricing: {
          ...prev.pricing,
          [room]: value,
        },
      }));
    } else if (name.startsWith("facility_")) {
      // Handling typeOfRooms
      const room = name.split("_")[1];
      setDetails((prev) => ({
        ...prev,
        facilities: {
          ...prev.facilities,
          [room]: checked,
        },
      }));
    } else {
      // For other fields
      setDetails((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    // Add your submission logic here
  };

  const roomSharingList = [
    "2-sharing",
    "3-sharing",
    "4-sharing",
    "5-sharing",
    "6-sharing",
  ];
  const facilitiesList = ["wifi", "hotwater", "lockers"];

  return (
    <div className="montserrat-custom text-black w-full pb-20 flex flex-col justify-start gap-5 items-center bg-lightViolet">
      <h1 className="text-xl mt-10 font-semibold ">
        Hostel/PG/Rooms registration form
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white w-7/12 px-5 flex py-8 gap-3 flex-col  rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        <p>Property detail</p>
        <label htmlFor="hostelname">Hostel name</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="hostelname"
          id="hostelname"
        />
        <label htmlFor="location">Location</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="location"
          id="location"
        />
        <label htmlFor="hosteldes">Hostel Description</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="hosteldes"
          id="hosteldes"
        />
        <label htmlFor="accommodationType">Accommodation Type</label>
        <select
          className=" border-b-2 border-black"
          name="accommodationType"
          id="accommodationType"
          onChange={handleChange}
        >
          <option value="">Select Accommodation Type</option>
          <option value="Private Room">Private Room</option>
          <option value="PG Room">PG Room</option>
          <option value="Hostel Room">Hostel Room</option>
        </select>
        <p>type of rooms</p>
        <div className="flex gap-5 flex-wrap">
          {roomSharingList.map((room) => (
            <label key={room} htmlFor={`room_${room}`}>
              <input
                type="checkbox"
                name={`room_${room}`}
                id={`room_${room}`}
                onChange={handleChange}
              />
              {room}
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Pricing</h1>
          {roomSharingList.map((room) => (
            <div key={room}>
              {details.typeOfRooms[room] && (
                <label htmlFor={`pricing_${room}`}>
                  {room}{" "}
                  <input
                    type="text"
                    name={`pricing_${room}`}
                    id={`pricing_${room}`}
                    onChange={handleChange}
                  />
                </label>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1>Facilities</h1>
          {facilitiesList.map((facility) => (
            <div key={facility}>
              <label htmlFor={`facility_${facility}`}>
                <input
                  type="checkbox"
                  name={`facility_${facility}`}
                  id={`facility_${facility}`}
                  onChange={handleChange}
                />
                {facility}
              </label>
            </div>
          ))}
        </div>
        <span className="w-72 h-5"></span>
        <h1 className="text-xl font-semibold text-primaryViolet">
          {" "}
          Owner Details
        </h1>
        <label htmlFor="ownername">Owner Name</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="ownername"
          id="ownername"
        />
        <label htmlFor="email">Email</label>
        <input
          className=" border-b-2 border-black"
          type="email"
          onChange={handleChange}
          name="email"
          id="email"
        />
        <label htmlFor="phone">Phone</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="phone"
          id="phone"
        />
        <label htmlFor="address">Address</label>
        <input
          className=" border-b-2 border-black"
          type="text"
          onChange={handleChange}
          name="address"
          id="address"
        />
        <button
          type="submit"
          className="w-72 mt-5 flex h-10 rounded-full justify-center items-center text-white bg-primaryViolet font-medium"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterHostel;
