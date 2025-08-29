import React from "react";
 
interface MotivationalMessageProps {
  message: string;
  author: string;
}
 
const MotivationalMessage: React.FC<MotivationalMessageProps> = ({ message, author }) => {
  return (
<div style={{ margin: "20px", fontStyle: "italic" }}>
<p>"{message}"</p>
<p>– {author}</p>
</div>
  );
};
 
export default MotivationalMessage;