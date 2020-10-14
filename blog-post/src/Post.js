import React, { useState } from 'react';
import Form from './Form';
import './Post.css';
import ErrorBoundary from './ErrorBoundary';
import comments from './comments.json';

function Post() {

    const [commentsData , setCommentsData] = useState(comments);

    async function submitComment(newComment) {
        console.log(newComment);
        if(newComment.name && newComment.content)
            setCommentsData([newComment,...commentsData]);
        else 
            throw ('Missing name or content');
    }
    return (
        <div className="Post">
            <h1 id="title">Lorem Ipsum</h1>
            <div id="content">
                <img id="image" src="https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg"></img>
                <div id="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur urna faucibus viverra congue. Donec aliquam bibendum bibendum. Suspendisse vel risus eget augue tempus pretium. Proin in ante ut purus viverra gravida nec sit amet eros. Suspendisse a scelerisque mauris. Quisque tempus pretium bibendum. Fusce imperdiet quam id hendrerit feugiat. Nunc metus purus, vestibulum tincidunt mauris sit amet, eleifend pharetra tortor. Nunc gravida arcu sed dui dictum, eget volutpat sapien tincidunt. Sed malesuada vehicula ullamcorper. Sed ac sollicitudin ipsum, a scelerisque nunc.
                </div>
            </div>
            <div id="comments">
            {
                commentsData.map((comment,i)=>{
                    return (
                        <div id="comment" key={i}>
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
