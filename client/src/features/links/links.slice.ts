import { axiosApiClient } from '@/api/axiosApiClient';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  shortUrl: string | null;
  originUrl: string
  error: null | string;
  isLoading: boolean;
}

const initialState: State = {
  shortUrl: null,
  originUrl: '',
  error: null,
  isLoading: false,
};

export const fetchLink = createAsyncThunk('links/fetchLink', async (shortUrl: string) => {
  const response = await axiosApiClient.get(`/links/${shortUrl}`);
  return response.data;
});

export const createLink = createAsyncThunk('links/createLink', async (originUrl: string) => {
  const response = await axiosApiClient.post('/links', { originUrl });
  return { shortUrl: response.data.shortUrl, originUrl };
});

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLink.fulfilled, (state, action) => {
        state.shortUrl = action.payload.shortUrl;
        state.isLoading = false;
      })
      .addCase(fetchLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'error exception in fetchLinks ';
      })
      .addCase(createLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLink.fulfilled, (state, action) => {
        state.shortUrl = action.payload.shortUrl;
        state.originUrl = action.payload.originUrl;
        state.isLoading = false;
      })
      .addCase(createLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'error exception in fetchLinks ';
      });
  },
});

export default linkSlice;
