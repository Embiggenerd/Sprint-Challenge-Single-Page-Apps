import React, { useState } from "react";

export default function SearchForm({setQuery, query}) {
 
  const handleChange = event => setQuery(event.target.value)

  return (
    <section className="search-form">
     <form className="search">
        <input
          type="text"
          onChange={handleChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}
