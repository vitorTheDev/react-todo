import { createContext, useContext } from "react"
import Surreal from "surrealdb.wasm"

const DbContext = createContext(new Surreal());

export const useDb = () => {
  return useContext(DbContext);
};

export const connectDb = async (db: Surreal) => {
  try {
    // Connect to the database
    await db.connect('indxdb://reactTodo', {});

    // Select a specific namespace / database
    await db.use({ ns: "reactTodo", db: "reactTodo" });
    return db;
  } catch (e) {
    console.error("DB ERROR", e);
  }
}