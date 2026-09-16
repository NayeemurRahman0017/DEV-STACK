
import type { ITechList } from '../../types/techListType';
interface SideBarProps {
    stack: ITechList[];
    onRemove: (id: string) => void;
    onRemoveall: () => void;
}

const SideBar = ({ stack, onRemove, onRemoveall }: SideBarProps) => {
    const total = stack.length;

    return (
        
            <aside
                id="SideBar"
                className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-900">
                            Your stack
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            {total}{" "}
                            {total === 1 ? 'TechCard' : 'Techcards'} Selected
                        </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 font-bold text-pink-600">
                        {total}
                    </div>
                </div>
                {total > 0 && (
                    <>
                        <div className="mt-5 space-y-3">
                            {stack.map((tech) => (
                                <div key={tech.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                    <span className="text-sm font-medium text-slate-700">{tech.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => onRemove(tech.id)}
                                        className="text-xs font-semibold text-pink-600 hover:text-pink-700"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={onRemoveall}
                            className="mt-5 w-full rounded-xl border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-50"
                        >
                            Remove All
                        </button>
                    </>
                )}
            </aside>
        
       
    );
};

export default SideBar;