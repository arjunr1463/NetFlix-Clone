import  { createContext, useState } from "react";
export const firecontext = createContext(null);
export const context = createContext(null);

export default function Display({children}){


    const[user,setUser]=useState(null)
    return(
        <context.Provider value={{user,setUser}}>
            {children}
        </context.Provider>
    )

}
