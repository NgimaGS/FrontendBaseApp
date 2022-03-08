import React from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import useKanbanBoard from "../../../hooks/component/kanban/board/useKanbanBoard";

const KanbanBoard = ({ card }) => {
  const { handleCardMove, controlledBoard } = useKanbanBoard(card);
  return (
    <>
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
    </>
  );
};

export default KanbanBoard;
