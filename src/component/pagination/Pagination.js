import React from "react";
import "./pagination.css";

const Pagination = ({ postperpage, totalpost, paginate }) => {
  const num = [];
  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    num.push(i);
  }
  return (
    <div >
      <ul className="pages">
        {num.map((pagenum) => (
          <li className="page-links" key={pagenum}>
            <a onClick={()=> paginate(pagenum)} href="#">{pagenum}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
