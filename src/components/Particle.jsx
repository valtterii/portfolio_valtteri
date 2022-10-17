import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() { // https://www.npmjs.com/package/react-tsparticles
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    
      return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "fpsLimit": 60,
                "particles": {
                    "number": {
                        "value": 40,
                        "density": {
                            "enable": true,
                            "value_area": 1200
                        }
                    },
                    "color": {
                        "value": "#1e90ff",
                        "animation": {
                            "enable": true,
                            "speed": 10,
                            "sync": true
                        }
                    },
                    "opacity": {
                        "value": 0.5
                    },
                    "size": {
                        "value": {
                            "min": 0.1,
                            "max": 3
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 100,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "outModes": {
                            "default": "out"
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "repulse": {
                            "distance": 175
                        },
                        "push": {
                            "quantity": 4
                        }
                    }
                },
                "detectRetina": true,
                "background": {
                    "color": "#131316"
                    }
                }
            }
        />
    )
}

export default Particle