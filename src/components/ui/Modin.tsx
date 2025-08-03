

import {Input} from '@/components/ui/input'
import { Button  } from "@/components/ui/button";

type Props = {

  mood:string,
  setMood: (val:string) =>void,
  onGenerate:() => void,
  disabled:boolean

}


const Modin = ({mood,setMood,onGenerate,disabled}:Props) => {
  return (
    <div className='space-y-4 '>
       <Input
       placeholder='How you Felling today?'
       value={mood}
       onChange={e => setMood(e.target.value)}
       disabled = {disabled}
       />
     <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white' onClick={onGenerate} disabled={disabled}>Generate</Button>

    </div>
  )
}

export default Modin
