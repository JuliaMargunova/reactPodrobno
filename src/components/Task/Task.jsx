import React from 'react';

export default function Task({ task: { id:string, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className="list-item">
            <label htmlFor="title" aria-label={title}>
                <input type="text" value={title} readOnly={true} name="title" />
            </label>
        </div>
    );
}