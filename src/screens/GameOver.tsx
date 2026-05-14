// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "replay-1" | "main-menu-2" | "share-score-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Main Game Over Container */}
      <main className="w-full max-w-[480px] flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center gap-sm text-center">
      <h1 className="font-display-lg text-display-lg text-error uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,180,171,0.2)]">
                      GAME OVER
                  </h1>
      {/* New High Score Indicator */}
      <div className="inline-flex items-center gap-xs px-sm py-xs bg-primary/10 border border-primary text-primary rounded font-label-caps text-label-caps uppercase shadow-[0_0_12px_rgba(142,213,255,0.15)]">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                      NEW HIGH SCORE
                  </div>
      </header>
      {/* Stats Summary */}
      <section className="flex flex-col gap-sm w-full">
      {/* Final Score Main Card */}
      <div className="bg-surface-container border border-outline-variant p-md rounded flex flex-col items-center justify-center gap-sm relative overflow-hidden group hover:border-primary transition-colors duration-300">
      {/* Subtle grid background effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3e484f_1px,transparent_1px),linear-gradient(to_bottom,#3e484f_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase relative z-10">FINAL SCORE</h2>
      <div className="font-display-lg text-display-lg text-primary relative z-10">
                          2,485,910
                      </div>
      </div>
      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-sm w-full">
      {/* Level Reached */}
      <div className="bg-surface-container border border-outline-variant p-sm rounded flex flex-col items-start gap-xs hover:border-outline transition-colors">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">LEVEL REACHED</h3>
      <div className="font-stat-value text-stat-value text-on-surface w-full text-right">
                              24
                          </div>
      </div>
      {/* Lines Cleared */}
      <div className="bg-surface-container border border-outline-variant p-sm rounded flex flex-col items-start gap-xs hover:border-outline transition-colors">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">LINES CLEARED</h3>
      <div className="font-stat-value text-stat-value text-on-surface w-full text-right">
                              214
                          </div>
      </div>
      </div>
      </section>
      {/* Action Buttons */}
      <nav className="flex flex-col gap-sm w-full mt-sm">
      {/* Primary Action */}
      <button className="w-full bg-primary text-on-primary py-sm px-md rounded font-label-caps text-label-caps uppercase flex items-center justify-center gap-xs hover:bg-surface-tint hover:shadow-[0_0_16px_rgba(142,213,255,0.3)] transition-colors active:scale-[0.98]" type="button" data-action-id="replay-1" onClick={actions?.["replay-1"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                      REPLAY
                  </button>
      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-sm w-full">
      <button className="w-full bg-transparent border border-outline-variant text-on-surface py-sm px-sm rounded font-label-caps text-label-caps uppercase flex items-center justify-center gap-xs hover:border-primary hover:text-primary transition-colors active:scale-[0.98]" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Home className="text-[18px]" aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      <button className="w-full bg-transparent border border-outline-variant text-on-surface py-sm px-sm rounded font-label-caps text-label-caps uppercase flex items-center justify-center gap-xs hover:border-primary hover:text-primary transition-colors active:scale-[0.98]" type="button" data-action-id="share-score-3" onClick={actions?.["share-score-3"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                          SHARE SCORE
                      </button>
      </div>
      </nav>
      </main>
    </>
  );
}
