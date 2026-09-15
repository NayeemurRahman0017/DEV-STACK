import { use, useState } from 'react';
import type { ITechList } from '../../types/techListType';
import TechCard from './TechCard';
import SideBar from './SideBar';

const TechList = ({ techListPromise }: { techListPromise: () => Promise<ITechList[]> }) => {

    const TechList = use(techListPromise());
    const [stack, setStack] = useState<ITechList[]>([]);
    const handleAddToStack=(tech:ITechList)=>{
        setStack((prev) => {
            if(prev.some((item)=> item.id===tech.id)){
                return prev;
            } return[...prev,tech];
        });
    };
    const handleremove=(id: string)=>{
        setStack((prev: ITechList[]) => prev.filter((item: ITechList) => item.id !== id));
    };
    const handleRemoveall=() =>{
        setStack([]);
    };
    return (
        <div className="grid grid-cols-3gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
                <div className="grid grid-cols-3 gap-3 md;grid-cols-1">
                    {TechList.map((tech) =>
                    (
                        <TechCard
                            key={tech.id}
                            techList={[tech]}
                            isAdded={stack.some(
                                (item) => item.id === tech.id
                            )}
                            onAdd={handleAddToStack}
                        />
                    ))}
                </div>
            </div><div>
                <SideBar
                stack={stack}
                onRemove={handleremove}
                onRemoveall={handleRemoveall}/>
            </div>
            
                
                    
                
        </div>
    );
};

export default TechList;