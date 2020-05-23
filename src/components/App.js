import React from 'react';
import Auth from 'components/Auth';
import DataShow from 'components/DataShow';
import {
  useUser,
} from 'reactfire';


export default (props) => {
  const user = useUser();

  return(
    <div>
      { user && <DataShow/> }
      { !user && <Auth /> }
    </div>
  )
}