import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Auth from './Auth'
import DataShow from './DataShow'
import {
  useUser,
} from 'reactfire';

export default function Routes() {
    const user = useUser();
    const history = useHistory();
  
    useEffect(() => {
      user ? history.push('/datashow') : history.push('/login');
    })    
    return (
        <Switch>
            <Route exact path='/datashow' component={DataShow} />
            <Route exact path='/login' component={Auth} />
        </Switch>
    )
}