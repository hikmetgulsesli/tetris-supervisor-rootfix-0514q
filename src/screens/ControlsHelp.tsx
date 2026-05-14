// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick, Play, TriangleAlert, X } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "resume-session-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Modal Canvas (Level 2 Overlay logic, blurred backdrop implies full screen overlay) */}
      <main className="w-full max-w-5xl bg-surface border border-outline-variant rounded-xl flex flex-col shadow-2xl relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-lg py-md border-b border-outline-variant bg-surface-container-low">
      <div className="flex items-center gap-sm">
      <Circle  data-icon="terminal" className="text-primary text-[32px]" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter uppercase">Operations Manual</h1>
      </div>
      <button aria-label="Close" className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded focus:outline-none focus:ring-2 focus:ring-primary" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <X  data-icon="close" className="text-[28px]" aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
      {/* Left Column: Inputs */}
      <section className="space-y-lg">
      {/* Keyboard Section */}
      <div className="space-y-md">
      <h2 className="font-stat-value text-stat-value text-on-surface border-b border-outline-variant pb-xs flex items-center gap-xs">
      <Circle  data-icon="keyboard" className="text-outline" aria-hidden={true} focusable="false" />
                                  HARDWARE INPUTS
                              </h2>
      <div className="grid grid-cols-1 gap-sm">
      {/* Key Mapping Row */}
      <div className="flex items-center justify-between p-sm bg-surface-container rounded border border-surface-container-highest hover:border-primary transition-colors group">
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface">Rotate Piece</span>
      <div className="flex gap-xs">
      <kbd className="flex items-center justify-center w-10 h-10 bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
      <ArrowUp  data-icon="arrow_upward" aria-hidden={true} focusable="false" />
      </kbd>
      </div>
      </div>
      <div className="flex items-center justify-between p-sm bg-surface-container rounded border border-surface-container-highest hover:border-primary transition-colors group">
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface">Soft Drop</span>
      <div className="flex gap-xs">
      <kbd className="flex items-center justify-center w-10 h-10 bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
      <ArrowDown  data-icon="arrow_downward" aria-hidden={true} focusable="false" />
      </kbd>
      </div>
      </div>
      <div className="flex items-center justify-between p-sm bg-surface-container rounded border border-surface-container-highest hover:border-primary transition-colors group">
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface">Move Horizontal</span>
      <div className="flex gap-xs">
      <kbd className="flex items-center justify-center w-10 h-10 bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
      <ArrowLeft  data-icon="arrow_back" aria-hidden={true} focusable="false" />
      </kbd>
      <kbd className="flex items-center justify-center w-10 h-10 bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
      <ArrowRight  data-icon="arrow_forward" aria-hidden={true} focusable="false" />
      </kbd>
      </div>
      </div>
      <div className="flex items-center justify-between p-sm bg-surface-container rounded border border-surface-container-highest hover:border-primary transition-colors group">
      <span className="font-body-lg text-body-lg text-primary font-bold">Hard Drop</span>
      <div className="flex gap-xs">
      <kbd className="flex items-center justify-center h-10 px-md min-w-[80px] bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
                                              SPACE
                                          </kbd>
      </div>
      </div>
      <div className="flex items-center justify-between p-sm bg-surface-container rounded border border-surface-container-highest hover:border-primary transition-colors group">
      <span className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-surface">Pause Session</span>
      <div className="flex gap-xs">
      <kbd className="flex items-center justify-center w-10 h-10 bg-surface border border-outline-variant rounded font-label-caps text-label-caps text-primary shadow-[0_2px_0_#3e484f]">
                                              P
                                          </kbd>
      </div>
      </div>
      </div>
      </div>
      {/* Touch Section */}
      <div className="space-y-md pt-md">
      <h2 className="font-stat-value text-stat-value text-on-surface border-b border-outline-variant pb-xs flex items-center gap-xs">
      <MousePointerClick  data-icon="touch_app" className="text-outline" aria-hidden={true} focusable="false" />
                                  HAPTIC GESTURES
                              </h2>
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface-container p-sm rounded border border-surface-container-highest flex flex-col gap-xs">
      <Circle  data-icon="swipe_left" className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface">Swipe L/R</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Move Tetromino</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-surface-container-highest flex flex-col gap-xs">
      <Circle  data-icon="tap_and_play" className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface">Single Tap</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Rotate 90°</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-surface-container-highest flex flex-col gap-xs">
      <Circle  data-icon="swipe_down" className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-on-surface">Swipe Down</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Soft Drop</span>
      </div>
      <div className="bg-surface-container p-sm rounded border border-outline flex flex-col gap-xs relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <Circle  data-icon="keyboard_double_arrow_down" className="text-primary relative z-10" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-primary relative z-10">Flick Down</span>
      <span className="font-body-sm text-body-sm text-on-surface relative z-10">Hard Drop (Insta-lock)</span>
      </div>
      </div>
      </div>
      </section>
      {/* Right Column: Mechanics */}
      <section className="space-y-md">
      <h2 className="font-stat-value text-stat-value text-on-surface border-b border-outline-variant pb-xs flex items-center gap-xs">
      <Circle  data-icon="rule" className="text-outline" aria-hidden={true} focusable="false" />
                              CORE DIRECTIVES
                          </h2>
      <div className="space-y-sm">
      {/* Rule Card 1 */}
      <div className="bg-surface-container border-l-2 border-primary p-md rounded-r">
      <h3 className="font-label-caps text-label-caps text-primary mb-xs uppercase">Objective</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                                      Manipulate falling geometric units (Tetrominoes) to form solid horizontal lines across the 10x20 matrix. Completed lines are cleared, yielding operational efficiency points.
                                  </p>
      </div>
      {/* Rule Card 2 */}
      <div className="bg-surface-container border-l-2 border-outline-variant p-md rounded-r hover:border-primary transition-colors">
      <h3 className="font-label-caps text-label-caps text-on-surface mb-xs uppercase">Scoring Multipliers</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">
                                      Concurrent line clearances yield exponential point values.
                                  </p>
      <ul className="font-label-caps text-label-caps text-outline grid grid-cols-2 gap-xs">
      <li>Single: 100 PTS</li>
      <li>Double: 300 PTS</li>
      <li>Triple: 500 PTS</li>
      <li className="text-primary font-bold">Tetra: 800 PTS</li>
      </ul>
      </div>
      {/* Rule Card 3 */}
      <div className="bg-surface-container border-l-2 border-outline-variant p-md rounded-r hover:border-primary transition-colors">
      <h3 className="font-label-caps text-label-caps text-on-surface mb-xs uppercase">Velocity Escalation</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                                      As clearance quotas are met, system level increases. Gravity velocity scales proportionally. Maintain structural integrity under elevated pressure.
                                  </p>
      </div>
      {/* Alert Box */}
      <div className="bg-error-container/10 border border-error/30 p-sm rounded mt-md flex gap-sm items-start">
      <TriangleAlert  data-icon="warning" className="text-error" aria-hidden={true} focusable="false" />
      <div>
      <h4 className="font-label-caps text-label-caps text-error mb-1">Critical Failure State</h4>
      <p className="font-body-sm text-body-sm text-on-error-container/80">
                                          If the structural stack breaches the upper boundary of the matrix, the session is immediately terminated.
                                      </p>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Footer Actions */}
      <footer className="p-md border-t border-outline-variant bg-surface-container-lowest flex justify-end items-center">
      <button className="bg-primary text-surface font-label-caps text-label-caps px-xl py-sm rounded border border-primary hover:bg-transparent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background uppercase tracking-widest flex items-center gap-xs" type="button" data-action-id="resume-session-2" onClick={actions?.["resume-session-2"]}>
                      RESUME SESSION
                      <Play  data-icon="play_arrow" className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </footer>
      </main>
    </>
  );
}
