import * as THREE from "three"
import './sphere.css'
import {OrbitControls} from 'three/examples/jsm/controls/'

const scene = new THREE.scene()

const geometry = new THREE.SphereGeometry()
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83"
})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

const light = new THREE.PointLight(0xffffff,1,100)
lighy.position.set(10,10,10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height)
camera.position.z = 10
scene.add(camera)
  


const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({canvas})

 

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

window.addEventListener("resize",() => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height)
})

const loop = () => {
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()