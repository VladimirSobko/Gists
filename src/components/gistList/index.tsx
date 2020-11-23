import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/Store';
import { Gist } from '../gist';
import { getGists } from '../../redux/thunks/gists/getGists';
import CircularProgress from "@material-ui/core/CircularProgress";


export interface GistListProps {}
export const GistList: React.FC<GistListProps> = () => {
  const dispatch = useDispatch();
  const { isLoading, gists, date } = useSelector((state: RootState) => {  
    return state.gists;
  });
  
  useEffect(() => {   
    dispatch(getGists( { page: 3, inPage: 20, since : date ? new Date(date) : "" }));
  }, [date]);

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
    </div>
    </>
  );
};
