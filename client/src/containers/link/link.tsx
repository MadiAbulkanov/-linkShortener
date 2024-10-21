import { Typography, Grid, Button, Box, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { createLink } from '@/features/links/links.slice';

export function Link() {
  const dispatch = useAppDispatch();
  const { shortUrl, originUrl } = useAppSelector((state) => {
    return state.links;
  });

  const [inputUrl, setInputUrl] = useState('');

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createLink(inputUrl));
    setInputUrl('');
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputUrl(value);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="column" justifyContent="space-between" alignItems="center">
        <Grid item sx={{ mt: 7 }}>
          <Typography variant="h4">Shorten your link!</Typography>
        </Grid>
        <Grid item>
          <Box component={"form"} autoComplete="off" onSubmit={handelSubmit} paddingY={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="link"
                  label="link"
                  value={inputUrl}
                  onChange={inputChangeHandler}
                  name="link"
                  style={{ width: "500px" }}
                />
              </Grid>
              <Grid item xs>
                <Button type="submit" color="primary" variant="contained" sx={{ margin: "0 auto", display: "block" }}> 
                  Shorten!
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container item direction="row" spacing={4} justifyContent="center">
        {shortUrl && (
          <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ m: 2 }}>Your link now looks like this: </Typography>
            <a href={originUrl} >http://localhost:8000/{shortUrl}</a>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
