import {useState} from 'react'
function useLocalStorage(key, initialValue){
    const [localStorageValue, setLocalStorageValue] = useState(() => 
        getLocaStorageValue(key, initialValue))

    const setValue = (value)=>{
        //check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value

        //set to state
        setLocalStorageValue(value)
        //set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

function getLocaStorageValue(key, initialValue){
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage