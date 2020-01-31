import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
    // https://www.w3schools.com/jsref/jsref_map.asp
    // using itenery operator
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
                {/* <button onClick={ deleteNinja(ninja.id) }>Delete Ninja</button> */}
            </div>
        ) : null;
    })

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas

    //console.log(this.props);
    //const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    // using if statement
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })