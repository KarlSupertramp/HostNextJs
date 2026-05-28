import * as THREE from 'three'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

interface SineWaveProps  {
  color?: string;

  xDensity?: number;
  yDensity?: number;

  xAmount?: number;
  yAmount?: number;

  startPosX?: number;
  startPosY?: number;
  startPosZ?: number;

  timeScale?: number;
}

function SineWave(props: ThreeElements['points'] & SineWaveProps & { cursorPos: [number, number] }) {
  const pointsRef = useRef<THREE.Points>(null!)

  const xDensity = props.xDensity ?? 0.2
  const yDensity = props.yDensity ?? 0.2

  const xAmount = props.xAmount ?? 250
  const yAmount = props.yAmount ?? 16

  const startPosX = props.startPosX ?? 0
  const startPosY = props.startPosY ?? 0
  const startPosZ = props.startPosZ ?? 0

  const basePositions = useMemo(() => {
    const array = new Float32Array(xAmount * yAmount * 3)

    let i = 0

    for (
      let x = -Math.floor(xAmount / 2);
      x < Math.floor(xAmount / 2);
      x++
    ) {
      for (
        let y = -Math.floor(yAmount / 2);
        y < Math.floor(yAmount / 2);
        y++
      ) {
        array[i++] = startPosX + x * xDensity
        array[i++] = startPosY + y * yDensity
        array[i++] = startPosZ
      }
    }

    return array
  }, [])

  const animatedPositions = useMemo(() => {
    return new Float32Array(basePositions)
  }, [basePositions])

  const baseSizes = useMemo(() => {
    return new Float32Array(xAmount * yAmount).fill(1.2)
  }, [xAmount, yAmount])

  useFrame((state) => {
    const time = state.clock.elapsedTime * (props.timeScale ?? 0.1)

    const geometry = pointsRef.current.geometry
    const positionAttribute = geometry.attributes.position
    const positions = positionAttribute.array as Float32Array

    for (let i = 0; i < positions.length; i += 3) {
      const x = basePositions[i]
      const y = basePositions[i + 1]
      const z = basePositions[i + 2]

      const wave =
        Math.sin(x * 1.2 + time * 2.0) * 0.2 +
        Math.cos(y * 3 + time * 1.2) * 0.1

      // Calculate distance to cursor
      const dx = x - props.cursorPos[0]
      const dy = y - props.cursorPos[1]
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Apply magnet effect - attract points within radius
      let magnetEffect = 0
      const magnetRadius = 5
      const magnetStrength = 0.8

      if (distance < magnetRadius) {
        const influence = 1 - distance / magnetRadius
        magnetEffect = influence * influence * magnetStrength 
      }

      positions[i] = x
      positions[i + 1] = y
      positions[i + 2] = z + wave + magnetEffect
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <points ref={pointsRef} {...props}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={animatedPositions.length / 3}
          array={animatedPositions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={props.color || "white"}
        size={1.4}
        sizeAttenuation={false}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export function SineWaveBox(props: SineWaveProps) {
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

      const multiplier = 80
      setCursorPos([normalizedX * rect.width / multiplier, normalizedY * rect.height / multiplier])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas camera={{ fov: 35 }}>
      <SineWave 
        cursorPos={cursorPos}
        timeScale={props.timeScale} 
        color={props.color} 
        yDensity={props.yDensity} 
        xDensity={props.xDensity} 
        xAmount={props.xAmount}
        yAmount={props.yAmount}
        startPosX={props.startPosX} 
        startPosY={props.startPosY}
        startPosZ={props.startPosZ} /> 
    </Canvas>
  )
}
