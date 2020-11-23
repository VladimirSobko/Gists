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
  const [allPostsLength] = useState(200);
  const dispatch = useDispatch();

  
  useEffect(() => {   
    dispatch(getGists( { page: currentPage, inPage: postsPerPagePagination, since : date ? new Date(date) : "" }));
  }, [date,currentPage]);

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
          <Grid  container justify="center" spacing={2}>
            { gists.map((gist) => (
              <Grid key={gist.id} item>
                <Gist data={gist} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Pagination postsPerPagePagination={postsPerPagePagination} totalPosts={allPostsLength} paginate={paginate}/>
    </div>
    </>
  );
};
