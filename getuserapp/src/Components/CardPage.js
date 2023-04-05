import React from 'react'
import { useState } from 'react'
import './CardPage.css'

const CardPage = () => {
    const [data, setdata] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getUsers = async () => {
        setIsLoading(true);
    
        try {
          const response = await fetch('https://reqres.in/api/users?page=1', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          })
    
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`)
          }
    
          const result = await response.json();
    
          console.log('result is: ', JSON.stringify(result, null, 4))
    
          setdata(result)
        } catch (err) {
          alert(err.message)
        } finally {
          setIsLoading(false)
        }
      }

    const Loading = () => {
        return (
            <div className='loading'>
                Loading...
            </div>
        )
    }

    const renderData = () => {
        const usersData = data.data
        return (
            usersData.map((data) => {
                return (
                    <div className="col-md-3 col-10 text-center card" key={data.id}>
                        <div className='card_img'>
                            <img src={data.avatar} alt="" className='card_img' />
                        </div>
                        <div className='card_details'>
                            <h5>{data.first_name} {data.last_name}</h5>
                            <p>{data.email}</p>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <>
            {/* Navbar */}
            <div className="container-fluid navbar_custom">
                <div className="row">
                    <div className="col-md-9 col-7 company_name">
                        GetUsersApp
                    </div>
                    <div className="col-md-3 col-5 text-center my-auto">
                        <button className='get_users_button' onClick={getUsers}>Get Users</button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="container-fluid">
                <div className="row justify-content-evenly mb-5 card_row">
                    {
                        isLoading===true ? <Loading/> : null
                    }
                    {
                        data.data !== undefined ? renderData() : null
                    }
                </div>
            </div>
        </>
    )
}

export default CardPage