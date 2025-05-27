import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Fox(props) {
    const foxModel = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(foxModel.animations, foxModel.scene)

    useEffect(() => {
        const action = animations.actions.Run
        action.play()

        window.setTimeout(() => {
            animations.actions.Walk.play()
            animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1)
        }, 2000)
    }, [])

    return (
        <>
            <primitive object={foxModel.scene} {...props} />
        </>
    )
}
