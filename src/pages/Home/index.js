import React  from "react";
import {useLocation} from "wouter";
import {useState} from 'react'
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "Hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";


export default function Home() {
    const [keyword, setKeyword] = useState('')
    // eslint-disable-next-line
    const [path, pushLocation] = useLocation()
    // eslint-disable-next-line
    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                 <TrendingSearches>

                 </TrendingSearches>
                </div>
            </div>
        </>
    )
}