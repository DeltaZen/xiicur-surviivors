import { CompInitRun } from "./components/init"
import { setupKeyListener } from "./components/input"
import { CompPhysicsRun } from "./components/physics"
import { CompRenderRun } from "./components/render"
import { CompResizeRun } from "./components/resize"
import { HEIGHT, WIDTH } from "./const"
import { createCtx, resize } from "./core/canvas"
import { loop } from "./core/loop"
import { setupPostProcess } from "./core/post-process"

import "./hero"
import "./mob"
import "./hud"

const canvas = document.getElementById("c") as HTMLCanvasElement
const offscreenCanvas = document.createElement("canvas")
const portraitNote = document.getElementById("d")!

const ctx = createCtx(offscreenCanvas, WIDTH, HEIGHT)
const keys = setupKeyListener(offscreenCanvas)
setupPostProcess(canvas, WIDTH, HEIGHT)

onresize = () => {
    resize(offscreenCanvas, WIDTH, HEIGHT)
    resize(canvas, WIDTH, HEIGHT)
    // display note if device is in portrait
    portraitNote.style.display = innerWidth < innerHeight ? "block" : "none"
    CompResizeRun(WIDTH, HEIGHT)
}

CompInitRun(ctx)

loop(
    (dt) => {
        CompPhysicsRun(dt, keys)
    },
    () => {
        CompRenderRun(ctx, WIDTH, HEIGHT)
    },
)
