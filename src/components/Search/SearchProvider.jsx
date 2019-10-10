import React from 'react';

export const SearchContext = React.createContext();

export function SearchProvider(props) {
  const [searchResults, setSearchResults] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const value = {
    searchResults,
    setSearchResults,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return <SearchContext.Provider value={value} {...props} />;
}
