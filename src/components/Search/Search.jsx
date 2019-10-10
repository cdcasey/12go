import React from 'react';
import { navigate } from 'gatsby';

export default function SearchBar() {
  const [query, setQuery] = React.useState();

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/search-results/?term=${query.replace(' ', '+')}`);
  };

  return (
    <form method="get" title="Search Form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="q"
          name="q"
          title="Search this site"
          alt="Search Text"
          placeholder="Search"
          maxlength="256"
          onChange={handleInputChange}
        />
        <input
          style={{ height: 15 }}
          type="image"
          id="searchSubmit"
          name="submit"
          // src="https://www.flaticon.com/free-icon/active-search-symbol_34148"
          src="https://image.flaticon.com/icons/svg/34/34148.svg"
          alt="Go"
          title="Submit Search Query"
        />
      </div>
    </form>
  );
}
