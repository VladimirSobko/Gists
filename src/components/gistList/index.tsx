import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/Store';
import { Gist } from '../gist';
import Pagination from '../Pagination/Pagination';
import { getGists } from '../../redux/thunks/gists/getGists';
import CircularProgress from "@material-ui/core/CircularProgress";

export interface GistListProps {}
export const GistList: React.FC<GistListProps> = () => {

  const { isLoading, gists, date } = useSelector((state: RootState) => {  
  return state.gists;
});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPagePagination] = useState(10);
  const [allPostsLength] = useState(gists.length);
  const dispatch = useDispatch();


  const indexOfLastPage = currentPage * allPostsLength; 
  const indexOfFirstPost = indexOfLastPage - allPostsLength;
  const currentPosts = gists.slice(indexOfFirstPost, indexOfLastPage);
  
  useEffect(() => {   
    dispatch(getGists( { page: currentPage, inPage: allPostsLength, since : date ? new Date(date) : "" }));
  }, [date,currentPage ]);

  function paginate(currentPage) {
    console.log(currentPage); 
    setCurrentPage(currentPage)
  }

  return (
    <>
    <div>
      {isLoading ? (
        < CircularProgress/>
      ) : (
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            { gists.map((gist) => (
              <Grid key={gist.id} item>
                <Gist data={gist} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Pagination postsPerPagePagination={postsPerPagePagination} totalPage={gists.length} paginate={paginate}/>
    </div>
    </>
  );
};
