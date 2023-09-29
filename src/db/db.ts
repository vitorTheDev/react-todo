
import { Surreal } from 'surrealdb.wasm';

const createDb = async () => {
  const db = new Surreal();
  try {
    // Connect to the database
    await db.connect('indxdb://reactTodo', {});

    // Select a specific namespace / database
    await db.use({ ns: "reactTodo", db: "reactTodo" });
    return db;
  } catch (e) {
    console.error("ERROR", e);
  }
}

let _db: Surreal | undefined;

export const surrealDb = async () => {
  if (!_db) {
    _db = await createDb()
  }
  return _db
}
