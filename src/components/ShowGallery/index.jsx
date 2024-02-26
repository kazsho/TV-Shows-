import React, { useEffect, useState } from 'react'
import {GalleryImage} from '../'
import { Link } from 'react-router-dom'

const showGallery = () => {
    const [shows, setShows] = useState([])

  useEffect(() => {
    const displayShows = async () => {
        const response = await fetch("https://api.tvmaze.com/shows")
        const data = await response.json()
        setShows(data)
    }

    displayShows()
  }, [])

  return (
  <div className='shows'>
    {shows.map(show => (
        <Link to={`/shows/${show.id}`}>
        <GalleryImage show={show} key={show.id} />
        </Link>
        
    ))}
    </div>
  )
}

export default showGallery
