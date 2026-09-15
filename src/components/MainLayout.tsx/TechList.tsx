import React, { use } from 'react';

const TechList = ({ techListPromise }) => {
    console.log(techListPromise());
    const techList = use(techListPromise());
    return (
        <div>
            
        </div>
    );
};

export default TechList;