// no {} around the thing you import means it's a default import
import axios from "axios";
// {} around the thing you import means it's a "named import"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

// Function component
const Search = () => {
    // Defines values for our useState hook
    const [keyword, setKeyword] = useState('')
    // Defines values for our useForm hook
    const { register, handleSubmit } = useForm();

    // Another function component with parameters (data)
    const getSearchResult = data => {
        setKeyword(data.keyword);
    }

    // We return a form
    return (
        // <> is not a mistake, it's a react fragment
        <>
            {/* A function that takes another function as an argument */}
            <form onSubmit={handleSubmit(getSearchResult)} className="SearchField">
                <div className="SearchField">
                    {/* This is the searchbar, when you type in it it'll register what you typed, the keyword */}
                    <input type="text" id="keyword" {...register("keyword", { required: true })} placeholder="Indtast søgeord" />
                    <button className="SearchButton"><FaSearch /></button>
                </div>
            </form>
            {/* If keyword is true then it'll find a result */}
            {keyword && (
                <SearchResult keyword={keyword} />
            )}
        </>
    )
}

const SearchResult = props => {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/detutroligeteater/events/search/${props.keyword}`)
            setSearchData(result.data)
        }
        getData();
    }, [props.keyword, setSearchData])

    return (
        <>
            <div className="SearchResult">
                <h3>Fandt {searchData.count} resultater under <i>{props.keyword}</i></h3>
                {searchData.items && searchData.items.map(items => {
                    return (
                        <div key={items.id}>
                            <h4>{items.title}</h4>
                            <p>{items.description.substring(0, 400)}...</p>
                            <button><Link to={`/events/${items.id}`}>LÆS MERE</Link></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Search, SearchResult }