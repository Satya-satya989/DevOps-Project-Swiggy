import React from 'react'
import './RestaurentChain.css'

function RestaurentChain() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-100'>
                <h4 className='fw-bolder'>Top restaurant chains in Kochi</h4>

                <div style={{ gap: "50px", overflowX: "auto" }} className='d-flex align-items-center'>

                    {/* CARD */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xejp6fugbtzu08vpfqmu)`
                        }} className='Hotel-Card-img '>

                            {/* ✅ FIXED (no empty heading) */}
                            <div className='Hotel-color'></div>
                        </div>

                        <h5 className='mt-3'>Aryaas</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4
                        <p style={{ fontWeight: "300" }}>
                            South indian, North Indian, Chinese <br />Kakkanad
                        </p>
                    </div>

                    {/* CARD */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqskgt9wjjgqkj74coyw)`
                        }} className='Hotel-Card-img '>

                            {/* ✅ FIXED */}
                            <div className='Hotel-color'></div>
                        </div>

                        <h5 className='mt-3'>The Burger Junction</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.5
                        <p style={{ fontWeight: "300" }}>
                            American, Beverages <br />Kakkanad
                        </p>
                    </div>

                    {/* CARD */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426)`
                        }} className='Hotel-Card-img '>

                            {/* ✅ FIXED */}
                            <div className='Hotel-color'></div>
                        </div>

                        <h5 className='mt-3'>KFC</h5>

                        {/* ❌ removed wrong text inside icon */}
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.1

                        <p style={{ fontWeight: "300" }}>
                            American, Burgers, Biriyani, Snacks <br />Kakkanad
                        </p>
                    </div>

                    {/* CARD WITH OFFER */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ly5rzyg6tzwu4idmy4i1)`
                        }} className='Hotel-Card-img '>

                            {/* ✅ FIXED */}
                            <div className='Hotel-color'>
                                <h4 className='fw-bolder'>10% OFF UPTO ₹40</h4>
                            </div>
                        </div>

                        <h5 className='mt-3'>Amma's Pastries</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 3.9

                        <p style={{ fontWeight: "300" }}>
                            Desserts, Bakery <br />Kakkanad
                        </p>
                    </div>

                </div>

                <hr style={{ width: "100%", marginTop: "20px" }} />
            </div>
        </div>
    )
}

export default RestaurentChain
