import { useState } from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL, IMG_URL, LANGUAGE } from '../../api/movielist'

import './styles.css'

import imgShuffle from '../../assets/icons/shuffle.svg'
import posterCoding from '../../assets/Poster.png'
import loadingGIF from '../../assets/loading.gif'

interface Movie {
  poster_path: string
  title: string
  overview: string,
  loading: boolean
}

export function Home(){

  const [movie, setMovie] = useState<Movie>({
    poster_path: '',
    title: '',
    overview: '',
    loading: false
  })

  function resetMovie(): void{
    setMovie({
      poster_path: posterCoding,
      title: 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀',
      overview: ' ',
      loading: false
    })
  }

  function loadingMovie(): void{
    setMovie({
      poster_path: posterCoding,
      title: '',
      overview: '',
      loading: true
    })
  }

  async function fetchTMDBForMoviesInfo(){

    loadingMovie()

    try{

      const RANDOM_MOVIE_ID = Math.floor(Math.random() * (1000 + 1))
      const response = await axios.get(`${BASE_URL}${RANDOM_MOVIE_ID}?${API_KEY}&${LANGUAGE}`)

      if(response.status === 200){
        const data:Movie = response.data
        setMovie({
          poster_path: `${IMG_URL}${data.poster_path}`,
          title: data.title,
          overview: data.overview,
          loading: false
        })
      } else{
        resetMovie()
      }

    } catch(error){
      console.log(error)
      resetMovie()
    }
  }

  return (
    <main>
      <div className="flex">
        <img src={imgShuffle} alt="Shuffle icon" />
        <h1 className='title'>Não sabe o que assistir?</h1>

        {movie.title.length > 0 ?
          <div className='movieInfo'>
            <div>
              <img src={movie.poster_path} alt={`Movie ${movie.title} cover art`}></img>
            </div>
            <div>
              <h1 className='subtitle'>{movie.title || 'Sem título!'}</h1>
              <p className='text'>{movie.overview || 'Filme sem descrição :('}</p>
            </div>

          </div>
          :
          movie.loading ? 
          <img src={loadingGIF} />
          : 
          ""
        }

        <button onClick={fetchTMDBForMoviesInfo}>
          <img src={imgShuffle} alt="Shuffle icon button" /> Encontrar filme
        </button>

        <p className='text info'>
          Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
        </p>
      </div>
    </main>
  )
}