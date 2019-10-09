import React from 'react';

export const SearchContext = React.createContext();

export function SearchProvider(props) {
  const [query, setQuery] = React.useState();
  const [searchResults, setSearchResults] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const search = searchTerm => {
    setIsLoading(true);
    fetch(
      `${process.env.GATSBY_API_PROTOCOL}${process.env.GATSBY_API_URL}/wp-json/wp/v2/posts?search=${searchTerm}`
    )
      .then(res => res.json())
      .then(
        result => {
          setSearchResults(result.items);
          setIsLoading(false);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoading(false);
          setError(error);
        }
      );
  };

  const value = {
    query,
    setQuery,
    searchResults,
    isLoading,
    error,
    search,
  };

  return <SearchContext.Provider value={value} {...props} />;
}
