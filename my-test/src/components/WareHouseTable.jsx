import { useState } from "react";
import Detail from "./Detail";

export default function WareHouseTable({ data }) {
    const languages = ["All", ...new Set(data.map((d) => d.language).filter(Boolean))]; //trả lại 1 mảng chứa All và các language duy nhất từ api
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [display, setDisplay] = useState("");
    const [selectedRepo, setSelectedRepo] = useState(null);

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        setSelectedLanguage(language);
    };

    // Lọc dữ liệu dựa trên language
    const filteredData = selectedLanguage === "All" ? data : data.filter((d) => d.language === selectedLanguage);

    // Sắp xếp dữ liệu theo ngày tạo mới nhất
    const sortedData = filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Hàm xử lý khi nhấn nút Details
    const handleDetailsClick = (repo) => {
        setSelectedRepo(<Detail detailData={repo} back={handleBack} />);
        setDisplay("hidden");
    };

    const handleBack = () => {
        setDisplay("block");
        setSelectedRepo("");
    };
    return (
        <>
            <div className={`${display}`}>
                <label className="text-xl">Please select a language: </label>
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="border-2 px-2 border-stone-900"
                >
                    {languages.map((lang, index) => (
                        <option key={index} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>

                {/* Bảng hiển thị dữ liệu */}
                <table className="w-full border-2 border-collapse my-10">
                    <thead>
                        <tr>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Description</th>
                            <th className="p-2 border">Language</th>
                            <th className="p-2 border">Forks</th>
                            <th className="p-2 border">Detail of repositories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((d, index) => (
                            <tr key={index}>
                                <td className="p-2 border">{d.name}</td>
                                <td className="p-2 border">{d.description || "No description"}</td>
                                <td className="p-2 border">{d.language || "N/A"}</td>
                                <td className="p-2 border">{d.forks_count}</td>
                                <td className="p-2 border flex justify-center">
                                    <button
                                        className="bg-orange-200 py-1 px-3 rounded-md hover:bg-orange-400"
                                        onClick={() => handleDetailsClick(d)}
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <section className="flex items-center justify-center"> {selectedRepo}</section>
        </>
    );
}
