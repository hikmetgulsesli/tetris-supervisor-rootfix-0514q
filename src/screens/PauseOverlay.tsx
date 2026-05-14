// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Simulated Background Game State 
            This represents the game board beneath the overlay. */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
      <div className="flex gap-lg">
      {/* Left Panel: Held Piece */}
      <div className="hidden md:flex flex-col gap-sm">
      <div className="w-[128px] h-[128px] border border-outline-variant bg-surface-container flex items-center justify-center p-sm">
      <div className="w-full h-full border border-outline-variant/30 grid grid-cols-4 grid-rows-4 gap-[1px]">
      {/* Simulated piece blocks */}
      <div className="col-start-2 row-start-2 bg-secondary-container"></div>
      <div className="col-start-3 row-start-2 bg-secondary-container"></div>
      <div className="col-start-2 row-start-3 bg-secondary-container"></div>
      <div className="col-start-3 row-start-3 bg-secondary-container"></div>
      </div>
      </div>
      </div>
      {/* Main Game Board */}
      <div className="w-[320px] h-[640px] border border-outline bg-surface-container relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      {/* Simulated Fallen Blocks */}
      <div className="absolute bottom-0 w-full flex flex-wrap gap-[1px] justify-start p-[1px]">
      {/* Bottom rows populated with blocks */}
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-primary/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-primary/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-error/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      <div className="w-[30.5px] h-[30.5px] bg-outline-variant/40"></div>
      </div>
      {/* Simulated Active Piece */}
      <div className="absolute top-[160px] left-[96px] grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="w-[30.5px] h-[30.5px]"></div>
      <div className="w-[30.5px] h-[30.5px] bg-tertiary-container shadow-[0_0_8px_rgba(241,160,43,0.5)]"></div>
      <div className="w-[30.5px] h-[30.5px]"></div>
      <div className="w-[30.5px] h-[30.5px] bg-tertiary-container shadow-[0_0_8px_rgba(241,160,43,0.5)]"></div>
      <div className="w-[30.5px] h-[30.5px] bg-tertiary-container shadow-[0_0_8px_rgba(241,160,43,0.5)]"></div>
      <div className="w-[30.5px] h-[30.5px] bg-tertiary-container shadow-[0_0_8px_rgba(241,160,43,0.5)]"></div>
      </div>
      </div>
      {/* Right Panel: Stats */}
      <div className="hidden md:flex flex-col gap-sm w-[160px]">
      <div className="border border-outline-variant bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-outline">SCORE</span>
      <span className="font-stat-value text-stat-value text-on-surface text-right mt-xs">042,910</span>
      </div>
      <div className="border border-outline-variant bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-outline">LEVEL</span>
      <span className="font-stat-value text-stat-value text-on-surface text-right mt-xs">14</span>
      </div>
      <div className="border border-outline-variant bg-surface-container p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-outline">LINES</span>
      <span className="font-stat-value text-stat-value text-on-surface text-right mt-xs">87</span>
      </div>
      </div>
      </div>
      </div>
      {/* Pause Overlay Modal (Level 2 Elevation)
            Dimmed backdrop with blurred background to focus attention on the menu. */}
      <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-md flex justify-center items-center z-50">
      {/* Modal Container */}
      <div className="bg-surface-container-high border border-outline rounded-DEFAULT shadow-[0_0_24px_rgba(0,0,0,0.5)] p-xl flex flex-col items-center gap-xl w-[90%] max-w-[420px]">
      {/* Header */}
      <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase flex items-center gap-sm">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[48px]" aria-hidden={true} focusable="false" />
                      PAUSED
                  </h1>
      {/* Action Buttons Container */}
      <div className="flex flex-col gap-md w-full">
      {/* Primary Action: RESUME */}
      <button className="w-full py-md px-lg bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded-DEFAULT border border-transparent hover:bg-primary-fixed focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-high transition-colors active:scale-95 flex justify-center items-center gap-sm group" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play className="text-on-primary-container group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
                          RESUME
                      </button>
      {/* Secondary Action: RESTART */}
      <button className="w-full py-md px-lg bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps rounded-DEFAULT hover:border-primary-container hover:text-primary-container hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-high transition-colors active:scale-95 flex justify-center items-center gap-sm group" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw className="text-outline group-hover:text-primary-container transition-colors" aria-hidden={true} focusable="false" />
                          RESTART
                      </button>
      {/* Destructive/Exit Action: QUIT TO MENU */}
      <button className="w-full py-md px-lg bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps rounded-DEFAULT hover:border-error hover:text-error hover:shadow-[0_0_12px_rgba(255,180,171,0.2)] focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high transition-colors active:scale-95 flex justify-center items-center gap-sm group" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle className="text-outline group-hover:text-error transition-colors" aria-hidden={true} focusable="false" />
                          QUIT TO MENU
                      </button>
      </div>
      {/* Contextual Hint/Subtext */}
      <div className="mt-md text-center">
      <p className="font-body-sm text-body-sm text-outline-variant">Game progress is currently suspended.</p>
      </div>
      </div>
      </div>
    </>
  );
}
