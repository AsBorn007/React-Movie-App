import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMoviesData } from "../Redux/Slicers/MoviesSlicer"
import MediaCard from "../Component/MovieCard"


const MoviesCollection = () => {
    const state = useSelector(state=>state.MoviesReducer.MoviesData)
    console.log(state)
    const dispatch  =  useDispatch()

    useEffect(()=>{
        dispatch(fetchMoviesData())
    },[])
  return (
    <>
<div  className="grid grid-cols-3 gap-4 mx-auto w-[80rem] p-4">
    {state.map((moviObj) => (

    <MediaCard
        key={moviObj?.id}
        itemDetails={moviObj}
    />

))}
    </div>
    </>

  )
}

export default MoviesCollection
