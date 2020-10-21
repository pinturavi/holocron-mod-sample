import React from 'react';

export  function loadMyData(param)
{
  return (dispatch, getState) => {
    const data = getState().get('name')
    const status = data ? 'complete' : 'loading'
    const promise = data ? Promise.resolve : dispatch(fetchMyData(param));

    return { data, status, promise };
  }
}

export  function loadMyOtherData(param)
{
  return (dispatch, getState) => {
    const data = getState().get('name')
    const status = data ? 'complete' : 'loading'
    const promise = data ? Promise.resolve : Promise.reject

    return { data, status, promise };
  }
}
