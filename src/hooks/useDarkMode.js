import {useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (key, initialValue) => {

    const [toggle, setToggle] = useLocalStorage(key, initialValue)
    
    useEffect(() => {
        if (toggle === true){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [toggle])

    return [toggle, setToggle]
}