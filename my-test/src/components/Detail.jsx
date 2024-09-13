import { FaArrowLeft } from "react-icons/fa";
export default function Detail({ detailData, back }) {
    return (
        <div className="w-1/4 bg-stone-800 text-stone-200 my-5">
            {detailData && (
                <div className="p-4 my-4">
                    <div className="flex items-center">
                        <span
                            className="text-2xl mt-[-40px] bg-transparent hover:bg-stone-200 rounded-sm hover:text-stone-800 px-3 py-1"
                            onClick={back}
                        >
                            {" "}
                            <FaArrowLeft />
                        </span>
                        <h2 className="text-2xl font-bold mb-2 mt-[-15px] ml-8">Repository Details</h2>
                    </div>
                    <p>
                        <strong>Name:</strong> {detailData.name}
                    </p>
                    <p>
                        <strong>Description:</strong> {detailData.description || "No description"}
                    </p>
                    <p>
                        <strong>Language:</strong> {detailData.language || "N/A"}
                    </p>
                    <p>
                        <strong>Forks:</strong> {detailData.forks_count}
                    </p>
                    <p>
                        <strong>Author:</strong> {detailData.owner.login || "Unknown"}
                    </p>
                    <p>
                        <strong>Created at:</strong> {new Date(detailData.created_at).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Last updated:</strong> {new Date(detailData.updated_at).toLocaleDateString()}
                    </p>
                    {/* Thêm các trường khác bạn muốn hiển thị ở đây */}
                </div>
            )}
        </div>
    );
}
