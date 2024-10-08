import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import './Apifile.css'


function Apifile() {
    const [search,setSearch]=useState("");const[currency,setCurrency]=useState([])
useEffect(()=>{
  axios.get('https://openapiv1.coinstats.app/coins',{headers:{'X-API-KEY':'ezqfxMCr43u8rWI699v8oPVFz4Ao5+/x85p3e4SIQEg='}}).then(res=>setCurrency(res.data.result)).catch(err=>console.log(err)
  )
   
},[])
  return (
    <div>
          <h1> Crypto currency</h1>
       <input type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
       <table>
        <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Market cap</th>
          <th>Price</th>
          <th>Available supply</th>
          <th>volume(24hr)</th>
        </tr>
        </thead>
        <tbody>
          {
            currency.filter((val=>{
              return val.name.toLowerCase().includes(search.toLocaleLowerCase())
            })).map((val)=>{
              return <tr style={{marginLeft:'70px'}} key={val._id}>
                <td className='rank'>{val.rank}</td>
                <td style={{display:'flex',gap:'10px'}}>
                  <a href={val.websiteurl}>
                    <img  src={val.icon} alt="" style={{ width: '40px', height: '40px' }} />
                  </a>
                    <p>{val.name}</p>
                </td>
                <td className='symbol'>{val.symbol}</td>
                <td>
                  ${val.marketCap}
                </td>
                <td>${val.price.toFixed(2)}</td>
                <td>{val.availableSupply}</td>
                <td>{val.volume.toFixed(0)}</td>
              </tr>
            })
          }
        </tbody>
       </table>
    </div>
  )
}

export default Apifile