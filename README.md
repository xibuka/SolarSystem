# 3D Solar System Animation

A 3D interactive animation of our solar system created using Three.js, featuring realistic planet motions, customized visuals, and educational content.

## Features

- Realistic model of the solar system with scaled planets
- Planetary motion with proper orbits and rotation
- Saturn and Uranus with detailed rings
- Moons for Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
- Interactive controls to move and zoom around the solar system
- Enhanced 3D orbit paths with tube geometry and glow effects
- Detailed particle-based starfield background
- Educational facts panel for each celestial body
- Multi-language support (English, Chinese, Japanese, Spanish, French)
- Intuitive control panel with various viewing options

## How to Run

### Option 1: Using a local web server

1. Clone or download this repository
2. Serve the files using a local web server:

   - You can use Python's built-in server:
     ```bash
     python -m http.server
     ```
   - Or Node.js's `http-server` package:
     ```bash
     npx http-server
     ```

3. Open your browser and navigate to `http://localhost:8000` (or whatever port your server uses)

### Option 2: Direct file access

Simply open the `index.html` file in a modern browser that supports ES modules (Chrome, Firefox, Safari, Edge).

## Controls

- **Left mouse button + drag**: Rotate the view
- **Mouse wheel**: Zoom in/out
- **Right mouse button + drag**: Pan the view
- **Click on a planet/moon**: Focus the camera on that object and display facts
- **Control Panel Buttons**:

  - **Pause/Resume**: Toggle animation playback
  - **Reset View**: Return to the default camera position
  - **Toggle Orbits**: Show/hide orbit paths
  - **Toggle View**: Switch between normal view and top-down view
  - **Toggle Speed**: Cycle through slow, normal, and fast animation speeds
  - **Toggle Stars**: Show/hide background stars
  - **Toggle Labels**: Show/hide celestial body labels

## Language Support

Switch between languages using the language selector in the top-right corner:

- English (en)
- Chinese (zh)
- Japanese (ja)
- Spanish (es)
- French (fr)

## Facts Panel

Click on any celestial body to display a facts panel with:

- Key statistics (diameter, mass, temperature, orbital period)
- Atmospheric composition
- Distance from the Sun
- Interesting facts about the body

## Visual Features

- Dynamic 3D tube-based orbit paths with glowing effects
- 15,000 particle-based stars for immersive space backdrop
- Subtle star rotation for a dynamic background
- Realistic planet textures and lighting
- Smooth camera transitions when focusing on objects

## Technical Details

This project uses:

- Three.js version 0.159.0 (latest as of creation date)
- ES6 modules for JavaScript
- OrbitControls for interactive camera movement
- GSAP for smooth animations and transitions
- Custom shaders for visual effects

## Browser Compatibility

Works best in modern browsers that support:

- WebGL 2
- ES6 Modules
- CSS features like backdrop-filter

## Live Demo

View the live demo on GitHub Pages: [Solar System Simulation](https://xibuka.github.io/SolarSystem/) 