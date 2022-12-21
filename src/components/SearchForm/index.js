import React,{useState,useCallback} from "react";
import css from "./SearchForm.module.css"
import { useLocation } from "wouter";

function SearchForm({onSubmit}) {

    const [keyword,setKeyword]=useState("");

    const [path, pushLocation] = useLocation()


    const handleChange = evt => {
        evt.preventDefault()
        setKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        onSubmit({keyword})
    }



    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input className={css["c-search-input"]} placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        </form>
    )
}



export default React.memo(SearchForm)