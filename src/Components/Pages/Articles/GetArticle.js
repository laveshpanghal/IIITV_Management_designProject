import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import {useHistory, useParams} from "react-router-dom";
import firebase from "firebase/compat";
import moment from "moment";
import avtar from "../../../user.png"

const GetArticle = ({ }) => {
    const history = useHistory()
    const firestoreDb = firebase.firestore()
    const [data, setData] = useState();
    const [liked, setLiked] = useState(false);
    const{userId,articleId}=useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchArticle();

    }, []);

    function fetchArticle() {


        firestoreDb.collection('Article').where("userId","==",userId).where("articleId","==",articleId).get().then((res)=>{
            setLoading(false);
            setData(res.docs[0].data());
            console.log(res.docs[0].data())

        }).catch((err) => {
            console.log(err)
        });
    }


    function incrementLike(article) {

        firestoreDb.collection('Article').where("userId","==",userId).where("articleId","==",articleId).get().then((res)=>{
            firestoreDb.collection('Article').doc(res.docs[0].id).update({

                "likeCount":(article.likes ? article.likes : 0) + 1

            })


        })




    }

    function decrementLike(article) {
        firestoreDb.collection('Article').where("userId", "==", userId).where("articleId", "==", articleId).get().then((res) => {
            firestoreDb.collection('Article').doc(res.docs[0].id).update({

                "likeCount": (article.likes ? article.likes : 0) - 1,

            })


        })

    }
    //
    // function deleteActivity(article, auth) {
    //     const apiName = "activityApi";
    //     const path = `/activity/object/${article.articleId}/${auth.username}`;
    //     const myInit = {};

    //     API.del(apiName, path, myInit)
    //         .then((res) => {
    //             console.log(res);
    //             setLiked(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    //
    // function uploadActivity(article, auth) {
    //     console.log("Inside upload");
    //     const apiName = "activityApi";
    //     const path = "/activity";
    //     const myInit = {
    //         body: {
    //             postTypeId: article.articleId,
    //             userId: auth.username,
    //             name: auth.attributes.name,
    //         },
    //     };
    //
    //     API.post(apiName, path, myInit)
    //         .then((res) => {
    //             console.log(res);
    //             setLiked(true);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    //
    // function checkActivity(article, auth) {
    //     const apiName = "activityApi";
    //     const path = `/activity/${article.articleId}/${auth.username}`;
    //     const myInit = {};
    //
    //     API.get(apiName, path, myInit)
    //         .then((res) => {
    //             console.log(res);
    //             if (res.length > 0) {
    //                 setLiked(true);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    // function likeButtonClicked(article, auth) {
    //     incrementLike(article);
    //     uploadActivity(article, auth);
    // }
    //
    // function unLikeButtonClicked(article, auth) {
    //     decrementLike(article);
    //     deleteActivity(article, auth);
    // }

    return (
        <div className="container mx-auto">
            {data ? (
                <div className="px-6 mt-2">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row align-start justify-start">
                            <div className="mr-2">
                                <img
                                    className="h-10 object-cover rounded-full"
                                    src={avtar}
                                    alt="Avatar"
                                />
                            </div>
                            <div>
                                <div className="text-base font-medium">
                                    {data.name ? data.name : ""}{" "}
                                </div>
                                <div className="text-sm">
                                    {data.createdAt
                                        ?  moment.unix(data.createdAt.seconds).format("MMM DD,YYYY")
                                        : ""}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center">
                            {!liked ? (
                                <span
                                    className="w-6 ml-4"
                                    // onClick={(_e) => likeButtonClicked(data, auth)}
                                >
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                            ) : (
                                <span
                                    className="w-6 ml-4"
                                    // onClick={(_e) => unLikeButtonClicked(data, auth)}
                                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="fill-current text-red-600"
                  >
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                    />
                  </svg>

                </span>

                            )}
                            <div><span className='bg-black border-gray-400 btn ml-4 btn-primary' onClick={()=>{history.goBack()}}>Back</span></div>
                            <span className="w-6 ml-4">

              </span>
                        </div>
                    </div>
                    <div className="">
                        <hr/>
                        <article
                            className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto prose-indigo mt-4"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></article>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};



export default GetArticle;
