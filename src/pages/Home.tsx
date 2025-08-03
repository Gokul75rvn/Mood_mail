import Modin from '@/components/ui/Modin'
import { useState } from 'react';
import Modop from '@/components/Modop'

const Home = () => {

    const [mood,setMood] = useState("");
    const [subject,setSubject] = useState("test");
    const [footer,setFooter] = useState("tester");
    const [genereted,setGenereted] = useState(false);
    const handleGenarete = () => {
    const lowerMood = mood.toLowerCase();
    console.log(lowerMood);   
    if(lowerMood.includes("happy")) {
        setSubject("Happy Mail");
        setFooter("Stay Happy!");
    }
    else if(lowerMood.includes("sad")) {
        setSubject("Sad Mail");
        setFooter("Stay Strong!");
    }
    else if(lowerMood.includes("angry")) {
        setSubject("Angry Mail");
        setFooter("Calm Down!");
    }
    else {
        setSubject("Neutral Mail");
        setFooter("Keep Going!");
    }

setGenereted(true)

}

const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenereted(false);
}
  return (
    <div className='max-w-xl mx-auto p-4 mt-20 p-6 rounded-lg shadow-lg bg-white space-y-6'>
     <h2 className='text-2xl font-bold text-blue-800'>Mood Mail Generator</h2>
     {!genereted ? (
         <Modin mood = {mood} setMood={setMood} onGenerate={handleGenarete} disabled = {genereted}/>):(
             <Modop subject={subject} footer={footer} onReset={handleReset}/>
         )}
   
    </div>
  )
}

export default Home
