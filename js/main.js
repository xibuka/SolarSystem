import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Language support
const languages = {
    'en': {
        menuTitle: 'Language',
        sun: 'Sun',
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        moon: 'Moon',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
        phobos: 'Phobos',
        deimos: 'Deimos',
        io: 'Io',
        europa: 'Europa',
        ganymede: 'Ganymede',
        callisto: 'Callisto',
        titan: 'Titan',
        rhea: 'Rhea',
        enceladus: 'Enceladus',
        miranda: 'Miranda',
        ariel: 'Ariel',
        titania: 'Titania',
        triton: 'Triton',
        pause: 'Pause',
        resume: 'Resume',
        resetCamera: 'Reset View',
        toggleOrbits: 'Toggle Orbits',
        toggleView: 'Top-Down View',
        toggleSpeed: 'Speed: Normal',
        toggleStars: 'Toggle Stars',
        toggleLabels: 'Toggle Labels',
        speedSlow: 'Speed: Slow',
        speedNormal: 'Speed: Normal',
        speedFast: 'Speed: Fast'
    },
    'zh': {
        menuTitle: '语言',
        sun: '太阳',
        mercury: '水星',
        venus: '金星',
        earth: '地球',
        moon: '月球',
        mars: '火星',
        jupiter: '木星',
        saturn: '土星',
        uranus: '天王星',
        neptune: '海王星',
        phobos: '火卫一',
        deimos: '火卫二',
        io: '木卫一',
        europa: '木卫二',
        ganymede: '木卫三',
        callisto: '木卫四',
        titan: '土卫六',
        rhea: '土卫五',
        enceladus: '土卫二',
        miranda: '天卫五',
        ariel: '天卫一',
        titania: '天卫三',
        triton: '海卫一',
        pause: '暂停',
        resume: '继续',
        resetCamera: '重置视角',
        toggleOrbits: '切换轨道',
        toggleView: '俯视图',
        toggleSpeed: '速度：正常',
        toggleStars: '切换星空',
        toggleLabels: '切换标签',
        speedSlow: '速度：慢',
        speedNormal: '速度：正常',
        speedFast: '速度：快'
    },
    'ja': {
        menuTitle: '言語',
        sun: '太陽',
        mercury: '水星',
        venus: '金星',
        earth: '地球',
        moon: '月',
        mars: '火星',
        jupiter: '木星',
        saturn: '土星',
        uranus: '天王星',
        neptune: '海王星',
        phobos: 'フォボス',
        deimos: 'ダイモス',
        io: 'イオ',
        europa: 'エウロパ',
        ganymede: 'ガニメデ',
        callisto: 'カリスト',
        titan: 'タイタン',
        rhea: 'レア',
        enceladus: 'エンケラドス',
        miranda: 'ミランダ',
        ariel: 'アリエル',
        titania: 'チタニア',
        triton: 'トリトン',
        pause: '一時停止',
        resume: '再開',
        resetCamera: '視点をリセット',
        toggleOrbits: '軌道表示切替',
        toggleView: '真上からの眺め',
        toggleSpeed: '速度：普通',
        toggleStars: '星空表示切替',
        toggleLabels: 'ラベル表示切替',
        speedSlow: '速度：遅い',
        speedNormal: '速度：普通',
        speedFast: '速度：速い'
    },
    'es': {
        menuTitle: 'Idioma',
        sun: 'Sol',
        mercury: 'Mercurio',
        venus: 'Venus',
        earth: 'Tierra',
        moon: 'Luna',
        mars: 'Marte',
        jupiter: 'Júpiter',
        saturn: 'Saturno',
        uranus: 'Urano',
        neptune: 'Neptuno',
        phobos: 'Fobos',
        deimos: 'Deimos',
        io: 'Ío',
        europa: 'Europa',
        ganymede: 'Ganimedes',
        callisto: 'Calisto',
        titan: 'Titán',
        rhea: 'Rea',
        enceladus: 'Encélado',
        miranda: 'Miranda',
        ariel: 'Ariel',
        titania: 'Titania',
        triton: 'Tritón',
        pause: 'Pausar',
        resume: 'Reanudar',
        resetCamera: 'Reiniciar Vista',
        toggleOrbits: 'Mostrar Órbitas',
        toggleView: 'Vista Superior',
        toggleSpeed: 'Velocidad: Normal',
        toggleStars: 'Mostrar Estrellas',
        toggleLabels: 'Mostrar Etiquetas',
        speedSlow: 'Velocidad: Lenta',
        speedNormal: 'Velocidad: Normal',
        speedFast: 'Velocidad: Rápida'
    },
    'fr': {
        menuTitle: 'Langue',
        sun: 'Soleil',
        mercury: 'Mercure',
        venus: 'Vénus',
        earth: 'Terre',
        moon: 'Lune',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturne',
        uranus: 'Uranus',
        neptune: 'Neptune',
        phobos: 'Phobos',
        deimos: 'Déimos',
        io: 'Io',
        europa: 'Europe',
        ganymede: 'Ganymède',
        callisto: 'Callisto',
        titan: 'Titan',
        rhea: 'Rhéa',
        enceladus: 'Encelade',
        miranda: 'Miranda',
        ariel: 'Ariel',
        titania: 'Titania',
        triton: 'Triton',
        pause: 'Pause',
        resume: 'Reprendre',
        resetCamera: 'Réinitialiser Vue',
        toggleOrbits: 'Afficher Orbites',
        toggleView: 'Vue de Dessus',
        toggleSpeed: 'Vitesse: Normale',
        toggleStars: 'Afficher Étoiles',
        toggleLabels: 'Afficher Étiquettes',
        speedSlow: 'Vitesse: Lente',
        speedNormal: 'Vitesse: Normale',
        speedFast: 'Vitesse: Rapide'
    }
};

// Current language
let currentLanguage = 'en';

// Animation control
let isAnimationPaused = false;
// Toggle states
let showOrbits = true;
let topDownView = false;
let showStars = true;
let showLabels = true;
let animationSpeed = 1; // 0.5 for slow, 1 for normal, 2 for fast

// Camera settings
const defaultCameraPosition = new THREE.Vector3(0, 50, 150);
const defaultCameraTarget = new THREE.Vector3(0, 0, 0);
let currentFocusObject = null;
let currentFocusPlanetData = null; // Store the planet data for following

// Create pause/resume button
function createPauseResumeButton() {
    const button = document.createElement('button');
    button.className = 'control-button';
    button.textContent = languages[currentLanguage].pause;
    button.addEventListener('click', () => {
        isAnimationPaused = !isAnimationPaused;
        button.textContent = isAnimationPaused ? 
            languages[currentLanguage].resume : 
            languages[currentLanguage].pause;
    });
    return button;
}

// Create pause/resume button
function createPauseResumeButton2() {
    const button = document.createElement('button');
    button.className = 'control-button';
    button.textContent = languages[currentLanguage].pause;
    button.addEventListener('click', () => {
        isAnimationPaused = !isAnimationPaused;
        button.textContent = isAnimationPaused ? 
            languages[currentLanguage].resume : 
            languages[currentLanguage].pause;
    });
    return button;
}
// Create pause/resume button
function createPauseResumeButton3() {
    const button = document.createElement('button');
    button.className = 'control-button';
    button.textContent = languages[currentLanguage].pause;
    button.addEventListener('click', () => {
        isAnimationPaused = !isAnimationPaused;
        button.textContent = isAnimationPaused ? 
            languages[currentLanguage].resume : 
            languages[currentLanguage].pause;
    });
    return button;
}
// Create reset camera button
function createResetCameraButton() {
    const button = document.createElement('button');
    button.className = 'reset-button';
    button.textContent = languages[currentLanguage].resetCamera;
    button.addEventListener('click', resetCamera);
    return button;
}

// Reset camera to default position
function resetCamera() {
    currentFocusObject = null;
    currentFocusPlanetData = null;
    // Use GSAP to animate the camera position change
    if (window.gsap) {
        window.gsap.to(camera.position, {
            x: defaultCameraPosition.x,
            y: defaultCameraPosition.y,
            z: defaultCameraPosition.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function() {
                camera.lookAt(defaultCameraTarget);
            }
        });
        window.gsap.to(controls.target, {
            x: defaultCameraTarget.x,
            y: defaultCameraTarget.y,
            z: defaultCameraTarget.z,
            duration: 1.5,
            ease: "power2.inOut"
        });
    } else {
        // Fallback if GSAP is not loaded
        camera.position.copy(defaultCameraPosition);
        camera.lookAt(defaultCameraTarget);
        controls.target.copy(defaultCameraTarget);
    }
    controls.update();
}

// Toggle orbit paths visibility
function toggleOrbitPaths() {
    showOrbits = !showOrbits;
    
    // Update button active state visually
    const toggleOrbitsButton = document.querySelector('.toggle-orbits');
    if (toggleOrbitsButton) {
        if (showOrbits) {
            toggleOrbitsButton.classList.add('active');
        } else {
            toggleOrbitsButton.classList.remove('active');
        }
    }
    
    // Toggle visibility for planet orbits
    planetObjects.forEach(planetData => {
        if (planetData.orbitPath) {
            planetData.orbitPath.visible = showOrbits;
        }
        
        // Toggle visibility for moon orbits
        if (planetData.moons) {
            planetData.moons.forEach(moonData => {
                if (moonData.orbitPath) {
                    moonData.orbitPath.visible = showOrbits;
                }
            });
        }
    });
}

// Toggle top-down view
function toggleTopDownView() {
    topDownView = !topDownView;
    
    // Update button active state visually
    const toggleViewButton = document.querySelector('.toggle-view');
    if (toggleViewButton) {
        if (topDownView) {
            toggleViewButton.classList.add('active');
        } else {
            toggleViewButton.classList.remove('active');
        }
    }
    
    // Save the current distance from target
    const currentDistance = new THREE.Vector3().subVectors(
        camera.position, 
        controls.target
    ).length();
    
    if (topDownView) {
        // Animate to top-down view
        if (window.gsap) {
            window.gsap.to(camera.position, {
                x: 0,
                y: currentDistance,
                z: 0,
                duration: 1.5,
                ease: "power2.inOut",
                onUpdate: function() {
                    camera.lookAt(controls.target);
                }
            });
        } else {
            camera.position.set(0, currentDistance, 0);
            camera.lookAt(controls.target);
        }
    } else {
        // Return to default view if not focused on an object
        if (!currentFocusObject) {
            resetCamera();
        }
    }
    
    controls.update();
}

// Toggle animation speed
function toggleAnimationSpeed() {
    // Cycle through 3 speeds: slow (0.5) -> normal (1) -> fast (2) -> slow (0.5)
    if (animationSpeed === 0.5) {
        animationSpeed = 1;
        return languages[currentLanguage].speedNormal;
    } else if (animationSpeed === 1) {
        animationSpeed = 2;
        return languages[currentLanguage].speedFast;
    } else {
        animationSpeed = 0.5;
        return languages[currentLanguage].speedSlow;
    }
}

// Toggle star field visibility
function toggleStarField() {
    showStars = !showStars;
    
    // Update button active state visually
    const toggleStarsButton = document.querySelector('.toggle-stars');
    if (toggleStarsButton) {
        if (showStars) {
            toggleStarsButton.classList.add('active');
        } else {
            toggleStarsButton.classList.remove('active');
        }
    }
    
    if (stars) {
        stars.visible = showStars;
    }
}

// Toggle planet labels visibility
function togglePlanetLabels() {
    showLabels = !showLabels;
    
    // Update button active state visually
    const toggleLabelsButton = document.querySelector('.toggle-labels');
    if (toggleLabelsButton) {
        if (showLabels) {
            toggleLabelsButton.classList.add('active');
        } else {
            toggleLabelsButton.classList.remove('active');
        }
    }
    
    // Update visibility of all permanent labels
    updatePermanentLabelsVisibility();
    
    // Hide hover label if labels are turned off
    if (!showLabels) {
        planetLabel.style.display = 'none';
        document.body.style.cursor = 'default';
    }
}

// Create toggle orbits button
function createToggleOrbitsButton() {
    const button = document.createElement('button');
    button.className = 'toggle-button toggle-orbits';
    button.textContent = languages[currentLanguage].toggleOrbits;
    button.addEventListener('click', toggleOrbitPaths);
    return button;
}

// Create toggle view button
function createToggleViewButton() {
    const button = document.createElement('button');
    button.className = 'toggle-button toggle-view';
    button.textContent = languages[currentLanguage].toggleView;
    button.addEventListener('click', toggleTopDownView);
    return button;
}

// Create toggle speed button
function createToggleSpeedButton() {
    const button = document.createElement('button');
    button.className = 'toggle-button toggle-speed';
    button.textContent = languages[currentLanguage].toggleSpeed;
    button.addEventListener('click', () => {
        button.textContent = toggleAnimationSpeed();
    });
    return button;
}

// Create toggle stars button
function createToggleStarsButton() {
    const button = document.createElement('button');
    button.className = 'toggle-button toggle-stars';
    button.textContent = languages[currentLanguage].toggleStars;
    button.addEventListener('click', toggleStarField);
    return button;
}

// Create toggle labels button
function createToggleLabelsButton() {
    const button = document.createElement('button');
    button.className = 'toggle-button toggle-labels';
    button.textContent = languages[currentLanguage].toggleLabels;
    button.addEventListener('click', togglePlanetLabels);
    return button;
}

// Focus camera on object
function focusOnObject(object) {
    if (!object) return;
    
    currentFocusObject = object;
    
    // Find the planet data for the clicked object (could be planet or moon)
    currentFocusPlanetData = null;
    let isMoon = false;
    
    // Check if it's the sun
    if (object === sun) {
        // For sun, just do the regular focus without tracking
        followObjectWithCamera(object);
        return;
    }
    
    // Check if it's a planet
    for (const planetData of planetObjects) {
        if (planetData.object === object) {
            currentFocusPlanetData = planetData;
            break;
        }
        
        // Check if it's one of this planet's moons
        if (planetData.moons) {
            for (const moonData of planetData.moons) {
                if (moonData.object === object) {
                    currentFocusPlanetData = planetData;
                    isMoon = true;
                    break;
                }
            }
            if (isMoon) break;
        }
    }
    
    // Follow the object
    followObjectWithCamera(object);
}

// Function to follow an object with the camera
function followObjectWithCamera(object) {
    // Get world position of the object
    const objectWorldPosition = new THREE.Vector3();
    object.getWorldPosition(objectWorldPosition);
    
    // Calculate camera position - put camera at a distance proportional to object size
    const objectSize = object.geometry.boundingSphere.radius;
    const distanceFactor = 24; // Increased from 8 to 24 (3 times more distance)
    const cameraDistance = objectSize * distanceFactor;
    
    const newCameraPosition = new THREE.Vector3();
    newCameraPosition.x = objectWorldPosition.x;
    newCameraPosition.y = objectWorldPosition.y + objectSize * 0.5; // Slightly above center
    newCameraPosition.z = objectWorldPosition.z + cameraDistance;
    
    // Animate camera move
    if (window.gsap) {
        window.gsap.to(camera.position, {
            x: newCameraPosition.x,
            y: newCameraPosition.y,
            z: newCameraPosition.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function() {
                camera.lookAt(objectWorldPosition);
            }
        });
        
        // Set orbit controls to target the object
        window.gsap.to(controls.target, {
            x: objectWorldPosition.x,
            y: objectWorldPosition.y,
            z: objectWorldPosition.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function() {
                controls.update();
            }
        });
    } else {
        // Fallback if GSAP is not loaded
        camera.position.copy(newCameraPosition);
        camera.lookAt(objectWorldPosition);
        controls.target.copy(objectWorldPosition);
        controls.update();
    }
}

// Create language menu
function createLanguageMenu() {
    const menu = document.createElement('div');
    menu.className = 'lang-menu';
    
    const title = document.createElement('div');
    title.className = 'lang-title';
    title.textContent = languages[currentLanguage].menuTitle;
    menu.appendChild(title);
    
    const options = document.createElement('div');
    options.className = 'lang-options';
    
    for (const lang in languages) {
        const option = document.createElement('div');
        option.className = 'lang-option';
        option.textContent = lang.toUpperCase();
        option.dataset.lang = lang;
        if (lang === currentLanguage) {
            option.classList.add('active');
        }
        option.addEventListener('click', (e) => {
            currentLanguage = e.target.dataset.lang;
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.remove('active');
            });
            e.target.classList.add('active');
            title.textContent = languages[currentLanguage].menuTitle;
            
            // Update the planet label if visible
            if (planetLabel.style.display === 'block') {
                const object = planetLabel.dataset.object;
                if (object && languages[currentLanguage][object.toLowerCase()]) {
                    planetLabel.textContent = languages[currentLanguage][object.toLowerCase()];
                }
            }
            
            // Update pause button text
            if (pauseResumeButton) {
                pauseResumeButton.textContent = isAnimationPaused ? 
                    languages[currentLanguage].resume : 
                    languages[currentLanguage].pause;
            }
            
            // Update reset button text
            resetCameraButton.textContent = languages[currentLanguage].resetCamera;
        });
        options.appendChild(option);
    }
    
    menu.appendChild(options);
    document.body.appendChild(menu);
}

// Create planet label element
const planetLabel = document.createElement('div');
planetLabel.id = 'planet-label';
planetLabel.className = 'planet-label';
planetLabel.style.display = 'none';
document.body.appendChild(planetLabel);

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 50, 150);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Create texture loader
const textureLoader = new THREE.TextureLoader();

// Create skybox with stars
const skyboxGeometry = new THREE.SphereGeometry(900, 32, 32);
const skyboxTexture = textureLoader.load('assets/textures/star_field.jpg');
skyboxTexture.wrapS = THREE.RepeatWrapping;
skyboxTexture.wrapT = THREE.RepeatWrapping;
skyboxTexture.repeat.set(10, 10);
const skyboxMaterial = new THREE.MeshBasicMaterial({
    map: skyboxTexture,
    side: THREE.BackSide
});
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

// Add background stars as particles for better visibility
const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.2,
    transparent: true,
    opacity: 0.8
});

const starsVertices = [];
for (let i = 0; i < 15000; i++) {
    const x = THREE.MathUtils.randFloatSpread(1800);
    const y = THREE.MathUtils.randFloatSpread(1800);
    const z = THREE.MathUtils.randFloatSpread(1800);
    
    // Keep stars away from the center of the scene
    if (Math.abs(x) < 200 && Math.abs(y) < 200 && Math.abs(z) < 200) {
        continue;
    }
    
    starsVertices.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// Add hemisphere light for better overall illumination
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040, 1.5);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(0, 0, 0);
scene.add(directionalLight);

// Add additional directional lights from different angles
const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
frontLight.position.set(0, 0, 200);
scene.add(frontLight);

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(0, 0, -200);
scene.add(backLight);

const topLight = new THREE.DirectionalLight(0xffffff, 0.6);
topLight.position.set(0, 200, 0);
scene.add(topLight);

// Create Sun (star)
const sunGeometry = new THREE.SphereGeometry(10, 64, 64);
const sunTexture = textureLoader.load('assets/textures/sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture,
    emissive: 0xffff00,
    emissiveIntensity: 0.5
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.name = 'sun';
sun.userData = { name: 'sun' }; // Keep both for compatibility
scene.add(sun);

// Add point light at sun's position
const sunLight = new THREE.PointLight(0xffffff, 2, 300);
sun.add(sunLight);

// Solar system data with realistic relative sizes and distances (scaled)
const planets = [
    {
        name: 'Mercury',
        radius: 0.38, // Relative to Earth = 1
        distance: 30, // Distance from Sun, scaled
        textureMap: 'assets/textures/mercury.jpg',
        rotationSpeed: 0.004,
        orbitSpeed: 0.008,
        tilt: 0.03,
        moons: [] // Mercury has no moons
    },
    {
        name: 'Venus',
        radius: 0.95,
        distance: 40,
        textureMap: 'assets/textures/venus.jpg',
        rotationSpeed: 0.002,
        orbitSpeed: 0.006,
        tilt: 3.1,
        moons: [] // Venus has no moons
    },
    {
        name: 'Earth',
        radius: 1,
        distance: 50,
        textureMap: 'assets/textures/earth.jpg',
        rotationSpeed: 0.01,
        orbitSpeed: 0.005,
        tilt: 0.41,
        moons: [
            {
                name: 'Moon',
                radius: 0.27,
                distance: 3,
                textureMap: 'assets/textures/moon.jpg',
                orbitSpeed: 0.015,
                orbitInclination: 0.1
            }
        ]
    },
    {
        name: 'Mars',
        radius: 0.53,
        distance: 60,
        textureMap: 'assets/textures/mars.jpg',
        rotationSpeed: 0.008,
        orbitSpeed: 0.004,
        tilt: 0.44,
        moons: [
            {
                name: 'Phobos',
                radius: 0.04,
                distance: 1.5,
                color: 0xaaaaaa,
                orbitSpeed: 0.02,
                orbitInclination: 0.3
            },
            {
                name: 'Deimos',
                radius: 0.03,
                distance: 2.3,
                color: 0x888888,
                orbitSpeed: 0.012,
                orbitInclination: 0.4
            }
        ]
    },
    {
        name: 'Jupiter',
        radius: 11.2,
        distance: 90,
        textureMap: 'assets/textures/jupiter.jpg',
        rotationSpeed: 0.02,
        orbitSpeed: 0.002,
        tilt: 0.05,
        moons: [
            {
                name: 'Io',
                radius: 0.29,
                distance: 13,
                color: 0xf9f97f,
                orbitSpeed: 0.008,
                orbitInclination: 0.1
            },
            {
                name: 'Europa',
                radius: 0.25,
                distance: 18,
                color: 0xb5c7d3,
                orbitSpeed: 0.006,
                orbitInclination: 0.2
            },
            {
                name: 'Ganymede',
                radius: 0.41,
                distance: 24,
                color: 0x8b7d82,
                orbitSpeed: 0.004,
                orbitInclination: 0.15
            },
            {
                name: 'Callisto',
                radius: 0.38,
                distance: 30,
                color: 0x6a6a6a,
                orbitSpeed: 0.003,
                orbitInclination: 0.25
            }
        ]
    },
    {
        name: 'Saturn',
        radius: 9.45,
        distance: 120,
        textureMap: 'assets/textures/saturn.jpg',
        rotationSpeed: 0.018,
        orbitSpeed: 0.0015,
        tilt: 0.47,
        hasRings: true,
        ringTexture: 'assets/textures/saturn_ring.png',
        moons: [
            {
                name: 'Titan',
                radius: 0.4,
                distance: 22,
                color: 0xeba52c,
                orbitSpeed: 0.005,
                orbitInclination: 0.3
            },
            {
                name: 'Rhea',
                radius: 0.12,
                distance: 16,
                color: 0xdddddd,
                orbitSpeed: 0.007,
                orbitInclination: 0.2
            },
            {
                name: 'Enceladus',
                radius: 0.08,
                distance: 10,
                color: 0xfefefe,
                orbitSpeed: 0.01,
                orbitInclination: 0.15
            }
        ]
    },
    {
        name: 'Uranus',
        radius: 4.0,
        distance: 150,
        textureMap: 'assets/textures/uranus.jpg',
        rotationSpeed: 0.012,
        orbitSpeed: 0.001,
        tilt: 1.71,
        hasRings: true,
        moons: [
            {
                name: 'Miranda',
                radius: 0.06,
                distance: 6,
                color: 0xcccccc,
                orbitSpeed: 0.01,
                orbitInclination: 0.2
            },
            {
                name: 'Ariel',
                radius: 0.09,
                distance: 10,
                color: 0xdddddd,
                orbitSpeed: 0.007,
                orbitInclination: 0.3
            },
            {
                name: 'Titania',
                radius: 0.12,
                distance: 14,
                color: 0xbbbbbb,
                orbitSpeed: 0.005,
                orbitInclination: 0.15
            }
        ]
    },
    {
        name: 'Neptune',
        radius: 3.88,
        distance: 180,
        textureMap: 'assets/textures/neptune.jpg',
        rotationSpeed: 0.014,
        orbitSpeed: 0.0008,
        tilt: 0.49,
        moons: [
            {
                name: 'Triton',
                radius: 0.22,
                distance: 12,
                color: 0xe5e5e5,
                orbitSpeed: 0.006,
                orbitInclination: 0.5,
                retrograde: true
            }
        ]
    }
];

// Create planet objects
const planetObjects = [];

// Helper function to create orbit path
function createOrbitPath(radius) {
    // Create a circle curve for the orbit
    const curve = new THREE.EllipseCurve(
        0, 0,               // Center x, y
        radius, radius,     // xRadius, yRadius
        0, 2 * Math.PI,     // Start angle, end angle
        false,              // Clockwise
        0                   // Rotation
    );
    
    // Get points from the curve with 128 segments
    const points = curve.getPoints(128);
    
    // Convert 2D points to 3D points
    const path3D = new THREE.CurvePath();
    const point3DList = [];
    
    for (const point of points) {
        point3DList.push(new THREE.Vector3(point.x, 0, point.y));
    }
    
    // Create a tube geometry along the path
    const tubeRadius = 0.1; // Radius of the tube
    const tubeSegments = 128; // Number of segments around the tube
    const geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(point3DList),
        tubeSegments,
        tubeRadius,
        8, // radial segments
        true // closed
    );
    
    // Create material with glow effect
    const material = new THREE.MeshBasicMaterial({
        color: 0xaaaaaa,
        transparent: true,
        opacity: 0.7,
        emissive: 0x888888,
        emissiveIntensity: 0.3
    });
    
    // Create the orbit mesh
    const orbit = new THREE.Mesh(geometry, material);
    return orbit;
}

// Helper function to create moon orbit path
function createMoonOrbitPath(radius) {
    // Create a circle curve for the orbit
    const curve = new THREE.EllipseCurve(
        0, 0,               // Center x, y
        radius, radius,     // xRadius, yRadius
        0, 2 * Math.PI,     // Start angle, end angle
        false,              // Clockwise
        0                   // Rotation
    );
    
    // Get points from the curve with 64 segments
    const points = curve.getPoints(64);
    
    // Convert 2D points to 3D points
    const path3D = new THREE.CurvePath();
    const point3DList = [];
    
    for (const point of points) {
        point3DList.push(new THREE.Vector3(point.x, 0, point.y));
    }
    
    // Create a tube geometry along the path
    const tubeRadius = 0.05; // Smaller radius for moon orbits
    const tubeSegments = 64; // Number of segments around the tube
    const geometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(point3DList),
        tubeSegments,
        tubeRadius,
        8, // radial segments
        true // closed
    );
    
    // Create material with glow effect
    const material = new THREE.MeshBasicMaterial({
        color: 0x9999aa,
        transparent: true,
        opacity: 0.7,
        emissive: 0x888888,
        emissiveIntensity: 0.2
    });
    
    // Create the orbit mesh
    const orbit = new THREE.Mesh(geometry, material);
    return orbit;
}

// Create planets
planets.forEach(planetData => {
    // Create orbit path
    const orbitPath = createOrbitPath(planetData.distance);
    scene.add(orbitPath);
    
    // Store the orbit path reference in planetData for toggling visibility
    planetData.orbitPath = orbitPath;
    
    // Set initial visibility based on showOrbits state
    orbitPath.visible = showOrbits;
    
    // Create planet
    const scaleFactor = 0.8; // Scale down to fit
    const planetGeometry = new THREE.SphereGeometry(planetData.radius * scaleFactor, 64, 64);
    
    // Load texture map
    const texture = textureLoader.load(planetData.textureMap);
    
    const planetMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.5,
        metalness: 0.1,
        emissive: 0x222222,
        emissiveIntensity: 0.1
    });
    
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    const planetName = planetData.name.toLowerCase();
    planet.name = planetName;
    planet.userData = { name: planetName }; // Add name data for raycasting
    
    // Create a pivot object to handle orbit
    const planetPivot = new THREE.Object3D();
    planetPivot.add(planet);
    
    // Position the planet along its orbit
    const initialAngle = Math.random() * Math.PI * 2;
    planet.position.x = planetData.distance;
    
    // Apply tilt to the planet
    if (planetData.tilt) {
        planet.rotation.x = planetData.tilt;
    }
    
    // Add rings for Saturn and Uranus
    if (planetData.hasRings) {
        const ringSize = planetData.radius * 1.8 * scaleFactor;
        const ringGeometry = new THREE.RingGeometry(
            ringSize, 
            ringSize + planetData.radius * 0.5 * scaleFactor, 
            64
        );
        
        // Use texture for Saturn's rings if available
        let ringMaterial;
        if (planetData.name === 'Saturn' && planetData.ringTexture) {
            const ringTexture = textureLoader.load(planetData.ringTexture);
            ringMaterial = new THREE.MeshBasicMaterial({
                map: ringTexture,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.9
            });
        } else {
            let ringColor = 0xc2a37b; // Saturn color
            if (planetData.name === 'Uranus') {
                ringColor = 0x9db4c0; // Uranus ring color
            }
            
            ringMaterial = new THREE.MeshBasicMaterial({
                color: ringColor,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7
            });
        }
        
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
    }
    
    // Add moons if the planet has any
    if (planetData.moons && planetData.moons.length > 0) {
        planetData.moons.forEach(moonData => {
            const moonGeometry = new THREE.SphereGeometry(moonData.radius * scaleFactor, 32, 32);
            
            let moonMaterial;
            
            // Load moon texture if available, otherwise use color
            if (moonData.textureMap) {
                const moonTexture = textureLoader.load(moonData.textureMap);
                moonMaterial = new THREE.MeshStandardMaterial({
                    map: moonTexture,
                    roughness: 0.5,
                    metalness: 0.1
                });
            } else {
                moonMaterial = new THREE.MeshStandardMaterial({
                    color: moonData.color,
                    roughness: 0.5,
                    metalness: 0.1,
                    emissive: moonData.color,
                    emissiveIntensity: 0.1
                });
            }
            
            const moon = new THREE.Mesh(moonGeometry, moonMaterial);
            const moonName = moonData.name.toLowerCase();
            moon.name = moonName;
            moon.userData = { name: moonName }; // Add name data for raycasting
            
            // Create a pivot for the moon to orbit the planet
            const moonPivot = new THREE.Object3D();
            
            // Apply orbit inclination if specified
            if (moonData.orbitInclination) {
                moonPivot.rotation.x = moonData.orbitInclination;
            }
            
            planet.add(moonPivot);
            moonPivot.add(moon);
            
            // Position the moon
            moon.position.x = moonData.distance;
            
            // For retrograde orbits (like Neptune's Triton)
            if (moonData.retrograde) {
                moonData.orbitSpeed = -Math.abs(moonData.orbitSpeed);
            }
            
            // Create orbit path for the moon using the helper function
            const moonOrbit = createMoonOrbitPath(moonData.distance);
            
            // Apply the same rotation to the orbit visualization
            if (moonData.orbitInclination) {
                moonOrbit.rotation.x = moonData.orbitInclination;
            }
            
            planet.add(moonOrbit);
            
            // Store the orbit path reference in moonData for toggling visibility
            moonData.orbitPath = moonOrbit;
            
            // Set initial visibility based on showOrbits state
            moonOrbit.visible = showOrbits;
            
            // Save moon data
            moonData.object = moon;
            moonData.pivot = moonPivot;
        });
    }
    
    // Save all data for animation
    planetData.object = planet;
    planetData.pivot = planetPivot;
    planetObjects.push(planetData);
    
    // Add to scene
    scene.add(planetPivot);
});

// Setup raycaster for mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Track the last known mouse position
let lastMouseX = 0;
let lastMouseY = 0;

// Track all objects that can be moused over
const interactiveObjects = [sun, ...planetObjects.map(p => p.object)];
// Add moons to interactive objects
planetObjects.forEach(planetData => {
    if (planetData.moons) {
        planetData.moons.forEach(moonData => {
            interactiveObjects.push(moonData.object);
        });
    }
});

// Create permanent labels for all celestial bodies
const permanentLabels = {};

function createPermanentLabels() {
    // Create sun label
    const sunLabel = document.createElement('div');
    sunLabel.className = 'permanent-label';
    sunLabel.textContent = languages[currentLanguage].sun;
    document.body.appendChild(sunLabel);
    permanentLabels.sun = sunLabel;
    
    // Create planet and moon labels
    planetObjects.forEach(planetData => {
        const planetName = planetData.name.toLowerCase();
        const planetLabel = document.createElement('div');
        planetLabel.className = 'permanent-label';
        planetLabel.textContent = languages[currentLanguage][planetName];
        document.body.appendChild(planetLabel);
        permanentLabels[planetName] = planetLabel;
        
        // Create moon labels if the planet has moons
        if (planetData.moons) {
            planetData.moons.forEach(moonData => {
                const moonName = moonData.name.toLowerCase();
                const moonLabel = document.createElement('div');
                moonLabel.className = 'permanent-label';
                moonLabel.textContent = languages[currentLanguage][moonName];
                document.body.appendChild(moonLabel);
                permanentLabels[moonName] = moonLabel;
            });
        }
    });
    
    // Set initial visibility based on showLabels state
    updatePermanentLabelsVisibility();
}

// Update permanent labels visibility
function updatePermanentLabelsVisibility() {
    for (const label in permanentLabels) {
        permanentLabels[label].style.display = showLabels ? 'block' : 'none';
    }
}

// Update permanent label positions
function updatePermanentLabelPositions() {
    if (!showLabels) return;
    
    // Update sun label position
    const sunScreenPosition = getScreenPosition(sun);
    if (sunScreenPosition) {
        permanentLabels.sun.style.left = sunScreenPosition.x + 'px';
        permanentLabels.sun.style.top = (sunScreenPosition.y + 20) + 'px';
    } else {
        permanentLabels.sun.style.display = 'none';
    }
    
    // Update planet and moon labels
    planetObjects.forEach(planetData => {
        const planetName = planetData.name.toLowerCase();
        const planetScreenPosition = getScreenPosition(planetData.object);
        
        if (planetScreenPosition) {
            permanentLabels[planetName].style.left = planetScreenPosition.x + 'px';
            permanentLabels[planetName].style.top = (planetScreenPosition.y + 15) + 'px';
            permanentLabels[planetName].style.display = 'block';
        } else {
            permanentLabels[planetName].style.display = 'none';
        }
        
        // Update moon labels
        if (planetData.moons) {
            planetData.moons.forEach(moonData => {
                const moonName = moonData.name.toLowerCase();
                const moonScreenPosition = getScreenPosition(moonData.object);
                
                if (moonScreenPosition) {
                    permanentLabels[moonName].style.left = moonScreenPosition.x + 'px';
                    permanentLabels[moonName].style.top = (moonScreenPosition.y + 10) + 'px';
                    permanentLabels[moonName].style.display = 'block';
                } else {
                    permanentLabels[moonName].style.display = 'none';
                }
            });
        }
    });
}

// Helper function to get screen position of a 3D object
function getScreenPosition(object) {
    const vector = new THREE.Vector3();
    object.getWorldPosition(vector);
    
    // Check if object is in front of the camera
    const frustum = new THREE.Frustum();
    const cameraViewProjectionMatrix = new THREE.Matrix4();
    camera.updateMatrixWorld(); // Make sure the camera matrix is updated
    cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);
    
    if (!frustum.containsPoint(vector)) {
        return null; // Object is outside camera frustum
    }
    
    // Project to screen coordinates
    vector.project(camera);
    
    return {
        x: Math.round((0.5 + vector.x / 2) * window.innerWidth),
        y: Math.round((0.5 - vector.y / 2) * window.innerHeight)
    };
}

// Handle mouse move to update planet label
function onMouseMove(event) {
    // Save current mouse position
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    
    if (!showLabels) {
        planetLabel.style.display = 'none';
        document.body.style.cursor = 'default';
        return;
    }
    
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Check for intersections
    const intersects = raycaster.intersectObjects(interactiveObjects);
    
    if (intersects.length > 0) {
        const object = intersects[0].object;
        let bodyName = '';
        
        // Get the correct name from the object or its userData
        if (object.name && object.name !== '') {
            bodyName = object.name.toLowerCase();
        } else if (object.userData && object.userData.name) {
            bodyName = object.userData.name.toLowerCase();
        }
        
        // Display label if we found a valid name
        if (bodyName && languages[currentLanguage][bodyName]) {
            planetLabel.textContent = languages[currentLanguage][bodyName];
            planetLabel.style.display = 'block';
            planetLabel.style.left = event.clientX + 'px';
            planetLabel.style.top = event.clientY + 'px';
            document.body.style.cursor = 'pointer';
        } else {
            planetLabel.style.display = 'none';
            document.body.style.cursor = 'default';
        }
    } else {
        planetLabel.style.display = 'none';
        document.body.style.cursor = 'default';
    }
}

// Handle click events for focusing on planets
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Check for intersections
    const intersects = raycaster.intersectObjects(interactiveObjects);
    
    if (intersects.length > 0) {
        const object = intersects[0].object;
        focusOnObject(object);
    }
}

// Add event listeners
document.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    if (!isAnimationPaused) {
        // Rotate skybox
        skybox.rotation.y += 0.0001 * animationSpeed;
        
        // Slowly rotate stars for subtle movement
        stars.rotation.y += 0.0001 * animationSpeed;
        stars.rotation.x += 0.00005 * animationSpeed;
        
        // Rotate sun
        sun.rotation.y += 0.001 * animationSpeed;
        
        // Animate planets
        planetObjects.forEach(planetData => {
            // Planet self-rotation
            planetData.object.rotation.y += planetData.rotationSpeed * animationSpeed;
            
            // Planet orbit around sun
            planetData.pivot.rotation.y += planetData.orbitSpeed * animationSpeed;
            
            // Animate moons if the planet has any
            if (planetData.moons) {
                planetData.moons.forEach(moonData => {
                    moonData.pivot.rotation.y += moonData.orbitSpeed * animationSpeed;
                });
            }
        });
        
        // Update camera to follow the focused object
        if (currentFocusObject && currentFocusPlanetData) {
            // Get the current world position of the focused object
            const objectWorldPosition = new THREE.Vector3();
            currentFocusObject.getWorldPosition(objectWorldPosition);
            
            // Update camera and controls to keep looking at the object
            controls.target.copy(objectWorldPosition);
            
            // Calculate new camera position to maintain the same relative position
            const objectSize = currentFocusObject.geometry.boundingSphere.radius;
            const distanceFactor = 24; // Increased from 8 to 24 (3 times more distance)
            const cameraDistance = objectSize * distanceFactor;
            
            // Create an offset vector that rotates with the planet
            const offsetVector = new THREE.Vector3(0, objectSize * 0.5, cameraDistance);
            
            // Convert this offset to world space
            const objectMatrix = new THREE.Matrix4();
            currentFocusObject.updateMatrixWorld();
            objectMatrix.extractRotation(currentFocusObject.matrixWorld);
            offsetVector.applyMatrix4(objectMatrix);
            
            // Apply the offset to position the camera
            camera.position.copy(objectWorldPosition).add(offsetVector);
            
            // Look at the object
            camera.lookAt(objectWorldPosition);
        }
    }
    
    // Update permanent label positions if they exist
    if (Object.keys(permanentLabels).length > 0) {
        updatePermanentLabelPositions();
    }
    
    controls.update();
    renderer.render(scene, camera);
}

// Add GSAP library for smooth animations
function loadGSAP() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Initialize the UI
async function initUI() {
    await loadGSAP(); // Load GSAP first
    
    // Remove any existing controls first to avoid duplicates
    const existingControls = document.querySelectorAll('.control-panel, .toggle-stars, .toggle-labels, .toggle-orbits, .reset-button');
    existingControls.forEach(el => el.remove());
    
    // Create control panel container
    const controlPanel = document.createElement('div');
    controlPanel.className = 'solar-control-panel';
    document.body.appendChild(controlPanel);
    
    // Create language menu
    createLanguageMenu();
    
    // Create all control buttons
    const pauseResumeButton = document.createElement('button');
    pauseResumeButton.className = 'solar-control-button';
    pauseResumeButton.textContent = isAnimationPaused ? languages[currentLanguage].resume : languages[currentLanguage].pause;
    pauseResumeButton.addEventListener('click', () => {
        isAnimationPaused = !isAnimationPaused;
        pauseResumeButton.textContent = isAnimationPaused ? 
            languages[currentLanguage].resume : 
            languages[currentLanguage].pause;
    });
    
    const resetCameraButton = document.createElement('button');
    resetCameraButton.className = 'solar-reset-button';
    resetCameraButton.textContent = languages[currentLanguage].resetCamera;
    resetCameraButton.addEventListener('click', resetCamera);
    
    const toggleOrbitsButton = document.createElement('button');
    toggleOrbitsButton.className = 'solar-toggle-button solar-toggle-orbits';
    if (showOrbits) toggleOrbitsButton.classList.add('active');
    toggleOrbitsButton.textContent = languages[currentLanguage].toggleOrbits;
    toggleOrbitsButton.addEventListener('click', () => {
        toggleOrbitPaths();
        toggleOrbitsButton.classList.toggle('active', showOrbits);
    });
    
    const toggleViewButton = document.createElement('button');
    toggleViewButton.className = 'solar-toggle-button solar-toggle-view';
    if (topDownView) toggleViewButton.classList.add('active');
    toggleViewButton.textContent = languages[currentLanguage].toggleView;
    toggleViewButton.addEventListener('click', () => {
        toggleTopDownView();
        toggleViewButton.classList.toggle('active', topDownView);
    });
    
    const toggleSpeedButton = document.createElement('button');
    toggleSpeedButton.className = 'solar-toggle-button solar-toggle-speed';
    toggleSpeedButton.textContent = languages[currentLanguage].toggleSpeed;
    toggleSpeedButton.addEventListener('click', () => {
        const newText = toggleAnimationSpeed();
        toggleSpeedButton.textContent = newText;
    });
    
    const toggleStarsButton = document.createElement('button');
    toggleStarsButton.className = 'solar-toggle-button solar-toggle-stars';
    if (showStars) toggleStarsButton.classList.add('active');
    toggleStarsButton.textContent = languages[currentLanguage].toggleStars;
    toggleStarsButton.addEventListener('click', () => {
        toggleStarField();
        toggleStarsButton.classList.toggle('active', showStars);
    });
    
    const toggleLabelsButton = document.createElement('button');
    toggleLabelsButton.className = 'solar-toggle-button solar-toggle-labels';
    if (showLabels) toggleLabelsButton.classList.add('active');
    toggleLabelsButton.textContent = languages[currentLanguage].toggleLabels;
    toggleLabelsButton.addEventListener('click', () => {
        togglePlanetLabels();
        toggleLabelsButton.classList.toggle('active', showLabels);
    });
    
    // Add all buttons to the control panel
    controlPanel.appendChild(pauseResumeButton);
    controlPanel.appendChild(resetCameraButton);
    controlPanel.appendChild(toggleOrbitsButton);
    controlPanel.appendChild(toggleViewButton);
    controlPanel.appendChild(toggleSpeedButton);
    controlPanel.appendChild(toggleStarsButton);
    controlPanel.appendChild(toggleLabelsButton);
    
    // Create permanent labels for all celestial bodies
    createPermanentLabels();
    
    // Update button texts when language changes
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            currentLanguage = lang;
            
            // Update all permanent labels with new language
            for (const key in permanentLabels) {
                if (languages[lang][key]) {
                    permanentLabels[key].textContent = languages[lang][key];
                }
            }
            
            pauseResumeButton.textContent = isAnimationPaused ? 
                languages[lang].resume : 
                languages[lang].pause;
            resetCameraButton.textContent = languages[lang].resetCamera;
            toggleOrbitsButton.textContent = languages[lang].toggleOrbits;
            toggleViewButton.textContent = languages[lang].toggleView;
            
            // Special handling for speed button text
            if (animationSpeed === 0.5) {
                toggleSpeedButton.textContent = languages[lang].speedSlow;
            } else if (animationSpeed === 1) {
                toggleSpeedButton.textContent = languages[lang].speedNormal;
            } else {
                toggleSpeedButton.textContent = languages[lang].speedFast;
            }
            
            toggleStarsButton.textContent = languages[lang].toggleStars;
            toggleLabelsButton.textContent = languages[lang].toggleLabels;
        });
    });
}

// Call initUI instead of directly creating UI elements
initUI();

// Start animation
animate(); 
