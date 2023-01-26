import { useEffect } from "react";

interface Props {
  possibleMoves: number[][];
}

const AllowedPosition: React.FC<Props> = ({ possibleMoves }) => {
  useEffect(() => {
    return () => {
      possibleMoves.map((move: number[]) => {
        const element = document.getElementById(`${move[0]}${move[1]}`);
        return element?.classList.remove("move-allowed");
      });
    };
  }, [possibleMoves]);

  return (
    <div className="move-list">
      {possibleMoves.map((move: number[]) => {
        const element = document.getElementById(`${move[0]}${move[1]}`);
        element?.classList.add("move-allowed");
        return <div key={move.toString()}>{`[${move[0]}, ${move[1]}]`}</div>;
      })}
    </div>
  );
};

export default AllowedPosition;
