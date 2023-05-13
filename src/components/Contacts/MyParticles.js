import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

const MyParticles = () => {

    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        console.log(container);
      }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                position: "fixed",
                links: {
                    color: "#FF6347",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.2,
                    random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                    },
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 1,
                        color: "tomato",
                    },
                },
                size: {
                    value: { min: 1, max: 2 },
                    random: true,
                    anim: {
                        enable: false,
                        speed: 6,
                        size_min: 0,
                        sync: true,
                    },
                },
            },
            detectRetina: true,
        }}
    />
    );
}

export default MyParticles;