
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import FetchstudentSearch from "../../Reusable/FetchstudentSearch";
import axios from "axios";
import Loader from "../../Loader/Loader";

const PublishedList = ({}) => {
    const [showModal, setShowModal] = useState(false);

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState(0);
    const [temp1, setTemp1] = useState(null)
    const firestoreDb = firebase.firestore()

    const history = useHistory();
    const{roll}=useParams()


useEffect(()=>{fetchEvents()},[])




    function fetchEvents() {


        axios(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_scholar_author&author_id=${roll}&api_key=a89175a71107099a4e42dc6c42323f904a86cd860caa81ad816bbf97f7df4a04`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            params:{}
        }).then(response => {
            setEvents(response.data.articles)





            console.log(temp)


            console.log(response.data)
        })


    }


    return (
        <div>


        {events ? (
                <div>
                    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">

                        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                            <table className="min-w-full">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Title</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Year</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Publication</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Citations</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"><span className='btn btn-secondary w-20 '  onClick={(e)=>{history.goBack()}}>Back</span></th>
                                </tr>
                                </thead>
                                <tbody className=" overflow-ellipsis bg-white">

                                {events.map((value)=>{return( <tr>

                                    <td className="px-6 py-4  max-w-readable border-b border-gray-500">
                                        <div className=" truncate text-sm leading-5 text-gray-800">{value.title}</div>
                                    </td>
                                    <td className="px-6 py-4 border-b text-gray-800 border-gray-500 text-sm leading-5">{value.year}</td>
                                    <td className="px-6 py-4 max-w-readable truncate border-b text-gray-800 border-gray-500 text-sm leading-5">{value.publication}</td>

                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-800text-sm leading-5">{value.cited_by.value}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                        <button className="px-5 py-2 border-blue-500 border text-gray-800 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" onClick={()=>{window.open(value.link)}}>View </button>
                                    </td>
                                </tr>)})}

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

            )
            : (
                <div>

                    <Loader/>

                </div>

            )
        }
    </div>
    )

}

export default PublishedList





































