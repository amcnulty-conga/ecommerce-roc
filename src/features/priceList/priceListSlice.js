import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUEST_HEADERS } from '../../util/helpers';

export const loadPriceLists = createAsyncThunk(
  'priceLists/loadPriceLists',
  async (payload, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    const response = await axios.get(
      'https://rlp-dev.congacloud.io/api/admin/v1/price-lists?limit=30',
      {
        headers: REQUEST_HEADERS,
        cancelToken: source.token
      }
    );
    return { data: response.data, headers: response.headers };
  }
);

const priceListsSlice = createSlice({
  name: 'priceLists',
  initialState: { list: [], selectedPriceListId: '5ca57058-361b-479b-a4d3-399a7faf23da' },
  reducers: {
    selectedPriceListIdChanged: (state, action) => {
      state.selectedPriceListId = action.payload;
    }
  },
  extraReducers: {
    [loadPriceLists.pending]: (state, action) => {
      state.list = [];
    },
    [loadPriceLists.fulfilled]: (state, action) => {
      state.list = action.payload.data;
    },
    [loadPriceLists.rejected]: (state, action) => {
      state.list = [];
    },
  }
});

export const { selectedPriceListIdChanged } = priceListsSlice.actions;

export const selectPriceLists = (state) => state.priceLists.list;
export const selectSelectedPriceListId = (state) => state.priceLists.selectedPriceListId;

export default priceListsSlice.reducer;
