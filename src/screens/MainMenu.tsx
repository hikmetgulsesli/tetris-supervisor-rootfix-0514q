// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type MainMenuActionId = "start-new-game-1" | "resume-no-active-game-2" | "restart-3" | "controls-4" | "stats-5";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
      {/* Main Container */}
      <main className="z-10 flex flex-col items-center w-full max-w-[600px] px-md">
      {/* Header Section */}
      <div className="text-center mb-xl">
      <h2 className="font-label-caps text-label-caps text-primary tracking-widest mb-xs">SUPERVISOR ROOT FIX 0514q</h2>
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter shadow-sm mb-sm drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">TETRA-FLOW</h1>
      <div className="h-[1px] w-full bg-outline-variant max-w-[200px] mx-auto opacity-50"></div>
      </div>
      {/* Menu Options */}
      <div className="w-full bg-[#111827] border border-[#334155] rounded-DEFAULT p-md flex flex-col gap-sm shadow-lg">
      <button className="w-full group relative flex items-center justify-between bg-[#0F172A] border border-[#334155] hover:border-primary px-md py-sm rounded-DEFAULT transition-colors duration-200 btn-glow focus:outline-none focus:ring-1 focus:ring-primary" type="button" data-action-id="start-new-game-1" onClick={actions?.["start-new-game-1"]}>
      <span className="font-stat-value text-stat-value text-on-surface group-hover:text-primary transition-colors">START NEW GAME</span>
      <Play className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      {/* Disabled State */}
      <button className="w-full relative flex items-center justify-between bg-[#0F172A] border border-[#334155] px-md py-sm rounded-DEFAULT opacity-50 cursor-not-allowed" disabled={true} type="button" data-action-id="resume-no-active-game-2" onClick={actions?.["resume-no-active-game-2"]}>
      <span className="font-stat-value text-stat-value text-outline-variant">RESUME</span>
      <span className="font-label-caps text-label-caps text-outline-variant border border-outline-variant px-2 py-1 rounded">NO ACTIVE GAME</span>
      </button>
      <button className="w-full group relative flex items-center justify-between bg-[#0F172A] border border-[#334155] hover:border-primary px-md py-sm rounded-DEFAULT transition-colors duration-200 btn-glow focus:outline-none focus:ring-1 focus:ring-primary" type="button" data-action-id="restart-3" onClick={actions?.["restart-3"]}>
      <span className="font-stat-value text-stat-value text-on-surface group-hover:text-primary transition-colors">RESTART</span>
      <Circle className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full group relative flex items-center justify-between bg-[#0F172A] border border-[#334155] hover:border-primary px-md py-sm rounded-DEFAULT transition-colors duration-200 btn-glow focus:outline-none focus:ring-1 focus:ring-primary mt-sm" type="button" data-action-id="controls-4" onClick={actions?.["controls-4"]}>
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-wider">CONTROLS</span>
      <Circle className="text-outline-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full group relative flex items-center justify-between bg-[#0F172A] border border-[#334155] hover:border-primary px-md py-sm rounded-DEFAULT transition-colors duration-200 btn-glow focus:outline-none focus:ring-1 focus:ring-primary" type="button" data-action-id="stats-5" onClick={actions?.["stats-5"]}>
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-wider">STATS</span>
      <Circle className="text-outline-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </main>
      {/* Version Metadata Footer */}
      <footer className="absolute bottom-md left-0 w-full px-lg flex justify-between items-end z-10 pointer-events-none">
      <div className="flex flex-col gap-base">
      <span className="font-label-caps text-label-caps text-outline opacity-50">SYS.VER: 1.0.4.992</span>
      <span className="font-label-caps text-label-caps text-outline opacity-50">ENV: PROD-SEC-B</span>
      </div>
      <div className="flex items-center gap-xs text-primary opacity-70">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">ONLINE</span>
      </div>
      </footer>
    </>
  );
}
