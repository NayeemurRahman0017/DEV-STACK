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
        <div className="container mx-auto flex justify-between items-center ">
            
       
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
                <div className="mb-8 text-left">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Explore the{" "}
                        <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="mt-2 text-base font-normal text-slate-500">
                        Pick one technologyper category to build your ideal stack.
                    </p>
                </div>
                
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
            </div>
            <div className="min-w-0">
                <SideBar
                stack={stack}
                onRemove={handleremove}
                onRemoveall={handleRemoveall}/>
            </div>
            
                
                    
                </div>
                </div>
                
                
        

    );
};

export default TechList;