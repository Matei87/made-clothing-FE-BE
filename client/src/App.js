import React, { Component } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import Favorite from './pages/Favorite/Favorite';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Checkout from './pages/Checkout/Checkout';

import ItemDetails from './pages/ItemDetails/ItemDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { fetchProducts } from './redux/shop/shop.actions';

class App extends Component {
  componentDidMount() {
    const { setCurrentUser, getItems } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
    });

    getItems();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container-fluid'>
          <Routes>
            <Route path='/'>
              <Route index element={<Homepage />} />
              <Route path=':id' element={<ItemDetails />} />
            </Route>

            {this.props.currentUser ? (
              <Navigate to='/' />
            ) : (
              <Route path='signin' element={<SignInSignUp />} />
            )}

            <Route path='favorite'>
              <Route index element={<Favorite />} />
              <Route path=':id' element={<ItemDetails />} />
            </Route>

            <Route path='women'>
              <Route index element={<Women />} />
              <Route path=':id' element={<ItemDetails />} />
            </Route>

            <Route path='men'>
              <Route index element={<Men />} />
              <Route path=':id' element={<ItemDetails />} />
            </Route>

            <Route path='checkout'>
              <Route index element={<Checkout />} />
              <Route path=':id' element={<ItemDetails />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToPros = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  getItems: (items) => dispatch(fetchProducts(items)),
});

export default connect(mapStateToPros, mapDispatchToProps)(App);
