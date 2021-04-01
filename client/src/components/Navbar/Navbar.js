import React from 'react';
import './Navbar.scss';


//logo
import Logo from '../../img/logo1.png';
//redux
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
//react-router-dom
import { NavLink } from 'react-router-dom';
//react-icons
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
//firebase
import { auth } from '../../firebase/firebase';
//selector
import { createStructuredSelector } from 'reselect';


const Navbar = ({ currentUser, itemCount }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/women" activeClassName="active">WOMEN</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/men">MEN</NavLink>
                    </li>
                    {currentUser ? <li className="nav-item">
                        <div className={currentUser ? `nav-link active` : "nav-link"} onClick={() => auth.signOut()}>SIGN OUT</div>
                    </li> : <li className="nav-item">
                        <NavLink className="nav-link" to="/signin" >SIGN IN</NavLink>
                    </li>}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorite"><HiOutlineHeart /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/checkout">
                            <RiShoppingBagLine />
                            <span className="cart-item">
                                {itemCount}
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(Navbar);