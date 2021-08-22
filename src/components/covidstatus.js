import React, {useEffect, useState} from 'react'
import './covidstatus.css'
const Covidstatus = () => {
    const [data,setData]=useState([]);
    const covidData = async()=>{
     try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData= await res.json();
        console.log(actualData.statewise[0])
        setData(actualData.statewise[0]);
     }
     catch(err){
         console.log(err)
     }
    }
    useEffect(() => {
        covidData();
    } , []);
    return (
        <>
        <section>
           <h2>LIVE</h2>
           <h1>COVID LIVE TRACKER INDIA</h1> 
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">COUNTRY</p>
                           <p className="card__total card__small">INDIA</p>
                       </div>
                   </div>
               </li>
           </ul>
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">RECOVERED</p>
                           <p className="card__total card__small">{data.recovered}</p>
                       </div>
                   </div>
               </li>
           </ul>
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">CONFIRMED</p>
                           <p className="card__total card__small">{data.confirmed}</p>
                       </div>
                   </div>
               </li>
           </ul>
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">DEATH</p>
                           <p className="card__total card__small">{data.deaths}</p>
                       </div>
                   </div>
               </li>
           </ul>
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">ACTIVE</p>
                           <p className="card__total card__small">{data.active}</p>
                       </div>
                   </div>
               </li>
           </ul>
           <ul>
               <li className="card">
                   <div className="card__main">
                       <div className="card__inner">
                           <p className="card__name">LAST UPDATED</p>
                           <p className="card__total card__small">{data.lastupdatedtime}</p>
                       </div>
                   </div>
               </li>
           </ul>
           </section>
        </>
    )
}
export default Covidstatus;
