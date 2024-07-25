import React from 'react'
import './Header5.css'

const Header4 = () => {

    const data = [
        {
            id: 1,
            title: "PROTECT COWS",
            icon: "./icon-cow-1.png",
            para:"We take care of cows even when they stop giving milk"
        },
        {
            id: 2,
            title: "PRESERVE DESI COWS",
            icon: './icon-cow-1.png'    ,
            para:"We protect desi cows by promoting desi cow products"
        },
        {
            id: 3,
            title: "ORGANIC FARMING",
            icon: "./farmer-icon-1.png",
            para:"We make organic fertilizers and pesticides for organic farming"
        },
        {
            id: 4,
            title: "FOLLOW TRADITION",
            icon: "./icon-pot-1.png",
            para:"We follow traditional methods while making our dairy products"
        },
    ]

    return (
        <div className='main-passion'> 
            <div className="heading-h1">
                <h1>OUR <span>PROCESS</span></h1>
                <p>We have set out to serve Gomathas and follow our tradition. We believe our tradition is rich and enables us to live a happy and healthy lifestyle. Our Gomathas play a very crucial role in our tradition.</p>
            </div>
            <div className='card-parent'>
                {
                    data.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="content">
                                <div className="icon"><img src={item.icon} alt="" /></div>
                                <div className="card-heading"><b>{item.title}</b></div>
                            </div>
                            <div className="card-para"><p>{item.para}</p></div>
                        </div>
                    ))
                }
               </div>
            
            
        </div>
    )
    }

export default Header4