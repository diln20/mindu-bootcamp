import React from 'react'
import Gif from 'components/Gif/Gif'
import useGlobalGif from 'Hooks/useGlobalGif'

export default function Detail({ params }) {
    const gifs = useGlobalGif()

    const gif = gifs.find(singleGif =>
        singleGif.id === params.id
    )

    console.log(gif)

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}