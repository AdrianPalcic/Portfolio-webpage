
    function SearchBar ({filter, holder}) {
        return (
            <>
          <input type="text" className="projects searchbar" placeholder={holder} onChange={filter}></input>
                        
        </>
        );
            
    }

    export default SearchBar;