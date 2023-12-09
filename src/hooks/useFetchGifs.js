import { useEffect, useState } from "react";
import { getGif } from "../services/getGifs.service";

export default function useFetchGifs( category ) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )
    
    const getImages = async() => {
        const listGifs = await getGif(category);
        setImages( listGifs )
        setIsLoading( false )
    }

    useEffect( () => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}
