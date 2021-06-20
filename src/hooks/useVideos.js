import { useEffect, useState } from "react";
import youtube from '../api/youtube'
const useVideos = () =>{
    const [videos, setVideos] = useState([]);

    const search = async (val) => {
        const response = await youtube.get('/search', {
            params: {
                q: val
            }
        })
        setVideos(response.data.items);
    }
    
    useEffect(()=>{
        search('')
    }, [])

    return [videos, search]
}

export default useVideos;