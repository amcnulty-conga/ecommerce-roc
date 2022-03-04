import { useDispatch } from 'react-redux';
import { loadProducts } from '../../features/products/productsSlice';

let promise;

export const useLoadProducts = () => {
  // const [promise, setPromise] = useState();
  const dispatch = useDispatch();

  return (payload) => {
    // Abort last load products request
    if (promise) {
      promise.abort();
    }
    // Dispatch the new load products request.
    // Using setTimeout to ensure the aborted request's rejected action calls before this so pending happens after rejected.
    setTimeout(() => {
      promise = dispatch(loadProducts(payload));
    });
  }
}
