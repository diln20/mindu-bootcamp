import {useEffect,useState,useContext} from 'react';
import getGifs from '../services/getGifs';
import GifsContext  from '../context/GifsContext';


const INITIAL_PAGE=0

export function useGifs({ keyword } = { keyword: null }) {
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    const [loadingNextPage,setLoadingNextPage]=useState(false)
    const [loading, setLoading] = useState(false)
    const [page,setPage]=useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)
    
    // recuperamos la keyword del localStorage
    

    useEffect(function () {
        setLoading(true)

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs, keywordToUse])

    useEffect(function () {
        if(page===INITIAL_PAGE) return 

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse,page}).then(nextGifs=>{
            setGifs(prevGifs=>prevGifs.concat(nextGifs)
            )
        })
    }, [page, keywordToUse,setGifs])

return {loading,gifs,setPage,loadingNextPage}
}


