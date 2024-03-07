import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function ExactHostel() {
    const [searchParams] = useSearchParams();
    const [hostelData, setHostelData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const id = searchParams.get("id");

    async function getDataByID() {
        try {
            setIsLoading(true); // Set loading to true before the fetch
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setHostelData(data);
        } catch (error) {
            console.log(error.message);
            // Handle errors gracefully, e.g., display an error message
        } finally {
            setIsLoading(false); // Always set loading back to false
        }
    }


    useEffect(() => {
        getDataByID();
    }, []);

    return (
        <div className='w-full h-h93 bg-primaryWhite text-black flex justify-center items-center'>
            <div className='w-10/12 h-96 bg-gray-400'>
            {isLoading ? (
                <p>Loading hostel data...</p>
            ) : hostelData ? (
                // Display hostel details (name, description, image, etc.) here using hostelData
                <div>
                    <h1>{hostelData.title}</h1> 
                    <p>{hostelData.description}</p>
                    {/* ... other details */} 
                </div>
            ) : (
                <p>Something went wrong!</p> // Or a more descriptive error message
            )}
            </div>
        </div>
    );
}

export default ExactHostel;
