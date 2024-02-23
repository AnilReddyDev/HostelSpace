import React from 'react'

function Home() {
    return (
        <div className='w-full h-screen  bg-primaryWhite montserrat-custom flex justify-center items-center flex-col'>
            <h1 className='text-black text-5xl font-bold '>Find your perfect Hostel near you</h1>
            <p className='text-black font-normal py-10'>Serach among different hostel,PGs and private rooms as you prefer</p>
            <div className='flex gap-5'>
                <input type="text" name="name" className='h-14 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]' />
                <input type="text" name="name1" className='h-14 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]' />
                <input type="text" name="name2" className='h-14 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]' />
                <button type="button" className='h-14 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-20 bg-primaryViolet flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 font-bold">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>

                </button>
            </div>
        </div>

    )
}

export default Home