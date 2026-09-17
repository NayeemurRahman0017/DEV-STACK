
import type { ITechList } from "../../types/techListType";

interface SideBarProps {
  stack: ITechList[];
  onRemove: (id: string) => void;
  onRemoveall: () => void;
}

const SideBar = ({
  stack,
  onRemove,
  onRemoveall,
}: SideBarProps) => {
  return (
    <aside className="rounded-xl border border-slate-200 bg-orange-200 p-4 shadow-sm">

 
      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-800">
          Your Stack
        </h3>

        <p className="mt-1 text-[10px] text-slate-400">
          {stack.length} Technology Selected
        </p>
      </div>

    
      <div className="space-y-2">
        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center">
            <p className="text-xs text-slate-400">
              No technology selected
            </p>
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                {tech.icon && (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-6 w-6 object-contain"
                  />
                )}

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    {tech.name}
                  </p>

                  <p className="text-[9px] text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(tech.id)}
                className="text-lg leading-none text-slate-400 transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      
      {stack.length > 0 && (
        <button
          onClick={onRemoveall}
          className="mt-5 w-full rounded-md border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};
export default SideBar;