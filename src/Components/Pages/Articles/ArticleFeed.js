import React, { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import Loader from "../../Loader/Loader";
import img from "../../../wallpaperbetter.com_1920x1200.jpg"
import firebase from "firebase/compat";
import scholar from "google-scholar";

const ArticleFeed = ({ }) => {
    const history = useHistory()
    const firestoreDb = firebase.firestore()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticle();
        console.log("hi working")

        scholar.all('Novarun')
            .then(resultsObj => {
                console.log(resultsObj) // this will have all ~112 results
            })
    }, []);

    function fetchArticle() {


        firestoreDb.collection('Article').get().then((res)=>{
            setLoading(false);
            setData(res.docs);
            console.log(res.docs[0].data())
            console.log(data)

        }).catch((err) => {
            console.log(err)
            });
    }



    return (
        <div className="container md:mx-auto mb-10 sm:mt-8">
            <div className="lg:text-left flex items-center justify-between mx-4">
                <div>
                    <h1 className="md:ml-32 text-xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">
                        <span className="hidden lg:block xl:inline">Articles</span>{" "}
                    </h1>
                </div>
                <div className="flex flex-row">
          <span className="px-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 stroke-current text-gray-500"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </span>
                </div>
            </div>
            <hr/>

            {!loading && data && data.length ? (
                <div className="mx-auto">
                    {data.map((value, key) => {
                        return (


                            <div
                                className="max-w-2xl flex flex-row mx-auto rounded-lg mb-12"
                                key={key}
                            >
                                <div className="w-1/3 py-2">
                                    <img className='rounded'
                                        src={
                                           img
                                        }
                                    />
                                </div>

                                <div className="px-4 w-2/3" key={key}>
                                    <div>
                                        <Link
                                            to={`/articles/${value.data().userId}/${value.data().articleId}`}
                                            className="text-base md:text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline"
                                        >
                                            {value.data().title ? value.data().title : "Plastic Collection"}
                                        </Link>
                                        <p className="text-xs lg:text-sm md:text-base text-gray-500 whitespace-pre-wrap overflow-ellipsis">
                                            {value.data().liner ? value.data().liner : ""}
                                        </p>
                                        <p className="mt-2 text-xs lg:text-sm font-semibold md:text-base text-gray-500 whitespace-pre-wrap overflow-ellipsis">
                                            {value.data().name ? `- ${value.data().name}` : ""}
                                        </p>
                                    </div>

                                    <div className="flex flex-row mt-3 items-center justify-start">
                    <span className="w-4">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="stroke-current text-gray-500"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>

                    </span>

                                        <span className="w-1/10 ml-8 flex flex-row">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                                            <span className='pl-2'>{value.data().likes}</span>
                    </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


            ) : (
                <div>
                    No Articles added yet
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default ArticleFeed;
