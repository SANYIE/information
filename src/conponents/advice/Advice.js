import './Advice.css'
import axios from 'axios'
import {useState} from 'react'

const Advice = () => {
  const [advice, setAdvice] = useState('');


  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((respons) => {
    setAdvice(respons.data.slip.advice)
    console.log(respons)
    }).catch((error) => {
      setAdvice(error='Refresh the browser')
    })
    
  }
  
  return (


    <div className='advice'>

      <div className='advice-heading'>
        <p>Advice is a valuable resource offering guidance, diverse perspectives, and avenues for learning. It plays a pivotal role in decision-making, validating ideas, and empowering individuals while also serving to mitigate risks.</p>
      </div>

      <div className='advice-content'>
      <p>{advice}</p>
      <button onClick={getAdvice}>Click for some advice</button>

      </div>
      
    </div>
  )
}

export default Advice