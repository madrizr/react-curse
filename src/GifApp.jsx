import { useState } from "react"
import { GifGrid, AddCategory  } from "./components" // Llama directamente al archivo index.js de la carpeta

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return
        setCategories([newCategory, ...categories])
    }
    
    return (
        <>
            <h1>Gif App</h1>

            <AddCategory 
                // setCategory = { setCategories }
                onNewCategory={ value => onAddCategory( value ) }
            />

            { 
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={ category }
                    />
                ))
            }
        </>
    )
}