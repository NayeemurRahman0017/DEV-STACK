
import type { ITechList } from '../../types/techListType';
interface TechCardProps {
    techList: ITechList[];
    isAdded: boolean;
    onAdd: (tech: ITechList) => void;
}
const TechCard = ({ techList, isAdded, onAdd }: TechCardProps) => {

    return (
        <>
        
        
            {techList.map((tech: ITechList) => (
                <article key={tech.name} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-gray-300 p-2 shadow-sm hover:border-pink-200 hover:shadow-xl">
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2">
                                <img src={tech.icon} alt={`${tech.name} icon`} className="h-10 w-10 object-contain transition duration-300 group-hover:scale-110" />
                            </div>
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800">{tech.badge}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                        <p className="mt-3 min-h-18 text-sm leading-6 text-slate-500">{tech.description}</p>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                            <span className="rounded-full bg-blue-500 px-1 py-1 text-xs font-normal text-black-600">{tech.category}</span>
                            <span className="text-xs font-normal text-slate-500">{tech.difficulty}</span>
                            <span className="text-sm">⭐</span>
                            <span className="text-sm text-slate-400">{tech.rating}/5</span>
                        </div>
                    </div>
                    <button
                        onClick={() => onAdd(tech)}
                        disabled={isAdded}
                        className={`mt-auto w-full rounded-xl px-4 py-3 text-sm font-bold transition ${
                            isAdded
                                ? 'cursor-not-allowed bg-green-100 text-green-700'
                                : 'bg-linear-to-r from-pink-500 to-orange-400 text-white hover:-translate-y-0.5 hover:shadow-lg'
                        }`}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </article>
            ))}
        
        </>
    );
};

export default TechCard;