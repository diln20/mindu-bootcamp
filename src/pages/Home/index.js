import React  from "react";
import {useLocation} from "wouter";
import {useCallback} from 'react'
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "Hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import {Helmet} from 'react-helmet'

export default function Home() {
    //eslint-disable-next-line
    const [path, pushLocation] = useLocation()
    //eslint-disable-next-line
    const { loading, gifs } = useGifs()

    const handleSubmit =useCallback(({keyword}) => {
        // navegar a otra ruta
       pushLocation(`/search/${keyword}`)
    },[pushLocation])

    return (
        <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
          <SearchForm onSubmit={handleSubmit}/>           
          <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div className="App-category">
                 <TrendingSearches/>
                </div>
            </div>
        </>
    )
}