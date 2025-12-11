import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Calculator = () => {
  // ... (Keep logic the same) ...
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateMaterials = (e) => {
    e.preventDefault();
    const L = parseFloat(length);
    const H = parseFloat(height);
    if (!L || !H) return;
    const blockLength = 0.45; 
    const blockHeight = 0.23;
    const surfaceAreaOneBlock = blockLength * blockHeight; 
    const wallArea = L * H;
    const rawBlocks = wallArea / surfaceAreaOneBlock;
    const blocksWithWastage = Math.ceil(rawBlocks * 1.05);
    const cementBags = (blocksWithWastage / 50).toFixed(1);
    const sandWheelbarrows = Math.ceil(cementBags * 3);
    setResult({
      area: wallArea.toFixed(2),
      blocks: blocksWithWastage,
      cement: cementBags,
      sand: sandWheelbarrows
    });
  };

  const resetForm = () => {
    setLength('');
    setHeight('');
    setResult(null);
  };

  return (
    // REMOVED Navbar/Footer from here
    <div className="min-h-screen bg-ujenzi-dark text-white flex flex-col">
      <div className="flex-grow pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-ujenzi-accent/10 rounded-full mb-4 text-ujenzi-accent">
              <CalcIcon size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Material Calculator</h1>
            <p className="text-slate-400">Estimate blocks and cement for your wall accurately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ujenzi-card border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-ujenzi-accent text-ujenzi-dark flex items-center justify-center text-xs">1</span>
                Enter Dimensions
              </h3>
              
              <form onSubmit={calculateMaterials} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Wall Length (Meters)</label>
                  <input 
                    type="number" 
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="e.g. 10" 
                    className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white focus:border-ujenzi-accent focus:outline-none transition-colors text-lg"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Wall Height (Meters)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 3" 
                    className="w-full bg-ujenzi-dark border border-white/10 p-4 text-white focus:border-ujenzi-accent focus:outline-none transition-colors text-lg" 
                    required
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="primary" className="flex-1 justify-center">Calculate</Button>
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="px-4 bg-white/5 hover:bg-white/10 text-white transition-colors"
                  >
                    <RefreshCw size={20} />
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-ujenzi-card border border-white/5 p-8 rounded-sm relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none"></div>

              {result ? (
                <div className="relative z-10 animate-in fade-in zoom-in duration-300">
                  <h3 className="text-xl font-bold text-ujenzi-accent mb-6 text-center uppercase tracking-widest">Estimation Results</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-slate-400">Total Wall Area</span>
                      <span className="text-2xl font-bold text-white">{result.area} m²</span>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-slate-400">Blocks Needed (Inc. 5% waste)</span>
                      <span className="text-4xl font-bold text-ujenzi-accent">{result.blocks}</span>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-slate-400">Cement Bags (For Joints)</span>
                      <span className="text-2xl font-bold text-white">{result.cement}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Sand (Wheelbarrows)</span>
                      <span className="text-2xl font-bold text-white">{result.sand}</span>
                    </div>
                  </div>

                  <p className="mt-8 text-xs text-slate-500 text-center italic">
                    *Estimates based on standard 450x230mm blocks. Actual usage may vary depending on joint thickness and workmanship.
                  </p>
                </div>
              ) : (
                <div className="relative z-10 text-center text-slate-500">
                  <CalcIcon size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Enter dimensions to see material breakdown.</p>
                </div>
              )}
            </div>

          </div>
          
          <div className="mt-12 text-center">
             <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-ujenzi-accent transition-colors">
                <ArrowLeft size={16} /> Back to Home
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;