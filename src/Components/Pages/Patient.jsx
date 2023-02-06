import './demo.css';
import { useState ,useEffect } from 'react';

import { BsArrowDownCircleFill } from "react-icons/bs"

const Patient = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users').then((req) => {
            req.json().then((res) => {
                setdata(res)
            })

        })
    })




    return (
        <>
            <div className="container_flex">

                <h1 style={{ margin: '5px' }}>View Report</h1>

                <button className='button'> < BsArrowDownCircleFill /> &nbsp; Download Pdf</button>
            </div>

            <h5>Patient Name: David Allen &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<small>Date Uploaded: 02/03/2023   </small> </h5>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {
                        data.map((valu) => {
                            return (
                                <>
                                    <tr>
                                        <td>{valu.id}</td>
                                        <td>{valu.name}</td>
                                        <td>{valu.username}</td>
                                        <td>{valu.email}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}



export default Patient;

