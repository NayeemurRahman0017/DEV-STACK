import React, { use } from 'react';
import type { ITechList } from '../../types/techListType';
import TechCard from './TechCard';

const TechList = ({ techListPromise }: { techListPromise: () => Promise<ITechList[]> }) => {
    console.log(techListPromise());
    const TechList = use(techListPromise());
    return (
        <div>
            <TechCard TechList={TechList} isAdded={false} onAdd={() => {}} />
        </div>
    );
};

export default TechList;