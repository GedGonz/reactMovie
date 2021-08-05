import axios from "axios";

const uri='https://api.themoviedb.org/3/';
const api = axios.create();


export function get(path){
        return api.get(`${uri}${path}`,{
            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThkNmFjZjQ3YTAzNjFmNzU3OThjMDlhNGJkODFjYyIsInN1YiI6IjYxMGExMzc3ZTYxZTZkMDA1ZjE5MTNlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRazajZH467xwxemEmYTQ-6Z07frQF83ABEI8cf9__Y',
                'Content-Type':'application/json;charset=utf-8'
            }
        });
}