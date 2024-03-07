import React, { useState } from 'react'

function RegisterHostel() {
    const [roomtype,setRoomtype] = useState();
    console.log(roomtype);
    return (
        <div className='montserrat-custom text-black w-full h-h93 flex flex-col justify-start gap-5 items-center bg-lightViolet'>
            <h1 className='text-xl mt-10 font-semibold '>Hostel/PG/Rooms registration form</h1>
            <form action="" className='bg-white w-7/12 px-5 flex py-8 gap-3 flex-col  rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <p>Property detail</p>
                <label htmlFor="hostelname">Hostel name</label>
                <input className=' border-b-2 border-black' type="text" name="hostelname" id="hostelname" />
                <label htmlFor="location">Location</label>
                <input className=' border-b-2 border-black' type="text" name="location" id="location" />
                <label htmlFor="hosteldes">Hostel Description</label>
                <input className=' border-b-2 border-black' type="text" name="hosteldes" id="hosteldes" />
                <label htmlFor="accomadationtype">Accomadation Type</label>
                <select className=' border-b-2 border-black' name="accomadationtype" id="accomadationtype">
                    <option value="1">Private Room</option>
                    <option value="2">PG Room</option>
                    <option value="3">Hostel Room</option>
                </select>
                <p>type of rooms</p>
                <div className='flex gap-5 flex-wrap'>
                    <label htmlFor="2-sharing"> <input type="checkbox" value="2-sharing" onChange={(e)=>setRoomtype(e.target.value)} name="2-sharing" id="2-sharing" /> 2-sharing</label>
                    <label htmlFor="3-sharing"> <input type="checkbox" name="3-sharing" id="3-sharing" /> 3-sharing</label>
                    <label htmlFor="4-sharing"> <input type="checkbox" name="4-sharing" id="4-sharing" /> 4-sharing</label>
                    <label htmlFor="5-sharing"> <input type="checkbox" name="5-sharing" id="5-sharing" /> 5-sharing</label>
                    <label htmlFor="6-sharing"> <input type="checkbox" name="6-sharing" id="6-sharing" /> 6-sharing</label>
                    <label htmlFor="private-sharing"> <input type="checkbox" name="private-sharing" id="private-sharing" /> private-sharing</label>
                </div>
                {/* <div className="flex gap-5 flex-wrap">
                    {["2-sharing", "3-sharing", "4-sharing", "5-sharing", "6-sharing", "private-sharing"].map(
                        (roomType) => (
                            <label key={roomType} htmlFor={roomType}>
                                <input
                                    type="checkbox"
                                    id={roomType}
                                    name={roomType}
                                    value={roomType}
                                    checked={roomType === selectedRoomType} // Bind `checked` to the state
                                    onChange={(e) => setSelectedRoomType(e.target.value)} // Update state on change
                                />
                                {roomType}
                            </label>
                        )
                    )}
                </div> */}
            </form>
        </div>
    )
}

export default RegisterHostel