import { useEffect, useState } from "react";
import {
  deleteItem,
  getPendingItems,
  patchItemTitle, // ✅ ekle
  type Item,
} from "./services/moderationService";
import "./App.css";
import { getErrorMessage } from "./api/error";

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<number | null>(null);


  async function load() {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getPendingItems();
      setItems(data);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function deleteFunc(id: number) {
    setError(null);
    setSavingId(id);
    try {
      await deleteItem(id);
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    }finally{
      setSavingId(null);
    }
  }




  async function updateTitleOptimistic(id: number, newTitle: string) {
    setError(null);
    setSavingId(id)
    const prevItems = items;
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, title: newTitle } : item))
    );

    try {
      await patchItemTitle(id, newTitle);
    } catch (err: unknown) {
      setItems(prevItems);
      setError(getErrorMessage(err));
    }finally{
      setSavingId(null);
    }
  }



  return (
    <>
      <h1>{loading ? "Yükleniyor..." : "Hoş geldiniz!"}</h1>
      {error && <p style={{ color: "crimson" }}>Hata: {error}</p>}

      <ul>
        {items.map((a) => (
          <li key={a.id}>
            {a.title}{" "}
            <button onClick={() => deleteFunc(a.id)} disabled={savingId === a.id}>
              Delete
            </button>
            <button
              onClick={() => updateTitleOptimistic(a.id, `✅ ${a.title}`)}
              disabled={savingId === a.id}
            >
              Approve
            </button>
            <button
              onClick={() => updateTitleOptimistic(a.id, `❌ ${a.title}`)}
              disabled={savingId === a.id}
            >
              Reject
            </button>
          </li>
        ))}
      </ul>

      <button onClick={load} disabled={loading}>
        Refresh
      </button>
    </>
  );
}

export default App;
