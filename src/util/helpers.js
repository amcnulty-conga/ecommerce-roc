export const PAGE_ROUTE_TO_DISPLAY_NAME_MAP = {
  '/catalog': 'Catalog'
}

let index = Number.parseInt(localStorage.getItem('priceList'));
if (Number.isNaN(index)) {
  localStorage.setItem('priceList', '1');
  index = 1;
}

const priceListIdsList = [
  '327c354a-eef5-4254-ad8b-63a9031278da',
  'bb3e5eb0-0ca0-4f02-969a-8c4858cdb962',
  '3962d9f5-3382-49ef-b56b-62d7bf8cf140',
  'e0c3f724-5799-40b9-8c7d-b0ae96192755'
]
export const REQUEST_HEADERS = {
  'Authorization': 'Bearer 123',
  'PriceListId': priceListIdsList[index]
};

export const debounce = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  }
}
