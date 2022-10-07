    import React from "react"

export default function SearchBar(props) {

    console.log(props)

    const [formData, setFormData] = React.useState({searchTerm: props.searchTerm})
    
    function handleChange(event) {
          setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [event.target.id] : event.target.value
            }
        })
    }

    function getSearchResults(event){
        event.preventDefault()
        props.handleChange(formData.searchTerm)
    }
    
    return (
        <div className="search-bar">
            <form className="form-inline" onSubmit={getSearchResults} >
              <label className="sr-only" htmlFor="searchTerm">Name</label>
                <input 
                    id="searchTerm" 
                    name="searchTerm"
                    type="text" 
                    className="form-control mb-2 mr-sm-2" 
                    placeholder="Search... " 
                    onChange={handleChange}
                />
                <button className="btn btn-primary mb-2" >Search</button>
            </form>
      </div>
    )
}


