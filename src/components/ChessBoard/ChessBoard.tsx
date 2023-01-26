import { memo } from "react";
import "./chessboard.css";
import { KnightPosition } from "../../constants/types";

interface Props {
  knightPosition: KnightPosition;
}

const ChessBoard = ({ knightPosition }: Props) => {
  return (
    <table className="board">
      <tbody>
        {Array.apply(null, Array(8)).map(function (_, i) {
          return (
            <tr className="cell" key={i}>
              {Array.apply(null, Array(8)).map(function (_, j) {
                return (
                  <td className={(i + j) % 2 === 0 ? "whitecell" : "blackcell"} key={`${i}${j}`}>
                    {i + 1}, {j + 1}
                    {knightPosition.row === `${i + 1}` && knightPosition.col === `${j + 1}` && (
                      <div className="knight">♘</div>
                    )}
                    <div id={`${i + 1}${j + 1}`} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(ChessBoard);
