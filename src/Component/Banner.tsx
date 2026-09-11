import banner from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Heading, Description, and CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal{' '}
              <span className="block mt-1 bg-linear-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-linear-to-r from-[#F97316] to-[#E11D48] hover:opacity-95 shadow-md shadow-pink-500/20 active:scale-95 transition-all duration-150"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-150"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src={banner}
                alt="Development Stack Visual"
                className="w-full h-auto object-contain select-none drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;