import React from 'react';
import HogwartsHouse from '../../assets/images/hogwartshouse.jpg';

const Greeting = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Hero Header Section */}
      <header className="py-12 px-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl tracking-wider text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 uppercase">
          Hogwarts School of Witchcraft and Wizardry
        </h1>
        <p className="text-center text-slate-400 mt-2 text-sm md:text-base italic tracking-widest">
          Draco Dormiens Nunquam Titillandus
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Welcome & Feature Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900/40 p-6 md:p-10 rounded-2xl border border-slate-800 shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src={HogwartsHouse} 
                alt="Hogwarts Crest and Houses" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h2 className="text-2xl font-bold text-amber-400 tracking-wide uppercase mt-4">
              The Four Houses
            </h2>
            <p className="text-sm text-slate-400 max-w-sm">
              Gryffindor, Hufflepuff, Ravenclaw, and Slytherin. Bound together in history, divided by character traits.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 border-b-2 border-amber-500/30 pb-3">
              Welcome to Hogwarts
            </h2>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Established around the 10th century, Hogwarts is regarded as one of the finest magical institutions in the wizarding world. Hidden deep in the Scottish Highlands, this enchanted castle acts as a safe haven where young witches and wizards learn to master their magical abilities.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              The castle is famous for its moving staircases, vanishing rooms, the grand Great Hall, and deep mysteries waiting to be uncovered by those brave enough to look.
            </p>
          </div>
        </section>

        {/* Dynamic House Details Cards */}
        <section className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-100 tracking-wide">
            Explore the Houses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gryffindor */}
            <div className="bg-linear-to-b from-red-950/40 to-slate-900 border border-red-900/50 p-6 rounded-xl shadow-lg hover:border-red-500 transition-colors duration-300">
              <h4 className="text-xl font-bold text-red-400 mb-2">Gryffindor</h4>
              <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider mb-3">Courage & Chivalry</p>
              <p className="text-sm text-slate-400">Founded by Godric Gryffindor. Its symbolic animal is the lion, and its values are bravery, nerve, and determination.</p>
            </div>

            {/* Slytherin */}
            <div className="bg-linear-to-b from-emerald-950/40 to-slate-900 border border-emerald-900/50 p-6 rounded-xl shadow-lg hover:border-emerald-500 transition-colors duration-300">
              <h4 className="text-xl font-bold text-emerald-400 mb-2">Slytherin</h4>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider mb-3">Ambition & Cunning</p>
              <p className="text-sm text-slate-400">Founded by Salazar Slytherin. Its symbolic animal is the serpent, valuing resourcefulness, pride, and clever leadership.</p>
            </div>

            {/* Ravenclaw */}
            <div className="bg-linear-to-b from-blue-950/40 to-slate-900 border border-blue-900/50 p-6 rounded-xl shadow-lg hover:border-blue-500 transition-colors duration-300">
              <h4 className="text-xl font-bold text-blue-400 mb-2">Ravenclaw</h4>
              <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-3">Wisdom & Wit</p>
              <p className="text-sm text-slate-400">Founded by Rowena Ravenclaw. Its symbolic animal is the eagle, prizing intelligence, creativity, and learning.</p>
            </div>

            {/* Hufflepuff */}
            <div className="bg-linear-to-b from-yellow-950/40 to-slate-900 border border-yellow-900/40 p-6 rounded-xl shadow-lg hover:border-yellow-500 transition-colors duration-300">
              <h4 className="text-xl font-bold text-yellow-500 mb-2">Hufflepuff</h4>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Loyalty & Patience</p>
              <p className="text-sm text-slate-400">Founded by Helga Hufflepuff. Its symbolic animal is the badger, valuing hard work, dedication, and fair play.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Hogwarts School of Witchcraft and Wizardry. All rights reserved.
      </footer>
    </div>
  );
};

export default Greeting;
