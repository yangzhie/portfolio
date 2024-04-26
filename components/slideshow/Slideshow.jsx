"use client"

import { Preload, Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Slides from "./Slides"

export default function Hero() {
    return (
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
                <ScrollControls infinite vertical pages={1} distance={1}>
                    <Scroll>
                        <Slides />
                    </Scroll>
                </ScrollControls>
                <Preload />
            </Suspense>
        </Canvas>
    )
}