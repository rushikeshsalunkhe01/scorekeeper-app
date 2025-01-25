import { useState, useEffect } from "react";
import ScoreCard from "../components/ScoreCard";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);
  const MAX_SCORE = 15;

  useEffect(() => {
    if (scoreA >= MAX_SCORE) {
      setWinner("Team Alpha");
      toast.success("Team Alpha takes the victory! 🎉");
    } else if (scoreB >= MAX_SCORE) {
      setWinner("Team Bravo");
      toast.success("Team Bravo emerges victorious! 🎉");
    }
  }, [scoreA, scoreB]);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        VictoryScore
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <ScoreCard
          score={scoreA}
          increaseScore={() => setScoreA(scoreA + 1)}
          decreaseScore={() => setScoreA(Math.max(0, scoreA - 1))}
          teamName="Team Alpha"
          winner={winner}
        />
        <ScoreCard
          score={scoreB}
          increaseScore={() => setScoreB(scoreB + 1)}
          decreaseScore={() => setScoreB(Math.max(0, scoreB - 1))}
          teamName="Team Bravo"
          winner={winner}
        />
      </div>
      {winner && (
        <div className="text-center mt-8">
          <p className="text-xl font-bold text-gray-800">
            Congratulations, <span className="text-indigo-600">{winner}!</span>
          </p>
          <button
            onClick={() => {
              setScoreA(0);
              setScoreB(0);
              setWinner(null);
            }}
            className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
          >
            Reset Game
          </button>
        </div>
      )}
      <Toaster />
    </div>
  );
}
