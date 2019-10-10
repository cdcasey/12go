import React from 'react';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import { SearchContext } from '../components/Search/SearchProvider';

const SearchResultsPage = ({ data }) => {
  const {
    isLoading,
    setIsLoading,
    searchResults,
    setSearchResults,
    error,
    setError,
  } = React.useContext(SearchContext);

  const term = new URLSearchParams(window.location.search).get('term');

  React.useEffect(() => {
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
            setSearchResults(result);
            setError(null);
            setIsLoading(false);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            setError(error);
            setIsLoading(false);
          }
        );
    };

    search(term);
  }, [term, setIsLoading, setSearchResults, setError]);

  if (isLoading) {
    return (
      <Layout>
        <div>Harvesting results...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>ERROR {error.toString()}</div>
      </Layout>
    );
  }

  if (!searchResults) {
    return (
      <Layout>
        <div>Enter a search in the search bar above.</div>
      </Layout>
    );
  }

  if (searchResults.length === 0) {
    return (
      <Layout>
        <div>
          Sorry. Nothing grew in your garden. Please try another search.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        {searchResults.map(result => {
          // const bgUrl = result.featured_media
          //   ? result.featured_media.localFile.childImageSharp.fixed.src
          //   : '';
          return (
            <PreviewLink
              // path={result.path.rendered}
              slug={result.slug.rendered}
              title={result.title.rendered}
              date={result.date.rendered}
              excerpt={result.excerpt.rendered}
              // bgUrl={bgUrl}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default SearchResultsPage;
