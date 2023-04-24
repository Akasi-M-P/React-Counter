import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactClassForm from "./react-class-form";
import ClassStudentForm from "./ClassStudentForm";
import FunctionStudentForm from "./FunctionStudentForm";

function App() {
  return (
    <div>
      {/* <ReactClassForm /> */}
      <ClassStudentForm />
      <FunctionStudentForm />
    </div>
  );
}

export default App;
