import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState ={
    MoviesData:  [],
    loading : false,
    error: null


}

const fetchMoviesData = createAsyncThunk(
    'MoviesData/fetcheData',
    async ()=> {
        const API = import.meta.env.VITE_MOVIES_APP_API
        let res =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
        let data = await res.json();
        return data.results
    }
)

const MovieDataSlicer =  createSlice({
    name:"Movies",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMoviesData.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchMoviesData.fulfilled,(state,action)=>{
            state.loading =  false
            state.MoviesData = action.payload;
            
        })
        builder.addCase(fetchMoviesData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message  
        })
    }
})

const {} =  MovieDataSlicer.actions
export {fetchMoviesData}
export default MovieDataSlicer.reducer