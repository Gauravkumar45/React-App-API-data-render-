import React, {useState, useEffect} from 'react'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        setUsers(await response.json());

    }
    useEffect(() => {
        getUsers();
    },[]);
  return (
    <>
        <h2>List of All Items </h2>
        <div className='container-fluid mt-5'>
            <div className="row text-center">

            {
                users.map((curElem) => {
                    return (
                    <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                        <div className="d-flex align-items-center">
                        <div className="id">{curElem.id}</div>
                            <div className="image"> <img src={curElem.image} alt="" className="rounded" width="155"/></div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft">{curElem.title}</h4>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-betwwen rounded text-white stats">
                                    <div className="d-flex flex-colomn"><span className="description">{curElem.description}</span></div>
                                    <div className="d-flex flex-colomn"><span className="category">{curElem.category}</span></div>
                                    <div className="d-flex flex-colomn"><span className="price">{curElem.price}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
            })
            }
                
            </div>
        </div>
    </>
  )
}

export default UseEffectAPI