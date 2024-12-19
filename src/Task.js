import React, { useState } from 'react'

export default function Task() {
    // Store task and the day selected
    const [task, setTask] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [tasks, setTasks] = useState(Array(30).fill(""));


 // Add task to a specific day
    const addTask = () => {
        if (!task || !taskDate) {
            alert("Please enter both task and date.");
            return;
        }

         // Extract day of the month (1-31)
        const dayIndex = new Date(taskDate).getDate() ; // Get day index (0-29)

        
        // Ensure that dayIndex is between 0 and 29 for the 30-day calendar
        if (dayIndex >= 0 && dayIndex < 30) {
            const updatedTasks = [...tasks];
            updatedTasks[dayIndex] = task; // Assign task to the selected day
            setTasks(updatedTasks);
        }
        
        setTask(""); // Clear task input
        setTaskDate(""); // Clear date input

       
    };
 // Delete task from a specific day
    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = ""; // Remove task from the day
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-4">
             {/* Input Section */}
            <h2 className="mb-4">Task Scheduler</h2>
            <div className="row mb-4">

                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}

                    />
                </div>
                <div className="col-md-5">
                    <input
                        type="date"
                        className="form-control"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}

                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100 " onClick={addTask}>
                        Add Task
                    </button>
                </div>
            </div>

             {/* Calendar Section */}
            <h4 className="mb-3">30-Day Calendar</h4>
            <div className="row">
                {tasks.map((task, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <h6 className="card-title">Day {index + 1}</h6>
                                {task ? (
                                    <>
                                        <p>{task}</p>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete Task
                                        </button>
                                    </>
                                ) : (
                                    <p className="text-muted">No Task</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
