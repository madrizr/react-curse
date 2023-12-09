import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export function GifGrid({ category }) {

    const { images, isLoading } = useFetchGifs( category )

    console.log({ images, isLoading })
  
    return (
        <>
            <h3>{ category }</h3>
            <div>
                {
                    isLoading && ( <h2>Cargando.... </h2> )
                }
            </div>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                        key={ image.id }
                        { ...image }
                        />
                    ))
                }
            </div>
            
        </>
    )
}
