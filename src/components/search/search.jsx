import React from 'react';

/*
  <script>
  (function() {
    var cx = '011161646831758772574:-nua5i_nu3i';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
*/

function makeSearch(params) {
  return {
    __html: `<script>
  (function() {
    var cx = '011161646831758772574:-nua5i_nu3i';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>`,
  };
}

export default function SearchBar() {
  return (
    // <div id="search" dangerouslySetInnerHTML={makeSearch()} />
    <form
      method="get"
      title="Search Form"
      action="https://cse.google.com/cse/publicurl"
    >
      <div>
        <input
          type="text"
          id="q"
          name="q"
          title="Search this site"
          alt="Search Text"
          maxlength="256"
        />
        <input
          type="hidden"
          id="cx"
          name="cx"
          value="011161646831758772574:-nua5i_nu3i"
        />
        <input
          type="image"
          id="searchSubmit"
          name="submit"
          src="https://www.flaticon.com/free-icon/active-search-symbol_34148"
          alt="Search"
          title="Submit Search Query"
        />
      </div>
    </form>
  );
}
