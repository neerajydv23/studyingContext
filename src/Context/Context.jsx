import React, { createContext, useState } from 'react'

export const TodoContext = createContext(null);
export const UserContext = createContext(null);

const ContextProvider = (props) => {
    const [tasks, setTasks] = useState([{title:"Task 1", completed: false}]);
    const [user, setUser] = useState({name:"John Doe", surname:"heis"});

    return (
        <TodoContext.Provider value={{tasks, setTasks}}>
            <UserContext.Provider value={{user, setUser}}>
                {props.children}
            </UserContext.Provider>
        </TodoContext.Provider>
    )
}

export default ContextProvider;