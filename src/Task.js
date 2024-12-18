import React from 'react'

export default function Task() {
    return (
        <div>
            <h2 className="mb-4">Task Scheduler</h2>
            <div className="row mb-4">
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Task"

                    />
                </div>
                <div className="col-md-5">
                    <input
                        type="date"
                        className="form-control"

                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100" >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}
