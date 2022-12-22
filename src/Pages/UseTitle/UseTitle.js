import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - FiCar`;
    },[title ])
};

export default useTitle;