import React from 'react'
import './RestaurentOnline.css'

function RestaurentOnline() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-100'>
                <h4 className='fw-bold'>Restaurants with online food delivery in Kochi</h4>

                {/* FILTER BUTTONS */}
                <div style={{ gap: "10px" }} className='buttonsoffiltering'>
                    <button>Filter <i className="fa-solid fa-gears"></i></button>
                    <button>Sort by <i className="fa-solid fa-angle-down"></i></button>
                    <button>Fast Delivery</button>
                    <button>New On Swiggy</button>
                    <button>Rate 4.0+</button>
                    <button>Pure Veg</button>
                    <button>Offers</button>
                </div>

                {/* CARDS */}
                <div id='Card-section' className='mt-4 d-flex flex-wrap gap-4'>

                    {/* CARD */}
                    <div className='Online-card'>
                        <div
                            style={{
                                backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqskgt9wjjgqkj74coyw)`
                            }}
                            className='Online-Card-img'
                        >
                            {/* ✅ FIXED (no empty heading) */}
                            <div className='Online-color'></div>
                        </div>

                        <h5 className='mt-3'>The Burger Junction</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.5
                        <p style={{ fontWeight: "300" }}>
                            American, Beverages <br />Kakkanad
                        </p>
                    </div>

                    {/* CARD */}
                    <div className='Online-card'>
                        <div
                            style={{
                                backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426)`
                            }}
                            className='Online-Card-img'
                        >
                            {/* ✅ FIXED */}
                            <div className='Online-color'></div>
                        </div>

                        <h5 className='mt-3'>KFC</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.1
                        <p style={{ fontWeight: "300" }}>
                            American, Burgers, Snacks <br />Kakkanad
                        </p>
                    </div>

                    {/* CARD WITH OFFER */}
                    <div className='Online-card'>
                        <div
                            style={{
                                backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ly5rzyg6tzwu4idmy4i1)`
                            }}
                            className='Online-Card-img'
                        >
                            {/* ✅ FIXED */}
                            <div className='Online-color'>
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

                <hr />
            </div>
        </div>
    )
}

export default RestaurentOnline
