import React from 'react'
import Lottie from 'react-lottie'

export default function CryingMorty() {
    return (
        <Lottie

            options={{
                animationData: require("../../assets/animations/cryingmorty.json"),
                autoplay: true,
                loop: true,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                },
            }}
            width={120}
            height={120}
            isPaused={false}
            isStopped={false}
            
        />
    )
}
