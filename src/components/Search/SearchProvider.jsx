import React from 'react';

export const SearchContext = React.createContext();

export function SearchProvider(props) {
  const [searchResults, setSearchResults] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const search = query => {
    const searchURL = `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/posts?search=${query}`;
    setIsLoading(true);
    setError(null);
    fetch(searchURL)
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          console.log('SEARCH results NOW');
          console.log(result);
          setSearchResults(result);
          setError(null);
          setIsLoading(false);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log('SEARCH error NOW');
          console.log(error);

          setError(error);
          setIsLoading(false);
        }
      );
  };

  const value = {
    searchResults,
    isLoading,
    error,
    search,
  };

  return <SearchContext.Provider value={value} {...props} />;
}
