import React from 'react';

const Team = ({ team }) => {
    const teamList = team.map(tea => {
        return (
            <div className="team" key={tea.id}>
                <div>Name: {tea.name}</div>
                <div>Age: {tea.age}</div>
                <div>Belt: {tea.belt}</div>
                <button>Delete Ninja</button>
            </div>
        )
    })

    return (
        <div className="">
            {teamList}
        </div>
    )
}

export default Team