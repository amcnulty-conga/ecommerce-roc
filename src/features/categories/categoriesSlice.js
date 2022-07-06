import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../shared/baseUrl';
import { REQUEST_HEADERS } from '../../util/helpers';
import { loadProducts } from '../products/productsSlice';

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  add(node) {
    if (this.head) {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  removeLast() {
    if (this.tail.previous) {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  first() {
    return this.head;
  }

  last() {
    return this.tail;
  }
}

class ListNode {
  constructor(category) {
    this.category = category;
    this.next = null;
    this.previous = null;
  }

  getCategory() {
    return this.category;
  }

  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.previous;
  }
}

export const categoriesHistoryList = new LinkedList();

const initialState = {
  selectedCategory: null,
  list: [],
  isLoading: false,
  errorMessage: null
};

export const loadHomeCategories = createAsyncThunk(
  'categories/loadHomeCategories',
  async (payload, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    const response = await axios.get(`${baseUrl}categories?limit=4`, {
      headers: REQUEST_HEADERS,
      cancelToken: source.token
    });
    return { data: response.data, headers: response.headers };
  }
);

export const loadTopCategories = createAsyncThunk(
  'categories/loadTopCategories',
  async (payload, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    const response = await axios.get(
      `${baseUrl}categories?filter=eq(AncestorId:null)&limit=30`,
      {
        headers: REQUEST_HEADERS,
        cancelToken: source.token
      }
    );
    return { data: response.data, headers: response.headers };
  }
);

let promise;

export const loadChildCategories = createAsyncThunk(
  'categories/loadCategories',
  async (category = { Id: null }, { dispatch, signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    if (category) {
      categoriesHistoryList.add(new ListNode(category));
      dispatch(setSelectedCategory(categoriesHistoryList.last().getCategory()));
    }
    const { Id } = category;
    if (promise) promise.abort();
    setTimeout(() => {
      promise = dispatch(loadProducts());
    });
    const response = await axios.get(
      `${baseUrl}categories?filter=eq(AncestorId:${`'${Id}'`})`,
      {
        headers: REQUEST_HEADERS,
        cancelToken: source.token
      }
    );
    return { data: response.data, headers: response.headers };
  }
);

export const loadParentCategories = createAsyncThunk(
  'categories/loadParentCategories',
  async (category = { AncestorId: null }, { dispatch, signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });
    const response = await axios.get(
      `${baseUrl}categories?filter=eq(AncestorId:${
        category.AncestorId ? `'${category.AncestorId}'` : null
      })`,
      {
        headers: REQUEST_HEADERS,
        cancelToken: source.token
      }
    );
    categoriesHistoryList.removeLast();
    dispatch(
      setSelectedCategory(
        categoriesHistoryList.last()
          ? categoriesHistoryList.last().getCategory()
          : null
      )
    );
    if (promise) promise.abort();
    setTimeout(() => {
      promise = dispatch(loadProducts());
    });
    return { data: response.data, headers: response.headers };
  }
);

const pendingReducer = (state, action) => {
  state.isLoading = true;
  state.list = [];
};

const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.list = action.payload.data ? action.payload.data : [];
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.errorMessage = action.error
    ? action.error.message
    : 'Error loading categories';
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers: {
    [loadHomeCategories.pending]: pendingReducer,
    [loadHomeCategories.fulfilled]: fulfilledReducer,
    [loadHomeCategories.rejected]: rejectedReducer,
    [loadTopCategories.pending]: pendingReducer,
    [loadTopCategories.fulfilled]: fulfilledReducer,
    [loadTopCategories.rejected]: rejectedReducer,
    [loadChildCategories.pending]: pendingReducer,
    [loadChildCategories.fulfilled]: fulfilledReducer,
    [loadChildCategories.rejected]: rejectedReducer,
    [loadParentCategories.pending]: pendingReducer,
    [loadParentCategories.fulfilled]: fulfilledReducer,
    [loadParentCategories.rejected]: rejectedReducer
  }
});

export const selectedCategory = state => state.categories.selectedCategory;

export const { setSelectedCategory, setLastParentCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
