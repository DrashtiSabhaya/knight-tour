import { useMemo, useState } from "react";
import { calculateTourPosibilities } from "../utils/helper";
import ChessBoard from "../components/ChessBoard/ChessBoard";
import { KnightPosition } from "../constants/types";
import AllowedPosition from "../components/AllowedPosition";

const Dashboard: React.FC = () => {
  const [positionValue, setPositionValue] = useState<KnightPosition>({
    row: "",
    col: "",
  });

  const possibleMoves: number[][] = useMemo(
    () => calculateTourPosibilities(positionValue),
    [positionValue]
  );

  const setInputValues = (position: string, value: string) => {
    if (value.length > 1 || parseInt(value) > 8) return;
    setPositionValue({ ...positionValue, [position]: value });
  };

  return (
    <div className="App">
      <div className="input-container">
        <label>Enter Values</label>
        <input
          type="number"
          value={positionValue.row}
          onChange={(e) => setInputValues("row", e.target.value)}
          max={8}
          min={1}
          maxLength={1}
          pattern="([^0-8])\w{0}"
          placeholder="Row"
        />
        <input
          type="number"
          value={positionValue.col}
          onChange={(e) => setInputValues("col", e.target.value)}
          max={8}
          min={1}
          maxLength={1}
          pattern="([^0-8])\w{0}"
          placeholder="Column"
        />
      </div>
      <ChessBoard knightPosition={positionValue} />
      <AllowedPosition possibleMoves={possibleMoves} />
    </div>
  );
};

export default Dashboard;
