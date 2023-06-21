import React from "react";
import "./Pagination.css";

const Pagination = ({ videogamesPerPage, allVideogames, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li key={number}>
                <a onClick={() => pagination(number)}>{number}</a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pagination;
