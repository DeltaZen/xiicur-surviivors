import "@webxdc/highscores"
import { loadAssets } from "./asset"
import { CompPhysicsRun } from "./components/physics"
import { CompRenderRun } from "./components/render"
import { HEIGHT, WIDTH } from "./const"
import { resize } from "./core/canvas"
import { initInput } from "./core/input"
import { loop } from "./core/loop"
import { setupPostProcess } from "./core/post-process"
import { loadIntro } from "./scene"
import { loadSounds } from "./sound"
import { renderUI, updateUI } from "./ui"

const canvas = document.getElementById("c") as HTMLCanvasElement
const offscreenCanvas = document.createElement("canvas")

const ctx = offscreenCanvas.getContext("2d")!
const processInput = initInput(canvas, WIDTH, HEIGHT)
const postProcess = setupPostProcess(canvas, WIDTH * 4, HEIGHT * 4)
loadSounds()
;(async () => {
    await window.highscores.init({
        getAnnouncement: (name, result) => {
            const zeroPad = (numb) => (numb < 10 ? "0" + numb : numb)
            const abstime = ~~result.time
            const mins = zeroPad(~~(abstime / 60))
            const secs = zeroPad(abstime % 60)
            return `${name} scored ${result.score} in ${mins}:${secs}`
        },
        compareScores: (score1, score2) => score1.score - score2.score,
        getInitialScore: () => {
            return { score: 0, time: 0 }
        },
    })

    console.log("loading assets...")
    const assets = await loadAssets()
    console.log("Done loading assets")

    loadIntro()
    ;(onresize = () => {
        resize(offscreenCanvas, WIDTH, HEIGHT)
        resize(canvas, WIDTH * 4, HEIGHT * 4)
    })()

    loop(
        (dt) => {
            processInput()
            CompPhysicsRun(dt)
            // we have separate methods for UI because it draws above all entities
            updateUI(dt)
        },
        () => {
            CompRenderRun(ctx, assets)
            renderUI(ctx, assets)
            postProcess(ctx)
        },
    )
})()
