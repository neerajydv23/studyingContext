import { useContext } from "react";
import { TodoContext, UserContext } from "./Context/Context";
import ContextProvider from "./Context/Context";

const App = () => {
  const { tasks, setTasks } = useContext(TodoContext);
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  console.log(tasks);
  return (
    <>
      <ContextProvider>
        {/* Your components here */}
      </ContextProvider>{" "}
    </>
  );
};

export default App;
