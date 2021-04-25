import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {basketCounter,basketOrders,allCounts} from './redux/basket/action';
import contacts from '../contacts.json'

const Home=()=>{
    const [left,setLeft]=useState(550)
    const dispatch=useDispatch();
    let inpValue=0;
    let data=[];
    return(
        <div>
            <div className="home_page">
                <div className="home_page_slider">
                    <div className="home_page_slider_content">
                    <img src="https://wallpapercave.com/wp/9OYMGcV.jpg" alt="slider_1" />
                     <img src="https://pics.freeartbackgrounds.com/fullhd/Field_Landscape_Background-642.jpg" alt="slider_2" />
                     <img src="https://i.pinimg.com/originals/30/7b/df/307bdf1956f5e3ab7481721e5ee6fcc3.jpg"  alt="slider_3" />
                    </div>
                </div>
                <h1 style={{color:"#333"}}>ԼԱՅՆ ՏԵՍԱԿԱՆԻ</h1>
                <div className="home_page_shoes">
                    <div className="navigations">
                        <span onClick={()=>{
                           let slider=document.querySelector('.home_page_shoes_slider');
                           if(left===550){
                            slider.style.left=550+'px'
                          }else{
                            setLeft(left+550)
                            slider.style.left=left+'px'
                          }
                        }}>&#10096;</span>
                        <span onClick={()=>{
                              let slider=document.querySelector('.home_page_shoes_slider');
                              if(left===-550){
                               slider.style.left=left+'px'
                             }else{
                               setLeft(left-550)
                               slider.style.left=left+'px'
                             }
                             console.log(slider.style.left)
                        }}>&#10097;</span>
                    </div>
                    <div className="home_page_shoes_slider">
                    {contacts.map((v,i)=><div key={i} className="home_page_content">
                    <h2>{v.name}</h2>
                    <h2>{v.price}</h2>
                    <img src={v.img} alt="home" />
                    <button onClick={()=>{dispatch(basketCounter(inpValue));dispatch(basketOrders([{...data,name:v.name,price:v.price}]));dispatch(allCounts(v.price))}}>Add to basket</button>
                </div>   
                )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;