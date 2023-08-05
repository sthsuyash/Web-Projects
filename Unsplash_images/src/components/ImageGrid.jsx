import { useState, useEffect } from 'react';

export default function ImageGrid({ searchTerm }) {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 4;

    useEffect(() => {
        fetchImages();
    }, [searchTerm, page]);

    const fetchImages = async () => {
        try {
            if (searchTerm) {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos/?query=${searchTerm}&page=${page}&per_page=${perPage}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
                );
                const data = await response.json();
                if (page === 1) {
                    setImages(data.results);
                } else {
                    setImages((prevImages) => [...prevImages, ...data.results]);
                }
            } else {
                setImages([]);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <>
            <div className="-m-1 flex flex-wrap md:-m-2">
                {images.map((image) => (
                    <div key={image.id} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
                        <img
                            src={image.urls.small}
                            alt={image.alt_description}
                            className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {/* You can also check if there are more pages to fetch */}
                {images.length >= perPage && (
                    <button onClick={handleNextPage} className="m-2 px-4 py-2 border rounded-lg">
                        Generate More
                    </button>
                )}
            </div>
        </>
    );
}
