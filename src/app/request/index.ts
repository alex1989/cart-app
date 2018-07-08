const BASE_API = 'http://5b3e10b1c3c3fb0014742756.mockapi.io';

const parseJSON = (res: any) => {
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return res.json();
  }
  return res.text();
};


const interceptErrors = (response: any) => {
  if (!response.ok) {
    switch (response.status) {
      default:
        response.json().catch((value: any) => {
          if (value.hasOwnProperty('error')) {
            throw Error(value.error);
          }
        });
        throw Error("We can't figure out what went wrong.");
    }
  }

  return response;
};


const composeRoute = (url: string) => `${BASE_API}${url}`;


const request = (type: string, url: string, data: any) =>
  fetch(composeRoute(url), {
    method: type,
    body: data ? JSON.stringify(data) : null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(interceptErrors)
    .then(parseJSON)

export const get = (url: string) =>
  request('GET', url, null);
// export const post = (url: string, data: any) =>
//   request('POST', url, data);
export const put = (url: string, data: any) =>
  request('PUT', url, data);
export const remove = (url: string) =>
  request('DELETE', url, null);
