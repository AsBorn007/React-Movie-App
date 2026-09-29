import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMoviesData } from "../Redux/Slicers/MoviesSlicer"
import MediaCard from "../Component/MovieCard"

const MoviesCollection = () => {

    const state = useSelector(
        state => state.MoviesReducer.MoviesData
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMoviesData())
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-full max-w-7xl p-4">

            {state.map((moviObj) => (
                <MediaCard
                    key={moviObj?.id}
                    itemDetails={moviObj}
                />
            ))}

        </div>
    )
}

export default MoviesCollection