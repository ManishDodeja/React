import { useState } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length<10){
            setbtnDisabled(true)
            setMessage("Write at least 10 characters")
        }else{
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    // this is for data submission in last
    const submitData = (e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,rating
            }
            handleAdd(newFeedback)
            setText('')
            setRating(1)
        }    
    }   

    return (
        <Card>
            <form onSubmit={submitData}>
                <h2>How would you rate your service with us</h2>
                
                <RatingSelect select ={(rating)=>setRating(rating)}/>

                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder='Write a review' 
                        onChange={handleTextChange} 
                        value={text}/>
                    
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>

                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm