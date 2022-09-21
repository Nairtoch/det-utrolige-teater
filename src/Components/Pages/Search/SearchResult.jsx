// component props

// no {} around the thing you import means it's a default import
import axios from "axios";
// {} around the thing you import means it's a "named import"
import { useEffect, useState } from "react";

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
            <p>Found {searchData.num_items} items under <i>{props.keyword}</i></p>
            {searchData.items && searchData.items.map(item => {
                return (
                    <div key={item.id}>{item.id}. {item.name}</div>
                )
            })}
        </>
    )
}

export { SearchResult }