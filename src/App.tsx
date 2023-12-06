import styles from "./app.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { MainButton } from "./components/MainButton";
import { TextInput } from "./components/TextInput";
import { ListHeader } from "./components/list/ListHeader";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentValue) => {
    if (currentValue.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <TextInput
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <MainButton onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </MainButton>
        </div>
        <div>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
