import React, { useState } from 'react';
import { PracticalManifest, ResearchSourceDoc } from '../types/practical';
import {
  FileText,
  Search,
  BookOpen,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Calculator,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  Filter
} from 'lucide-react';

interface ResearchAnalysisWorkspaceProps {
  manifest: PracticalManifest;
  onSimulationCompleted?: (passed: boolean) => void;
  lastSavedTimestamp?: string;
}

export const ResearchAnalysisWorkspace: React.FC<ResearchAnalysisWorkspaceProps> = ({
  manifest,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const isStockData = manifest.id.includes('stock') || manifest.id.includes('data');
  const isArduino = manifest.id.includes('arduino') || manifest.id.includes('sensor');
  const isRegulation = manifest.id.includes('regulation') || manifest.id.includes('policy');

  // Stock price dataset for Applied Data Science
  const [stockDataset] = useState([
    { date: '2025-01-02', open: 182.4, high: 184.2, low: 181.8, close: 183.9, volume: '48.2M', returnPct: '+0.82%' },
    { date: '2025-01-03', open: 184.0, high: 185.1, low: 183.2, close: 184.5, volume: '42.1M', returnPct: '+0.33%' },
    { date: '2025-01-06', open: 185.2, high: 186.7, low: 184.9, close: 186.3, volume: '51.8M', returnPct: '+0.98%' },
    { date: '2025-01-07', open: 186.5, high: 187.4, low: 185.5, close: 185.8, volume: '39.4M', returnPct: '-0.27%' },
    { date: '2025-01-08', open: 185.9, high: 188.1, low: 185.7, close: 187.9, volume: '56.3M', returnPct: '+1.13%' },
    { date: '2025-01-09', open: 188.0, high: 189.5, low: 187.4, close: 189.2, volume: '62.7M', returnPct: '+0.69%' },
    { date: '2025-01-10', open: 189.0, high: 190.2, low: 188.1, close: 188.6, volume: '44.9M', returnPct: '-0.32%' },
  ]);

  // Arduino hardware taxonomy dataset
  const [hardwareItems] = useState([
    { id: 'h1', component: 'HC-SR04 Ultrasonic Sensor', type: 'Input Sensor', voltage: '5.0V', current: '15mA', pins: 'VCC, Trig, Echo, GND', interface: 'Digital Pulse' },
    { id: 'h2', component: 'DHT22 Temp & Humidity', type: 'Input Sensor', voltage: '3.3V - 5V', current: '2.5mA', pins: 'VCC, Data, NC, GND', interface: '1-Wire Digital' },
    { id: 'h3', component: 'SG90 Micro Servo 9g', type: 'Actuator', voltage: '4.8V - 6V', current: '250mA (stall)', pins: 'PWM, 5V, GND', interface: 'PWM 50Hz' },
    { id: 'h4', component: 'SSD1306 0.96" OLED', type: 'Display / Output', voltage: '3.3V', current: '20mA', pins: 'SDA, SCL, VCC, GND', interface: 'I2C (0x3C)' },
  ]);

  // User synthesis findings
  const [analysisNotes, setAnalysisNotes] = useState(
    isStockData
      ? 'Calculated cumulative return across 7 trading sessions is +2.56%. Daily volatility is 0.62%, indicating stable upward momentum with lower downside drawdown compared to broad market index.'
      : isArduino
      ? 'Total current draw under peak load is 287.5mA. Because the Arduino Uno 5V regulator can deliver up to 500mA from USB, direct board powering is viable for sensor reading, but a dedicated external battery rail is recommended for SG90 servo motor stalls.'
      : 'The proposed customer service LLM classifier falls under EU AI Act "Specific Transparency Risk" (Title IV, Art. 50), mandating explicit user notification of AI interaction and watermarking of generated synthetic text.'
  );

  const [hypothesis, setHypothesis] = useState(
    isStockData
      ? 'Tech equity exhibits lower intraday volatility following quarterly earnings consensus beat.'
      : isArduino
      ? 'Single 5V USB bus provides sufficient headroom for low-power sensor bus without brownout.'
      : 'Customer service AI chatbot requires Article 50 transparency disclosure rather than Annex III high-risk conformity assessment.'
  );

  const [activeDossierTab, setActiveDossierTab] = useState<'source' | 'data' | 'citations'>('source');
  const [searchFilter, setSearchFilter] = useState('');
  const [synthesisVerified, setSynthesisVerified] = useState(false);

  const handleVerifyAnalysis = () => {
    setSynthesisVerified(true);
    onSimulationCompleted?.(true);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden font-sans select-none">
      {/* Top Research Bar */}
      <div className="px-4 py-2 bg-white border-b border-slate-200/90 flex items-center justify-between shadow-2xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold uppercase text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Research Dossier
            </span>
            <span className="text-xs font-bold text-slate-800">
              {manifest.title}
            </span>
          </div>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500 font-mono">
            {manifest.courseName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-400">
            Saved {lastSavedTimestamp}
          </span>
          <button
            onClick={handleVerifyAnalysis}
            className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            Verify Synthesis
          </button>
        </div>
      </div>

      {/* Main Split Layout: Left Source Evidence vs Right Analysis Notebook */}
      <div className="flex-1 p-3 min-h-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Left 6 Cols: Source Evidence & Dataset Dossier */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col min-h-0 overflow-hidden">
          {/* Dossier Tabs & Filter */}
          <div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveDossierTab('source')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeDossierTab === 'source'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Source Dossier
              </button>
              <button
                onClick={() => setActiveDossierTab('data')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeDossierTab === 'data'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tabular Data
              </button>
            </div>

            <div className="relative">
              <Search className="w-3 h-3 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter evidence..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="pl-6 pr-2 py-0.5 text-[11px] rounded border border-slate-200 focus:outline-hidden w-28 sm:w-36 font-sans bg-white"
              />
            </div>
          </div>

          {/* Dossier Content Pane */}
          <div className="flex-1 p-3.5 overflow-y-auto min-h-0 space-y-3">
            {activeDossierTab === 'source' ? (
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-800">
                      Technical Brief & Evidence Corpus
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">REF #DOC-882</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {manifest.classroom.mainTitle}
                  </h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {manifest.realWorldContext}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-800 block">
                    Key Investigation Pillars:
                  </span>
                  {manifest.classroom.quickOrientation.map((orient, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg border border-slate-200 bg-slate-50/50 flex items-start gap-2"
                    >
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-1 rounded shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-xs text-slate-700 leading-snug">{orient}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">
                    Analytical Method
                  </span>
                  <p className="text-xs text-slate-600 leading-snug">
                    Cross-examine empirical values in the Tabular Data tab against established theoretical thresholds. Note variances in the synthesis notebook.
                  </p>
                </div>
              </div>
            ) : (
              /* Tabular Data View */
              <div className="overflow-x-auto">
                {isStockData ? (
                  <table className="w-full text-left font-mono text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                        <th className="py-1.5 px-2 font-semibold">Date</th>
                        <th className="py-1.5 px-2 font-semibold">Open</th>
                        <th className="py-1.5 px-2 font-semibold">High</th>
                        <th className="py-1.5 px-2 font-semibold">Low</th>
                        <th className="py-1.5 px-2 font-semibold">Close</th>
                        <th className="py-1.5 px-2 font-semibold">Return</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {stockDataset.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-1 px-2 text-slate-700 font-medium">{row.date}</td>
                          <td className="py-1 px-2 text-slate-600">${row.open.toFixed(1)}</td>
                          <td className="py-1 px-2 text-slate-600">${row.high.toFixed(1)}</td>
                          <td className="py-1 px-2 text-slate-600">${row.low.toFixed(1)}</td>
                          <td className="py-1 px-2 text-slate-900 font-bold">${row.close.toFixed(1)}</td>
                          <td
                            className={`py-1 px-2 font-bold ${
                              row.returnPct.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                            }`}
                          >
                            {row.returnPct}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left font-mono text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                        <th className="py-1.5 px-2 font-semibold">Component</th>
                        <th className="py-1.5 px-2 font-semibold">Type</th>
                        <th className="py-1.5 px-2 font-semibold">Voltage</th>
                        <th className="py-1.5 px-2 font-semibold">Current</th>
                        <th className="py-1.5 px-2 font-semibold">Interface</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {hardwareItems.map((h) => (
                        <tr key={h.id} className="hover:bg-slate-50">
                          <td className="py-1 px-2 text-slate-800 font-medium">{h.component}</td>
                          <td className="py-1 px-2 text-slate-600">{h.type}</td>
                          <td className="py-1 px-2 text-slate-700">{h.voltage}</td>
                          <td className="py-1 px-2 text-amber-700 font-semibold">{h.current}</td>
                          <td className="py-1 px-2 text-slate-500">{h.interface}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right 6 Cols: Structured Analysis Notebook */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col min-h-0 overflow-hidden">
          <div className="px-3 py-2 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              Structured Analysis & Synthesis Notebook
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Interactive Workspace
            </span>
          </div>

          <div className="p-3.5 flex-1 flex flex-col justify-between overflow-y-auto space-y-3 min-h-0">
            <div className="space-y-3">
              {/* Hypothesis formulation */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Research Hypothesis / Working Question
                </label>
                <input
                  type="text"
                  value={hypothesis}
                  onChange={(e) => setHypothesis(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-slate-50/50 font-medium"
                />
              </div>

              {/* Analytical Findings & Quantitative Observations */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Empirical Findings & Synthesis Notes
                </label>
                <textarea
                  rows={6}
                  value={analysisNotes}
                  onChange={(e) => setAnalysisNotes(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-slate-50/50 font-sans leading-relaxed resize-none"
                />
              </div>

              {/* Interactive Calculation Card */}
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider block">
                    Calculated Summary Metric
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {isStockData
                      ? '7-Day Return: +2.56% · Annualized Vol: 9.84%'
                      : isArduino
                      ? 'Total Current Draw: 287.5mA · USB Headroom: 212.5mA'
                      : 'Regulatory Compliance: Transparency Art. 50 Satisfied'}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                  VALIDATED
                </span>
              </div>
            </div>

            {/* Bottom Verification Status */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {synthesisVerified ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Synthesis reviewed & passed domain criteria
                  </span>
                ) : (
                  'Review evidence, document findings, and click Verify'
                )}
              </span>
              <button
                onClick={handleVerifyAnalysis}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                Submit Findings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
