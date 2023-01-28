import * as THREE from 'three'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'

//Data
const data = {
    White: {
        1994: 0.677,
        1995: 0.687,
        1996: 0.691,
        1997: 0.693,
        1998: 0.70,
        1999: 0.705,
        2000: 0.711,
        2001: 0.716,
        2002: 0.717,
        2003: 0.721,
        2004: 0.728,
        2005: 0.727,
        2006: 0.726,
        2007: 0.720,
        2008: 0.717,
        2009: 0.714,
        2010: 0.71,
        2011: 0.703,
        2012: 0.698,
        2013: 0.696,
        2014: 0.689,
        2015: 0.682,
        2016: 0.682,
        2017: 0.685,
        2018: 0.692,
        2019: 0.694,
        2020: 0.713,
        2021: 0.701
    },
    Black: {
        1994: 0.423,
        1995: 0.427,
        1996: 0.441,
        1997: 0.448,
        1998: 0.456,
        1999: 0.463,
        2000: 0.472,
        2001: 0.477,
        2002: 0.474,
        2003: 0.481,
        2004: 0.491,
        2005: 0.482,
        2006: 0.479,
        2007: 0.472,
        2008: 0.474,
        2009: 0.462,
        2010: 0.454,
        2011: 0.449,
        2012: 0.439,
        2013: 0.431,
        2014: 0.43,
        2015: 0.423,
        2016: 0.416,
        2017: 0.423,
        2018: 0.421,
        2019: 0.421,
        2020: 0.453,
        2021: 0.442
    },
    Native: {
        1994: 0.517,
        1995: 0.558,
        1996: 0.516,
        1997: 0.517,
        1998: 0.543,
        1999: 0.561,
        2000: 0.562,
        2001: 0.554,
        2002: 0.54,
        2003: 0.543,
        2004: 0.556,
        2005: 0.582,
        2006: 0.582,
        2007: 0.569,
        2008: 0.565,
        2009: 0.562,
        2010: 0.523,
        2011: 0.535,
        2012: 0.511,
        2013: 0.51,
        2014: 0.522,
        2015: 0.503,
        2016: 0.476,
        2017: 0.508,
        2018: 0.539,
        2019: 0.508,
        2020: 0.542,
        2021: 0.551
    },
    Asian: {
        1994: 0.513,
        1995: 0.508,
        1996: 0.508,
        1997: 0.528,
        1998: 0.526,
        1999: 0.531,
        2000: 0.528,
        2001: 0.539,
        2002: 0.546,
        2003: 0.563,
        2004: 0.598,
        2005: 0.601,
        2006: 0.608,
        2007: 0.60,
        2008: 0.595,
        2009: 0.593,
        2010: 0.589,
        2011: 0.58,
        2012: 0.566,
        2013: 0.574,
        2014: 0.573,
        2015: 0.561,
        2016: 0.554,
        2017: 0.572,
        2018: 0.579,
        2019: 0.577,
        2020: 0.603,
        2021: 0.599
    },
    Hispanic: {
        1994: 0.412,
        1995: 0.421,
        1996: 0.428,
        1997: 0.433,
        1998: 0.447,
        1999: 0.455,
        2000: 0.463,
        2001: 0.473,
        2002: 0.47,
        2003: 0.467,
        2004: 0.481,
        2005: 0.495,
        2006: 0.497,
        2007: 0.497,
        2008: 0.491,
        2009: 0.484,
        2010: 0.475,
        2011: 0.469,
        2012: 0.461,
        2013: 0.461,
        2014: 0.454,
        2015: 0.456,
        2016: 0.46,
        2017: 0.462,
        2018: 0.471,
        2019: 0.475,
        2020: 0.501,
        2021: 0.484
    }
}

const tl = gsap.timeline()

//Scene
const scene = new THREE.Scene()

//White House
const whiteHouse = new THREE.Object3D()
whiteHouse.position.set(-6, 0, 0)
whiteHouse.scale.set(0.5, 0.5, 0.5)
whiteHouse.name = 'White'
scene.add(whiteHouse)
const objLoader = new OBJLoader()
objLoader.setPath('/assets/')
objLoader.load('house.obj', function( object ) {
    object.translateY(0.79025)
    object.translateX(-1.554)
    object.scale.set(0.1, 0.1, 0.1)
    whiteHouse.add(object)
})

//Native House
const nativeHouse = new THREE.Object3D()
nativeHouse.position.set(-3, 0, 0)
nativeHouse.scale.set(0.5, 0.5, 0.5)
nativeHouse.name = 'Native'
scene.add(nativeHouse)
objLoader.load('house.obj', function( object ) {
    object.translateY(0.79025)
    object.translateX(-1.554)
    object.scale.set(0.1, 0.1, 0.1)
    nativeHouse.add(object)
})

//Black House
const blackHouse = new THREE.Object3D()
blackHouse.scale.set(0.5, 0.5, 0.5)
blackHouse.name = 'Black'
scene.add(blackHouse)
objLoader.load('house.obj', function( object ) {
    object.translateY(0.79025)
    object.scale.set(0.1, 0.1, 0.1)
    blackHouse.add(object)
})

//AANHPI House
const asianHouse = new THREE.Object3D()
asianHouse.position.set(3, 0, 0)
asianHouse.scale.set(0.5, 0.5, 0.5)
asianHouse.name = 'Asian'
scene.add(asianHouse)
objLoader.load('house.obj', function( object ) {
    object.translateY(0.79025)
    object.translateX(1.554)
    object.scale.set(0.1, 0.1, 0.1)
    asianHouse.add(object)
})

//Hispanic House
const hispanicHouse = new THREE.Object3D()
hispanicHouse.position.set(6, 0, 0)
hispanicHouse.scale.set(0.5, 0.5, 0.5)
hispanicHouse.name = 'Hispanic'
scene.add(hispanicHouse)
objLoader.load('house.obj', function( object ) {
    object.translateY(0.79025)
    object.translateX(1.554)
    object.scale.set(0.1, 0.1, 0.1)
    hispanicHouse.add(object)
})


//Slider controls
var yearSlider = document.getElementById("yearSlider");
var valueLabel = document.getElementById("valueLabel");
valueLabel.innerHTML = yearSlider.value;

let currentYear

function scaleHouse(house) {
    const newScale = data[house.name][currentYear]
    gsap.to(house.scale, 1, {x: newScale, y: newScale, z: newScale})
}

function updateHouses() {
    scaleHouse(blackHouse)
    scaleHouse(whiteHouse)
    scaleHouse(asianHouse)
    scaleHouse(nativeHouse)
    scaleHouse(hispanicHouse)
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        // Decrement the value of the slider
        yearSlider.value--;
        valueLabel.innerHTML = yearSlider.value;
        currentYear = yearSlider.value
        updateHouses()
      }
      // Check if the right arrow key was pressed
      else if (event.keyCode === 39) {
        // Increment the value of the slider
        yearSlider.value++;
        valueLabel.innerHTML = yearSlider.value;
        currentYear = yearSlider.value
        updateHouses()
    }
});

yearSlider.addEventListener("input", function(){
    valueLabel.innerHTML = yearSlider.value;
    currentYear = this.value
    updateHouses()
});

yearSlider.addEventListener("mousedown", function() {
    valueLabel.classList.add("scaleUp");
})

yearSlider.addEventListener("mouseup", function() {
      valueLabel.classList.remove("scaleUp");
})



//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//Light
const ptLight = new THREE.PointLight(0xffffff, 0.75, 100)
ptLight.position.set(0, 10, 10)
scene.add(ptLight)

const backLight = new THREE.PointLight(0xffffff, 0.25, 100)
backLight.position.set(0, -10, -10)
scene.add(backLight)

const ambLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambLight)


//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 12
camera.position.y = 1
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas}, {antialias:true})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas) // experiment with other controls in import statement?
controls.enableDamping = true
//controls.enableZoom = false
//controls.enablePan = false
//controls.autoRotate = true
//controls.autoRotateSpeed = 10

//Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})

let xSpace = 0.5

function updateXPositions() {
    const blackX = blackHouse.position.x
    nativeHouse.position.x = (blackX - (1.554 * (blackHouse.scale.x / 0.5) * 0.5) - xSpace)
    whiteHouse.position.x = (nativeHouse.position.x - (1.554 * nativeHouse.scale.x / 0.5) - xSpace)
    asianHouse.position.x = (blackX + (1.554 * (blackHouse.scale.x / 0.5) * 0.5) + xSpace)
    hispanicHouse.position.x = (asianHouse.position.x + (1.554 * asianHouse.scale.x / 0.5) + xSpace)
}

//Loop
const loop = () => {
    controls.update()
    updateXPositions()
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}
loop()

//Timeline
//tl.to({}, 0.05, {})
tl.to(whiteHouse.scale, {x: 0.677, y: 0.677, z: 0.677}, '1')
tl.to(blackHouse.scale, {x: 0.423, y: 0.423, z: 0.423}, '1')
tl.to(nativeHouse.scale, {x: 0.517, y: 0.517, z: 0.517}, '1')
tl.to(asianHouse.scale, {x: 0.513, y: 0.513, z: 0.513}, '1')
tl.to(hispanicHouse.scale, {x: 0.412, y: 0.412, z: 0.412}, '1')