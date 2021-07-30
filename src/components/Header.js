import './Header.css'
import React, { useState, useEffect } from 'react'
import Emoji from './Emoji.json'
import Body from './Body'




function Header() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [isShowingAlert, setShowingAlert] = useState(false)

    useEffect(() => {
        const newData = Emoji.filter(emoji => emoji.title.toLowerCase().includes(search.toLocaleLowerCase()))
        setData(newData)
    }, [search])




    const new_res = Emoji.slice(0, 30).map(ser => {
        return (ser.symbol)
    })



    return (
        <div>
            <div className="top">
                <h1> Emoji Search 🦄</h1>
                <p> A simple emoji search tool made with ReactJS.   </p>
                <input type='text' className='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for the emoji ..." />
                <div className={`alert alert-success ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
                                        onTransitionEnd={() => setShowingAlert(false)}> Copied!</div>
            </div>
            <div className="container">
                {Emoji.filter((val) => {
                    if (search === '') {
                        return (new_res)
                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }

                }).map((val) => {
                    return (

                        <div className="container">
                            <div className="results">
                                <div className="item" key={val.title} onClick={() => { navigator.clipboard.writeText(val.symbol); setShowingAlert(true) }}>
                                    <span className="item-emoji">  {val.symbol} </span>
                    
                                </div>
                            </div>
                        </div>

                    )
                })


                }
            </div>

        </div>
    )
}

export default Header