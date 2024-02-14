import { createContext } from "react";

const userContext = createContext({
  name: "no user",
});

export default userContext;
