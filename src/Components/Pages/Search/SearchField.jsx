// {} around the thing you import means it's a "named import"
import { useState } from "react";
import { useForm } from "react-hook-form"

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
            <form onSubmit={handleSubmit(getSearchResult)}>
                <div className="SearchField">
                    {/* This is the searchbar, when you type in it it'll register what you typed, the keyword */}
                    <input type="text" id="keyword" {...register("keyword", { required: true })} placeholder="Indtast søgeord" />
                    <button className="SearchButton">Søg</button>
                </div>
            </form>
            {/* If keyword is true then it'll find a result */}
            {keyword && (
                <SearchResult keyword={keyword} />
            )}
        </>
    )
}

export { Search }