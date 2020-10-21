/*
import React from 'react';
import {connectAsync} from 'iguazu'
import {loadMyData, loadMyOtherData} from '../actions'

// eslint-disable-next-line react/prop-types
function MyContainer({ isLoading, loadedWithErrors, myData, myOtherData }) {
  if (isLoading()) {
    return <div> Loading....</div>;
  }

  if (loadedWithErrors()) {
    return <div>Oh no! Something Went Wrong!!!</div>
  }

  return (

    <div>
      myData={myData}
      {'  '}
      myOtherData={myOtherData}\
      {'  '}
    </div>
  );

}

function loadDataAsProps({ store, ownProps }) {
  const { dispatch, getState } = store;

  return {
    myData: dispatch(loadMyData()),
    myOtherData: dispatch(loadMyOtherData())
  };
}

export default connectAsync({ loadDataAsProps })(MyContainer);
*/
