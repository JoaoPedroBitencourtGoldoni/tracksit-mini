import React from "react";
import Welcome from "./components/Welcome";
import ExerciseList from "./components/ExerciseList";
import MotivationalMessage from "./components/MotivationalMessage";
 
const App: React.FC = () => {
  return (
<div>
<Welcome />
<ExerciseList />
<MotivationalMessage 
        message="O corpo alcança o que a mente acredita." 
        author="Autor Desconhecido" 
      />
</div>
  );
};
 
export default App;
