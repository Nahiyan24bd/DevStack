import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { TechnologyItem, TechnologyProps } from '../Types/TechnologisType';

const Technology: React.FC<TechnologyProps> = ({ techData = [] }) => {
  const [selectedStack, setSelectedStack] = useState<TechnologyItem[]>([]);

  const handleAddToStack = (tech: TechnologyItem) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`"${tech.name}" is already in your stack!`, { position: 'bottom-right', autoClose: 2500 });
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`"${tech.name}" added to your stack!`, { position: 'bottom-right', autoClose: 2000 });
  };

  const handleRemoveItem = (item: TechnologyItem) => {
    setSelectedStack((prev) => prev.filter((tech) => tech.id !== item.id));
    toast.info(`Removed "${item.name}" from stack`, { position: 'bottom-right', autoClose: 2000 });
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('All technologies removed from stack!', { position: 'bottom-right', autoClose: 2000 });
  };

  return (
    <section id="technologies" className="py-12 md:py-16 bg-[#FAFAFA] min-h-screen">
      {/* ToastContainer Dowen left */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the{' '}
            <span className="bg-linear-to-r from-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content Layout: Grid (Left) + Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Technology Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {techData.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 flex items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-100">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://icon.icepanel.io/Technology/svg/React.svg';
                          }}
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-100">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>
                    <p className="mt-2 min-h-12 text-xs leading-relaxed text-slate-500">
                      {tech.description}
                    </p>

                    {/* Meta Chips: Category, Difficulty, Rating */}
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {tech.category}
                      </span>
                      <span className="text-slate-500">{tech.difficulty}</span>
                      <div className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
                        <span className="text-amber-400">★</span>
                        <span>{tech.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Stack Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToStack(tech)}
                    disabled={isAdded}
                    className={`mt-6 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                      isAdded
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                        : 'bg-slate-950 hover:bg-slate-800 text-white shadow-sm active:scale-[0.98]'
                    }`}
                  >
                    {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar Panel */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
              <p className="mt-1 text-sm text-slate-400">
                {selectedStack.length > 0
                  ? `${selectedStack.length} Technology Selected`
                  : 'No technologies selected yet.'}
              </p>

              {/* Stack Items List */}
              <div className="mt-6 space-y-3">
                {selectedStack.length === 0 ? (
                  /* Empty State */
                  <div className="border border-dashed border-slate-200 rounded-xl py-9 px-4 text-center">
                    <p className="text-sm font-medium text-slate-400">Your stack is empty.</p>
                  </div>
                ) : (
                  /* Added Items */
                  selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-8 w-8 shrink-0 object-contain"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://icon.icepanel.io/Technology/svg/React.svg';
                          }}
                        />
                        <div className="truncate">
                          <p className="text-sm font-bold text-slate-800 leading-none truncate">
                            {item.name}
                          </p>
                          <span className="text-[11px] text-slate-400 block mt-1">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Remove Single Item Button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 rounded-md transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Remove All Button */}
              {selectedStack.length > 0 && (
                <button
                  type="button"
                  onClick={handleRemoveAll}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl border border-rose-300 text-rose-500 hover:bg-rose-50/70 active:scale-[0.98] text-sm font-semibold transition-all duration-150"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;