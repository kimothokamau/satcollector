
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import BuyPage from '../Buy';
import WalletPage from '../Wallet';
import AboutPage from '../About';
import BlogPage from '../Blog';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

    const App = () => (
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={ROUTES.LANDING} component={BuyPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={BuyPage} />
          <Route exact path={ROUTES.BUY} component={BuyPage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route exact path={ROUTES.WALLET} component={WalletPage} />
          <Route exact path={ROUTES.ABOUT} component={AboutPage} />
          <Route exact path={ROUTES.BLOG} component={BlogPage} />
        </div>
      </Router>
    );
export default withAuthentication(App);