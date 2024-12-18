import React, { useState } from 'react'

export default function Task() {
    const [task, setTask] = useState("");
    const [taskDate, setTaskDate] = useState("");
    return (
        <div>
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
                    <button className="btn btn-primary w-100" >
                        Add Task
                    </button>
                </div>
            </div>

            <h4 className="mb-3">30-Day Calendar</h4>
            <div className="row">

                <div className="col-6 col-md-4 col-lg-3 mb-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6 className="card-title">Day</h6>

                            <>
                                <p></p>
                                <button
                                    className="btn btn-danger btn-sm"

                                >
                                    Delete Task
                                </button>
                            </>

                            <p className="text-muted">No Task</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
