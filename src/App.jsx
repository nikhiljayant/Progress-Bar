import React from "react"
// Components
import ProgressBar from "./components/ProgressBar"

function App() {

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1 className="font-medium text-2xl">Progress Bar</h1>
      <ProgressBar />
    </div>
  )
}

export default App
