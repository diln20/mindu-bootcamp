import React from 'react'
import Gif from 'components/Gif/Gif'
import useSingleGif from 'Hooks/useSingleGif.js'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'
import useSEO from 'Hooks/useSEO'

export default function Detail({ params }) {
    const { gif,isLoading,isError } = useSingleGif({id:params.id})
    const title = gif ? gif.title : ''
    useSEO({description: `Detail of ${title}`,title:title})


    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Redirect to='404'/>
    if(!gif) return null

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}