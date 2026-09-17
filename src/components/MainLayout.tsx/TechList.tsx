
import { use, useState } from "react";
import type { ITechList } from "../../types/techListType";
import TechCard from "./TechCard";
import SideBar from "./SideBar";

interface TechListProps {
  techListPromise: () => Promise<ITechList[]>;
}

const TechList = ({ techListPromise }: TechListProps) => {
  const techList = use(techListPromise());

  const [stack, setStack] = useState<ITechList[]>([]);

  const handleAddToStack = (tech: ITechList) => {
    setStack((prev) => {
      if (prev.some((item) => item.id === tech.id)) {
        return prev;
      }

      return [...prev, tech];
    });
  };

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section id="technologies" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

      
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Explore{" "} the
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

      
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">

  
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-3">
            {techList.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAddToStack}
              />
            ))}
          </div>

      
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SideBar
              stack={stack}
              onRemove={handleRemove}
              onRemoveall={handleRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechList;
