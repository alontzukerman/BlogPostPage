import React, { useState } from 'react';
import Form from './Form';
import '../styling/Post.css';
import ErrorBoundary from '../ErrorBoundary';
import comments from '../comments.json';
import 'firebase/firestore';
import loremIpsum from '../loremIpsum.jpg';
import { useCollectionData } from "react-firebase-hooks/firestore";

function Post({firebase,storage}) {


    // const [url, setUrl] = useState();

    const storageRef = storage.ref();
    const loremIpsumRef = storageRef.child('loremIpsum').put(loremIpsum);
    // const loremIpsumRef = storageRef.child('loremIpsum');
    // loremIpsumRef.getDownloadURL()
    //     .then(url=>setUrl(url))
    //     .catch(error=>console.error("Error ->",error));

    const db = firebase.firestore();
    const commentsCollection = db.collection('comments') ;
    commentsCollection.get().then((results)=>{
        console.log("ssss",results.docs);
    })
    // const [commentsData , setCommentsData] = useState(comments);

    // async function submitComment(newComment) {
    //     console.log(newComment);
    //     if(newComment.name && newComment.content)
    //         setCommentsData([newComment,...commentsData]);
    //     else 
    //         throw ('Missing name or content');
    // }
    const submitComment = (newComment) => {
        commentsCollection.doc(`comment_${commentsFS.length}`).set({name: newComment.name,content: newComment.content})
        .then(()=>{console.log("submitted")})
        .catch(error=>console.error("Error submit ->",error));
    }
    // const deleteComment = (index) => {
    //     commentsCollection.doc(`comment_${index}`).delete()
    //     .then(()=>{console.log("deleted")})
    //     .catch(error=>console.error("Error delete ->",error));
    // }
    const [commentsFS] = useCollectionData(commentsCollection);
    console.log("comments",commentsFS);
    return (
        <div className="Post">
            <h1 id="title">Lorem Ipsum</h1>
            <div id="content">
                <img id="image" src={loremIpsum}></img>
                <div id="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur urna faucibus viverra congue. Donec aliquam bibendum bibendum. Suspendisse vel risus eget augue tempus pretium. Proin in ante ut purus viverra gravida nec sit amet eros. Suspendisse a scelerisque mauris. Quisque tempus pretium bibendum. Fusce imperdiet quam id hendrerit feugiat. Nunc metus purus, vestibulum tincidunt mauris sit amet, eleifend pharetra tortor. Nunc gravida arcu sed dui dictum, eget volutpat sapien tincidunt. Sed malesuada vehicula ullamcorper. Sed ac sollicitudin ipsum, a scelerisque nunc.
                </div>
            </div>
            <div id="comments">
            {
                commentsFS && 
                commentsFS.reverse().map((comment,i)=>{
                    return (
                        <div id="comment" key={i}>
                            {/* <button id="commentDelete"
                                onClick={()=>deleteComment(commentsFS.length-1-i)}>X</button> */}
                            <div id="commentContent">
                                {comment.content}
                            </div>
                            <div id="commentName">
                                {`Created by ${comment.name}`}
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <ErrorBoundary>
                <Form submitComment={submitComment}/>          
            </ErrorBoundary>
        </div>
    )
}

export default Post
