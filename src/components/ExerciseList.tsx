import React from "react";
 
const ExerciseList: React.FC = () => {
  const exercises = [
    { name: "Flexão", reps: "3x15" },
    { name: "Agachamento", reps: "4x12" },
    { name: "Prancha", reps: "3x60s" },
  ];
 
  return (
<div style={{ margin: "20px" }}>
<h2>Lista de Exercícios</h2>
<ul>
        {exercises.map((ex, index) => (
<li key={index}>
            {ex.name} – {ex.reps}
</li>
        ))}
</ul>
</div>
  );
};
 
export default ExerciseList;