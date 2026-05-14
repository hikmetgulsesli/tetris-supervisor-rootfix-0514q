// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, Gamepad2, Pause, RefreshCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "pause-3" | "restart-4";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full w-xl fixed left-0 top-0 bg-surface-container border-r border-outline-variant py-md z-50">
      <div className="px-md mb-xl">
      <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tighter">TETRA-FLOW</h1>
      </div>
      <div className="px-md mb-lg">
      <div className="font-headline-md text-headline-md text-primary">PLAYER_01</div>
      <div className="text-on-surface-variant font-body-sm text-body-sm">Rank: Pro</div>
      </div>
      <div className="flex-1 space-y-2">
      <a className="flex items-center px-md py-sm text-primary border-r-2 border-primary bg-primary-container/10 transition-colors duration-200" href="#">
      <Gamepad2 className="mr-sm" aria-hidden={true} focusable="false" />
                      Play
                  </a>
      <a className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
                      Leaderboard
                  </a>
      <a className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
                      Training
                  </a>
      <a className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
      <Circle className="mr-sm" aria-hidden={true} focusable="false" />
                      Stats
                  </a>
      </div>
      </nav>
      {/* TopAppBar Mobile */}
      <header className="md:hidden flex justify-between items-center px-md py-sm w-full max-w-full bg-surface border-b border-outline-variant top-0 z-50">
      <div className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">TETRA-FLOW</div>
      <div className="flex space-x-sm">
      <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 transition-transform" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 transition-transform" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-sm md:ml-xl md:p-lg relative">
      {/* Game Container Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-md md:gap-lg w-full max-w-[800px]">
      {/* Left Side Panels (Hold/Stats) */}
      <div className="flex flex-row md:flex-col gap-sm w-full md:w-32 order-2 md:order-1">
      {/* Hold Piece */}
      <div className="bg-[#111827] border border-[#334155] p-sm rounded flex flex-col items-center justify-center w-24 md:w-full h-24 md:h-32">
      <span className="font-label-caps text-label-caps text-outline w-full text-left mb-auto">HOLD</span>
      {/* Placeholder for held piece */}
      <div className="grid grid-cols-4 grid-rows-2 gap-[1px] mb-auto">
      <div className="w-4 h-4 bg-primary-container"></div>
      <div className="w-4 h-4 bg-primary-container"></div>
      <div className="w-4 h-4 bg-primary-container"></div>
      <div className="w-4 h-4 bg-primary-container"></div>
      </div>
      </div>
      {/* Stats Cards */}
      <div className="bg-[#111827] border border-[#334155] p-sm rounded w-full md:w-full flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-outline mb-xs">SCORE</div>
      <div className="font-stat-value text-stat-value text-on-surface text-right">042,500</div>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-sm rounded w-full md:w-full flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-outline mb-xs">LEVEL</div>
      <div className="font-stat-value text-stat-value text-on-surface text-right">07</div>
      </div>
      <div className="bg-[#111827] border border-[#334155] p-sm rounded w-full md:w-full flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-outline mb-xs">LINES</div>
      <div className="font-stat-value text-stat-value text-on-surface text-right">064</div>
      </div>
      </div>
      {/* Central Game Board (10x20 Grid) */}
      <div className="bg-[#111827] border-2 border-[#334155] rounded-DEFAULT p-[2px] order-1 md:order-2 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
      {/* Inner grid representation. Hardcoded to roughly 10x20 aspect ratio for visual */}
      <div className="grid grid-cols-10 grid-rows-20 gap-[1px] bg-[#1E293B] p-[1px] w-[240px] h-[480px] md:w-[300px] md:h-[600px]">
      {/* Sample background grid cells (just a few for visual texture, imagine this fills) */}
      <div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div><div className="bg-[#0F172A]"></div>
      {/* Sample active piece (T-shape) */}
      <div className="col-start-4 row-start-3 bg-tertiary-container shadow-[0_0_5px_rgba(241,160,43,0.5)]"></div>
      <div className="col-start-5 row-start-3 bg-tertiary-container shadow-[0_0_5px_rgba(241,160,43,0.5)]"></div>
      <div className="col-start-6 row-start-3 bg-tertiary-container shadow-[0_0_5px_rgba(241,160,43,0.5)]"></div>
      <div className="col-start-5 row-start-4 bg-tertiary-container shadow-[0_0_5px_rgba(241,160,43,0.5)]"></div>
      {/* Sample locked pieces at bottom */}
      <div className="col-start-1 row-start-20 bg-primary shadow-[0_0_3px_rgba(142,213,255,0.3)]"></div>
      <div className="col-start-2 row-start-20 bg-primary shadow-[0_0_3px_rgba(142,213,255,0.3)]"></div>
      <div className="col-start-3 row-start-20 bg-primary shadow-[0_0_3px_rgba(142,213,255,0.3)]"></div>
      <div className="col-start-4 row-start-20 bg-primary shadow-[0_0_3px_rgba(142,213,255,0.3)]"></div>
      <div className="col-start-7 row-start-20 bg-error shadow-[0_0_3px_rgba(255,180,171,0.3)]"></div>
      <div className="col-start-8 row-start-20 bg-error shadow-[0_0_3px_rgba(255,180,171,0.3)]"></div>
      <div className="col-start-7 row-start-19 bg-error shadow-[0_0_3px_rgba(255,180,171,0.3)]"></div>
      <div className="col-start-8 row-start-19 bg-error shadow-[0_0_3px_rgba(255,180,171,0.3)]"></div>
      </div>
      </div>
      {/* Right Side Panels (Next Piece & Controls) */}
      <div className="flex flex-row md:flex-col gap-sm w-full md:w-32 order-3">
      {/* Next Piece */}
      <div className="bg-[#111827] border border-[#334155] p-sm rounded flex flex-col items-center justify-center w-24 md:w-full h-24 md:h-32">
      <span className="font-label-caps text-label-caps text-outline w-full text-left mb-auto">NEXT</span>
      {/* Placeholder for next piece */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] mb-auto">
      <div className="col-start-1 row-start-1 w-4 h-4 bg-error"></div>
      <div className="col-start-2 row-start-1 w-4 h-4 bg-error"></div>
      <div className="col-start-2 row-start-2 w-4 h-4 bg-error"></div>
      <div className="col-start-3 row-start-2 w-4 h-4 bg-error"></div>
      </div>
      </div>
      {/* Secondary Next Pieces (Smaller) */}
      <div className="hidden md:flex flex-col gap-xs w-full">
      <div className="bg-[#111827] border border-[#334155] p-sm rounded h-16 flex items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
      <div className="w-3 h-3 bg-secondary-container"></div>
      <div className="w-3 h-3 bg-secondary-container"></div>
      <div className="w-3 h-3 bg-secondary-container"></div>
      <div className="w-3 h-3 bg-secondary-container"></div>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-sm w-full mt-auto">
      <button className="bg-[#38BDF8] text-[#0F172A] font-body-sm text-body-sm font-bold py-xs px-sm rounded flex items-center justify-center hover:bg-primary transition-colors" type="button" data-action-id="pause-3" onClick={actions?.["pause-3"]}>
      <Pause className="mr-xs text-[18px]" aria-hidden={true} focusable="false" /> PAUSE
                          </button>
      <button className="bg-transparent border border-[#334155] text-[#F8FAFC] font-body-sm text-body-sm py-xs px-sm rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
      <RefreshCw className="mr-xs text-[18px]" aria-hidden={true} focusable="false" /> RESTART
                          </button>
      </div>
      </div>
      </div>
      {/* Controls Hint */}
      <div className="mt-lg hidden md:flex items-center gap-md text-outline font-label-caps text-label-caps">
      <div className="flex items-center"><ArrowLeft className="mr-xs text-[16px]" aria-hidden={true} focusable="false" /> MOVE L</div>
      <div className="flex items-center"><ArrowRight className="mr-xs text-[16px]" aria-hidden={true} focusable="false" /> MOVE R</div>
      <div className="flex items-center"><ArrowUp className="mr-xs text-[16px]" aria-hidden={true} focusable="false" /> ROTATE</div>
      <div className="flex items-center"><ArrowDown className="mr-xs text-[16px]" aria-hidden={true} focusable="false" /> SOFT DROP</div>
      <div className="flex items-center"><Circle className="mr-xs text-[16px]" aria-hidden={true} focusable="false" /> HARD DROP</div>
      <div className="flex items-center"><span className="px-xs py-[2px] border border-outline rounded mr-xs">C</span> HOLD</div>
      </div>
      </main>
      {/* Footer Mobile */}
      <footer className="md:hidden flex justify-between items-center px-lg py-sm w-full bg-surface-container-lowest border-t border-outline-variant bottom-0">
      <div className="font-label-caps text-label-caps text-outline">
                  © 2024 TETRA-FLOW TECHNICAL SYSTEMS
              </div>
      <div className="flex space-x-sm font-label-caps text-label-caps text-outline">
      <a className="hover:text-primary transition-colors" href="#">Privacy</a>
      <a className="hover:text-primary transition-colors" href="#">Terms</a>
      <a className="hover:text-primary transition-colors" href="#">Source</a>
      </div>
      </footer>
    </>
  );
}
