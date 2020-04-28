import React from "react";
import "./pagination.css";
import { Link } from "react-router-dom";


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
            <Link onClick={()=> paginate(pagenum)} to={"/movie/?page/="+ pagenum}>{pagenum}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
