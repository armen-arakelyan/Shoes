import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import {Link, BrowserRouter} from 'react-router-dom';
import Basket from './Basket'

const Menu=()=>{
    const count=useSelector(state=>state.count.counter)
    const [menu,setMenu]=useState('-5000px');
    const [basket,setBasket]=useState('none');
    return(
        <div>
            <div className="navbar">
            <div className="navbar-menu">
                <span onClick={()=>setMenu('0px')}>&#9776;</span>
            </div>
            <div className="navbar-logo">
            <BrowserRouter>
                <Link to="/">Teliani</Link>
            </BrowserRouter>
            </div>
            <div onClick={()=>setBasket('block')} className="basket">
                <span>{count}</span>
                <img src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-shopping-basket-icon-png-image_1871519.jpg" alt="basket" />
            </div>
        </div>
      <div className="menu" style={{left:menu}}>
          <div className="close-menu">
               <p onClick={()=>setMenu('-5000px')}>&#10006;</p> 
          </div>
          <div className="menu-content">
            <p>First</p>
            <p>Second</p>
            <p>About</p>
          </div>
        </div>
        <Basket close={()=>setBasket('none')} display={basket} />
        </div>
    )
}

export default Menu