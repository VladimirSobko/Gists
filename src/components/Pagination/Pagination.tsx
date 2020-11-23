import { Divider } from '@material-ui/core';
import React, { useState } from 'react';

export default function Pagination({postsPerPagePagination, totalPage, paginate}) {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalPage/postsPerPagePagination);i++){
    pageNumbers.push(i)
  }
  return (
   <div>
     <nav>
       <ul style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
         {pageNumbers.map(number => (
           <li style={{padding: "5px", margin:"10px", listStyleType: "none", fontSize: "large"}} key={number}> 
             <a onClick={() => paginate(number)} href="#!">
               {number}
             </a>
           </li>
         ))}
       </ul>
     </nav>
   </div>
  )
}
