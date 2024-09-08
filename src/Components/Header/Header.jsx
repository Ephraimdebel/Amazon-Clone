import React from 'react'

import classes from "./Header.module.css"

import { BiCart } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from 'react-icons/sl';
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
            <div className={classes.logo__container}>
                <a href="#">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                <div className={classes.delivery}>
                <span>
                    <SlLocationPin />   
                </span>
                <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                    </div>
                </div>
            </div>
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name='' id='' placeholder='search Amazon'/>
                <BsSearch size={25}/>
            </div>
            <div className={classes.order__container}>
                <a href="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png" alt="USA" />
                    <select name='' id=''>
                        <option value="">EN</option>
                    </select>
                    </a>
                <a href="">
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                <a href="">
                    <p>returns</p>
                    <span>& Orders</span>
                </a>
                <a href='' className={classes.cart}>
                <BiCart size={35}/>
                <span>0</span>
                </a>
            </div>
        </div>
      </section>
      <LowerHeader />
    </>
  )
}

export default Header
