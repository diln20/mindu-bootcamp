
import React,{useCallback,useRef,useEffect} from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner";
import {useGifs}  from "Hooks/useGifs";
import useNearScreen from "Hooks/useNearScreen";
import debounce from 'just-debounce-it'


export default function SearchResults({params}){
    const {keyword}=params
    const {loading,gifs,setPage}=useGifs({keyword})
    const externalRef=useRef()
    
    const {isNearScreen}= useNearScreen({
        externalRef:loading?null:externalRef
        ,once:false
    })
// eslint-disable-next-line
    const debounceHandleNextPage = useCallback(debounce(
        ()=>setPage(prevPage=>prevPage+1),200
    ),[setPage])


    useEffect(function(){
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage,isNearScreen])
    return <>
        {
            loading?
            <Spinner/>:
            <>
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs}/>
                    <div id="visor" ref={externalRef}> </div>
            </>
        }
        </>
}
