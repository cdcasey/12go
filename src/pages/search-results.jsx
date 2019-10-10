import React from 'react';

import Layout from '../components/Layout/Layout';
import PreviewLink from '../components/PreviewLink/PreviewLink';
import { SearchContext } from '../components/Search/SearchProvider';

const SearchResultsPage = ({ data }) => {
  const { isLoading, searchResults, error, search } = React.useContext(
    SearchContext
  );

  const term = new URLSearchParams(window.location.search).get('term');

  React.useEffect(() => {
    search(term);
  }, [term]);

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
