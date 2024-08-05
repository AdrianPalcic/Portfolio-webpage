
    function SearchBar ({filter}) {
        return (
            <>
          <input type="text" className="projects searchbar" placeholder="Search projects" onChange={filter}></input>
                        
        </>
        );
            
    }

    export default SearchBar;