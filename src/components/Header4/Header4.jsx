import React from 'react'
import './Header4.css'

const Header4 = () => {

    const data = [
        {
            id: 1,
            title: "GRAZING NATURALLY",
            icon: "./icon-cow-grazing-m-black.png",

            para:"Our cows are grazed naturally. We feed our cows with naturally grown grass and chemical-free cattle feed along with oil cakes and natural mineral supplements."
        },
        {
            id: 2,
            title: "CARING WITH LOVE",
            icon: './icon-caring-cow-m-black.png',
            para:"Cows in our farms are treated with love and care. We monitor closely to make sure they are properly housed, washed, and health is periodically checked."
        },
        {
            id: 3,
            title: "MILKING HYGEINICALLY",
            icon: "./icon-milking-m-black.png",
            para:"Cows are washed regularly and their hygiene is maintained very well. Before milking udder area is thoroughly washed and dried."
        },
        {
            id: 4,
            title: "CHILLING FASTER",
            icon: "./icon-chilling-m-black.png",
            para:"After milking, milk is chilled as quickly as possible to 4°C. This helps to avoid bacterial growth and maintain freshness."
        },
        {
            id: 5,
            title: "DELIVERY ON TIME",
            icon: "./truck_8891863.png",
            para:"Fresh milk is delivered to customers every day before 7 am to their doorsteps. A strict cold chain end-to-end to maintain freshness."
        },
    ]

    return (
        <div className='main-process'> 
            <h1>OUR <span>PROCESS</span></h1>
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
    )
    }

export default Header4