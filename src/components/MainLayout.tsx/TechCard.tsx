
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
                <article key={tech.name} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5
                    shadow-sm transition duration-300 hover:-translate-y-1
                    hover:border-pink-200 hover:shadow-xl">

                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2">
                            <img src={tech.icon} alt={`${tech.name} icon`} className="h-10 w-10 object-contain transition duration-300
                            group-hover:scale-110" />
                        </div>
                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800">{tech.badge}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                        <p className="mt-3 min-h-18 test-sm leading-6 text-slate-500">{tech.description}</p>
                        <div className="mt-5 flex items-center justify-between gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{tech.category}</span>
                            <span className="text-xs font-medium text-slate-500">{tech.difficulty}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-1">
                        <span className="text-lg">⭐</span>
                        <span className="font-bold text-slate-400">{tech.rating}</span>
                        <span className="text-sm text-slate-400">/5</span>


                    </div>
                    <button
                        onClick={() => onAdd(tech)}
                        disabled={isAdded}
                        className={`mt-auto w-full rounded-xl px-4 py-3 text-sm font-bold transition ${
                            isAdded
                                ? 'cursor-not-allowed bg-green-100 text-green-700'
                                : 'bg-linear-to-r from-pink-500 to-orange-400 text-white hover:-translate-y-0.        5 hover:shadow-lg'
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