import { useEffect, useState } from "react";
import WareHouseTable from "./components/WareHouseTable";
import axios from "axios";
import Detail from "./components/Detail";
function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3000/repos")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (error) return <h2>{error.message}</h2>;
    return (
        <main>
            <h1 className="text-center text-3xl font-bold">List of repositories</h1>
            <WareHouseTable data={data} />
        </main>
    );
}

export default App;
