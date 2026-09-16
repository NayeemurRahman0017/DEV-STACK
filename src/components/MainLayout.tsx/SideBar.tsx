
import { FiX } from 'react-icons/fi';
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
                className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-900">
                            Your stack
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            {stack.length}{" "}
                            {stack.length === 1 ? 'TechCard' : 'Techcards'} Selected
                        </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 font-bold text-pink-600">
                        {total}
                    </div>
                </div>
                
                        {
                            stack.length===0?(
                                <div className="py-12 text-center">
                                    <p className="text-sm text-gray-500">
                                        Your stack is empty.
                                    </p>
                                    <p className="mt-1 text-xs text-gray-400">
                                        Add technologies to build your stack.
                                    </p>
                                    </div>):(
                                        <div className="mt-5 space-y-3">
                                            {stack.map((tech) => (
                                                <div
                                                    key={tech.id}
                                                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 py-3"
                                                >
                                                    <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="truncate text-sm font-semibold text-gray-900">
                                                            {tech.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-500">{tech.category}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => onRemove(tech.id)}
                                                        className="rounded-lg p-2 text-gray-400 hover:bg-red-100 hover:text-red-500"
                                                        aria-label={`remove ${tech.name}`}
                                                    >
                                                        <FiX />
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={onRemoveall}
                                                className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
                                            >
                                                Remove All
                                            </button>
                                        </div>
                                                    )}
                                                        </aside>
                                                    );
                                                    };

                                                    
                                                

export default SideBar;