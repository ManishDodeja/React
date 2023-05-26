// as react is made up of components so the main and root component is called App
// the component can be classes or functions
// class components are the older one's and function components are the new one with the functionality called hooks.

import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'

function App(){


    // here we can create variable, set functions and all
    // const title = "Blog Post"
    // const body="this is my Blog Post "

    // // this is an array of objects called comment, will render this in app
    // const comments=[
    //     {id:1, text:"Comment One"},
    //     {id:2, text:"Comment Two"},
    //     {id:3, text:"Comment Three"},   
    // ]

    // var showComments =true

    // const commentBlock = (
    //     <div className="container">
    //         <h3>Comments ({comments.length})</h3>
    //         <ul>
    //             {comments.map((comment, index) =>(
    //                 <li key={index}> {comment.text} </li>
    //             ))}
    //         </ul>
    //     </div>
    // )


    const [feedback, setFeedback]=useState(FeedbackData)
        


    // here i'm deleting the feedback item from app.js because the data is from feedback data and i'm taking the item id by inverse prop drilling method from feedback item
    function deleteFeedback(id){
        if(window.confirm("Are you sure you want to delete ?")){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    function addFeedback(newFeedback){
        newFeedback.id=uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    

    return(
        // this is something called jsx <> inside we can code the html tags 
        <>
                {/* <Routes index>
                    <Route path="/about" Component={About}>
                    
                    </Route>
                </Routes> */}

               
                <Header/>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <div className='container'>
                    {/* in feedback list i'm passing props one is feedback which i'm getting from Feedback data by using use state and second one i passed the prop of handle delete*/}
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}  />
                </div>

            
            {/* the brackets are used for expression and comments as well */}
            {/* {Math.random() *(5+5)} */}

            {/* Okay the below thing is about creating a div under where we learn how can we dynamically map the elements,
                step 1: we create array of objects named comment with const
                step 2: then in h3 we take the length of comments by property of array
                step 3: we create ul for un order list
                step 4: we use map function of an array where we put two parameters , the one is comment which is reference of single object and other is index which define the object uniquely 
                step 5: and then we create li tag where we have given the key ={index} which uniquely identify and read comment.text property  
            */}

            {/* here just wraped with conditionals */}

        
            {/* {showComments && commentBlock } */}

        </>
    )
}
export default App