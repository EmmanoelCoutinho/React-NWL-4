import { createContext, ReactNode, useState } from 'react'
import challanges from '../../challanges.json'

interface ChallangesProviderProps {
  children: ReactNode,
}

interface Challange {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallangesContexData {
  level: number
  currentExperience: number
  challangesCompleted: number
  experienceToNextLevel: number
  activeChallange: Challange
  levelUp: () => void
  newChallange: () => void
  resetChallange: () => void
}

export const ChallangesContext = createContext({} as ChallangesContexData)

export function ChallangesProvider({ children }: ChallangesProviderProps) {
  const [level, setLevel ] = useState(1)
  const [ currentExperience, setCurrentExperience ] = useState(0)
  const [ challangesCompleted, setChallangesCompleted ] = useState(0)

  const [ activeChallange, setActiveChallange ] = useState(null)

  //const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function newChallange() {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length)
    const challange = challanges[randomChallangeIndex]
    
    setActiveChallange(challange)
  }

  function resetChallange() {
    setActiveChallange(null)
  }

  function levelUp() {
    setLevel(level +1);
  }
  return(
    <ChallangesContext.Provider value={{
      level,
      currentExperience,
      challangesCompleted,
      levelUp,
      newChallange,
      activeChallange,
      resetChallange,
      experienceToNextLevel
      }} >
      {children}
    </ChallangesContext.Provider>
  )
}