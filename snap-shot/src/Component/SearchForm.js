import React, {useState, useContext} from "react";
import axios from "axios";
import { AppContext } from "../Context/AppContext";

const SearchForm = () => {
    const SetImages = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(
                `https://api.unsplash.com/search/photos/?query=${searchTerm}&client_id=NSd68eNBF34a3uMAd2ogsfS0F9g0Ep2Lfksbr2-BD8s`
            );
            SetImages(response.data.items)
        } catch(error) {
            console.log("Error fetching data", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Search for photos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchForm;