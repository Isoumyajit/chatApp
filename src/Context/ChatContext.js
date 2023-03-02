import { createContext, useContext, useReducer } from "react";
import { authContext } from "./context";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(authContext);
  const initial_state = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, initial_state);

  return (
    <ChatContext.Provider value={{ userData: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
