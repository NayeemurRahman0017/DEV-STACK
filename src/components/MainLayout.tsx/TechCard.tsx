
import type { ITechList } from "../../types/techListType";
import{toast} from "react-toastify"

interface TechCardProps {
  tech: ITechList;
  isAdded: boolean;
  onAdd: (tech: ITechList) => void;
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
    const handleAdd=(tech: ITechList)=>{
        if(!isAdded){onAdd(tech);
            toast.success(`${tech.name} added to your stack`);
        }
    }
  return (
    <div className="group flex min-h-63.75 flex-col rounded-xl border border-gray-200 bg-gray-400 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

    
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-xl">
          {tech.icon ? (
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-7 w-7 object-contain"
            />
          ) : (
            "⚡"
          )}
        </div>

        {tech.badge && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-500">
            {tech.badge}
          </span>
        )}
      </div>

      
      <div className="mt-4 flex-1">
        <h3 className="text-base font-bold text-slate-800">
          {tech.name}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {tech.description}
        </p>
      </div>
  
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1">
          {tech.category}
        </span>

        <span className="text-semibold">{tech.difficulty}</span>

        <span className="font-semibold text-slate-600">
          ⭐ {tech.rating}
        </span>
      </div>

    
      <button onClick={() => handleAdd(tech)} disabled={isAdded} className={`mt-3 w-full rounded-md py-2.5 text-xs font-medium transition ${ isAdded ? 'cursor-not-allowed bg-green-100 text-green-700' : 'bg-linear-to-r from-pink-500 to-orange-400 text-white hover:-translate-y-0.5 hover:shadow-lg' }`} > 
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'} </button>
    </div>
  );
};

export default TechCard;