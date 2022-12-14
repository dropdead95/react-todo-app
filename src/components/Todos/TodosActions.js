import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

function TodosActions({
  resetTodosHandler,
  deleteCompletedTodosHandler,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodosHandler} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodoExist}
        onClick={deleteCompletedTodosHandler}
        title="Clear completed todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
