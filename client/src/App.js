import React,{useEffect , lazy , Suspense } from 'react';
import {Route , Switch , Redirect} from 'react-router-dom';



import Header from '../src/components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Spinner from './components/spinner/spinner.component';

import WithSpinner from './components/with-spinner/with-spinner.component';
import {checkUserSession} from './redux/user/user.actions';

import {GlobalStyles} from './global.styles'; 
import ErrorBoundary from './components/error-boundary/error-boundary.component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('../src/pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const CollectionPage = lazy(() => import('./pages/collection/collection.component'));

const CollectionPageContainer = WithSpinner(CollectionPage);

const App =({ checkUserSession,currentUser } ) => {
  
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

  return (
    <div className="App">
      <GlobalStyles />
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/shop/:collectionId' component={CollectionPageContainer} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : <SignInAndSignUp />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser:selectCurrentUser
  }
)

const mapDispatchToProps = dispatch => ({
    checkUserSession:()=>dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
