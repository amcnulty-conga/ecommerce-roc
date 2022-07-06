export const PAGE_ROUTE_TO_DISPLAY_NAME_MAP = {
  '/catalog': 'Catalog'
}

export const SORT_TEXT_TO_PARAM_MAP = {
  'Name Asc': {
    sortDirection: 'asc',
    sortField: 'Name'
  },
  'Name Desc': {
    sortDirection: 'desc',
    sortField: 'Name'
  }
};

const priceListIdsList = [
  '327c354a-eef5-4254-ad8b-63a9031278da',
  '5ca57058-361b-479b-a4d3-399a7faf23da',
  '631cf0d1-f7ae-43ab-b875-5f356dc0dcb2',
  'f1a99f16-149a-4477-951c-2efbd61737f0',
  '23be3fc5-ffe5-42cf-84f6-c15906aad8cd',
  'bb3e5eb0-0ca0-4f02-969a-8c4858cdb962',
  '3962d9f5-3382-49ef-b56b-62d7bf8cf140',
  'e0c3f724-5799-40b9-8c7d-b0ae96192755'
];

export const REQUEST_HEADERS = {
  // "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjAyRDhBQzE4QTIzNEI4QUEwRDM2NzVEOEUxNTEzMjY5NThCMEU3OThSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IkF0aXNHS0kwdUtvTk5uWFk0VkV5YVZpdzU1ZyJ9.eyJuYmYiOjE2NTcxMzkyNTMsImV4cCI6MTY1NzE0Mjg1MywiaXNzIjoiaHR0cHM6Ly9sb2dpbi5jb25nYWNsb3VkLmlvL2ludC9hcGkvdjEvYXV0aCIsImNsaWVudF9pZCI6InJscC1kZXYtY2MiLCJqdGkiOiIzQkNGMkE3RUJFODQ5QkRGNTQ0QkU5MkRCRjA0OEFFRCIsImlhdCI6MTY1NzEzOTI1Mywic2NvcGUiOlsiQXV0aC5BcGkuUmVhZCJdfQ.i7dS2lcxBk2ela0KxQU1U1gSza9cHlgfsPgQ0zx1XRavXxhCyB_2pGPa1vyJIiYqXQZdf0H-km5o6yzQjnezamPC-1YTF8KhDhM1-D6jsivtekyndoFghlw5ttZb7KljaClnpk5zJgo12rhcTe9IHjT18q6hfbSNk0dDdjyFl6rcrqO5HT-qK_HqoKXrwVela67QAfA_6kdHggqqFwOoOv2r9q9zQSigMX-yTCdq_AaAcZg6BOecg9Eetw5NkYg1hc3xbNYv0wB-ONTzyR0s4xR88dRJ1ArP4cgYagydxparrPZEjKH6sQnoyWAXJmpAOmICb5UQHfkODqopBsRbPg",
  UserId: 'ddfec712-8827-4684-8287-1373e4f1f43d',
  OrganizationId: 'rlp-dev',
  orgname: 'rlp-dev'
};

export const debounce = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  }
}
