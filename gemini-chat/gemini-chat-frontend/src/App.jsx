import { useState } from 'react'
import './App.css'
import ChatInput from './ChatInput'
import ChatResponse from './ChatResponse'
import { fetchChatResponse } from './service/api';

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try{
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    }catch(error){
      alert("failed to get response");
    }finally{
      setLoading (false);
    }
  }
  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit}/>
      <ChatResponse response={response} />
      
    </div>
  )
}

export default App
