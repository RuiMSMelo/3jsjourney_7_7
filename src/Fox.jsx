import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { useControls } from 'leva'

export default function Fox(props) {
    const foxModel = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(foxModel.animations, foxModel.scene)

    const { animationName } = useControls('Fox', {
        animationName: { options: animations.names },
    })

    useEffect(() => {
        const action = animations.actions[animationName]
        action.reset().fadeIn(0.5).play()

        return () => {
            action.fadeOut(0.5)
        }
    }, [animationName])

    return (
        <>
            <primitive object={foxModel.scene} {...props} />
        </>
    )
}
