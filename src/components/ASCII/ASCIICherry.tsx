'use client';

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { AsciiRenderer } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Box({
  url,
  position,
  scale = [1, 1, 1],
}: {
  url: string;
  position: number[];
  scale?: number[];
}) {
  const ref = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF(url);

  // Actualizar la rotación en cada frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según necesites
    }
  });

  return (
    <primitive ref={ref} object={scene} position={position} scale={scale} />
  );
}

function ASCIICherry() {
  return (
    <Canvas camera={{ position: [5, 5, 3] }}>
      <color attach='background' args={['black']} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box url='/models/Cherry.glb' position={[-1.2, 0, 0]} scale={[1, 1, 1]} />
      <AsciiRenderer fgColor='#ff24e2' bgColor='transparent' />
    </Canvas>
  );
}

export { ASCIICherry };
