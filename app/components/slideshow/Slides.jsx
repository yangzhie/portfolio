import React, { useRef } from 'react'
import { ImageProps, Image as DImage, useScroll } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { Group, MathUtils } from "three"

function DreiImage(props) {
    const ref = useRef(null)
    const group = useRef(null)
    const data = useScroll()

    useFrame((state, delta) => {
        if (group.current && ref.current && data) {
            group.current.position.z = MathUtils.damp(
                group.current.position.z,
                Math.max(0, data.delta * 100),
                4,
                delta
            )
        }
    })

    return (
        <group ref={group}>
            <DImage ref={ref} {...props} />
        </group>
    )
}

function Slide({ urls = [''], ...props }) {
    const ref = useRef(null)
    const { width } = useThree((state) => state.viewport)
    const w = width < 10 ? 1.5 / 3 : 1 / 3
    return (
        <group {...props}>
            <DreiImage position={[-width * w, 0, 0]} scale={[5, 7]} url={urls[0]} />
            <DreiImage position={[0, 0, 0]} scale={[7, 5]} url={urls[1]} />
            <DreiImage position={[-width * w, 0, 0]} scale={[5, 5]} url={urls[2]} />
        </group>
    )
}

function Slides() {
    const { width } = useThree((state) => state.viewport)
    return (
        <>
            <Slide position={[0, 0, 0]} urls={[
                "https://images.pexels.com/photos/21620267/pexels-photo-21620267/free-photo-of-a-woman-in-a-white-dress-and-a-long-white-dress.jpeg",
                "https://images.pexels.com/photos/14153041/pexels-photo-14153041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/20767750/pexels-photo-20767750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ]} />
            <Slide position={[width * 1, 0, 0]} urls={[
                "https://images.pexels.com/photos/14649875/pexels-photo-14649875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/20767753/pexels-photo-20767753/free-photo-of-a-woman-in-a-white-dress-with-a-bow-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/20767752/pexels-photo-20767752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]} />
            <Slide position={[width * 2, 0, 0]} urls={[
                "https://images.pexels.com/photos/14649875/pexels-photo-14649875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/20767753/pexels-photo-20767753/free-photo-of-a-woman-in-a-white-dress-with-a-bow-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/20767752/pexels-photo-20767752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]} />
        </>
    )
}

export default Slides