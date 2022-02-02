import React from 'react';

import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';

export function Routes(){
  const { user } = useAuth();
    return(
      <>
      { user.id ? <AppRoutes /> : <SignIn /> }
      </>
    )
}
