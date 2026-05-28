import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, ThreeElements } from '@react-three/fiber'

function Cursor3D(props: ThreeElements['mesh'] & { cursorPos: [number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  return (
    <mesh
      {...props}
      position={[props.cursorPos[0], 0, props.cursorPos[1]]}
      ref={meshRef}
      scale={1}
      onClick={() => {}}
      onPointerOver={() => {}}
      onPointerOut={() => {}}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color={'#2f74c0'} />
    </mesh>
  )
}

 function Cursor3DBox() {
  const [cursorNormPos, setCursorNormPos] = useState<[number, number]>([0, 0])
  const [cursorPos, setCursorPos] = useState<[number, number]>([0, 0])


  useEffect(() => {
    const canvasElement = document.querySelector('canvas')
    if (!canvasElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasElement.getBoundingClientRect()
      if (e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top || e.clientY > rect.bottom) {
        return
      }

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = -(y / rect.height) * 2 + 1

      // Normalized coordinates in range [-1, 1] within the canvas
      setCursorNormPos([normalizedX, normalizedY])

      // Mapped coordinates within the canvas bounds 
      const multiplier = 648
      setCursorPos([normalizedX * rect.width / multiplier, normalizedY * rect.height / multiplier])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas style={{ height: "100%" }} camera={{ fov: 35, position: [0, -2, 0] }}>      
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Cursor3D cursorPos={cursorPos} />
    </Canvas>
  )
}
