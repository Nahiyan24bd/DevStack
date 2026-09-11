import { useState, useEffect } from 'react';
import Nav from './Component/Nav';
import Banner from './Component/Banner';
import Technology from './Component/Technology';
import type { TechnologyItem } from './Types/TechnologisType';
import Footer from './Component/Footer';

function App() {
  const [techData, setTechData] = useState<TechnologyItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/Data.json');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data: TechnologyItem[] = await response.json();
        setTechData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-[#FAFAFA]">
          <div className="w-10 h-10 border-4 border-pink-500/20 border-t-pink-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium text-base">Loading...</p>
        </div>
      ) : (
        <Technology techData={techData} />
      )}
      <Footer />
    </>
  );
}

export default App;