import { CirclePlus, CircleMinus } from "lucide-react";

export default function ScoreCard({ score, increaseScore, decreaseScore, teamName, winner }) {
  const isWinner = winner === teamName;

  return (
    <div className="w-full md:w-1/3 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className={`text-2xl font-bold text-center ${isWinner ? "text-green-800" : "text-gray-800"}`}>
        {teamName} {isWinner ? "🎉" : ""}
      </h2>
      <p className="text-6xl font-extrabold text-center my-8 text-gray-700">{score}</p>
      {!winner && (
        <div className="flex justify-around">
          <button onClick={decreaseScore} className="text-red-600 hover:text-red-800">
            <CircleMinus size={48} />
          </button>
          <button onClick={increaseScore} className="text-green-600 hover:text-green-800">
            <CirclePlus size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
