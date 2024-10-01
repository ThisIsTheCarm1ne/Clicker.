"use client"

import {
  useRef
} from "react";

import {
  Canvas,
  useFrame
} from "@react-three/fiber";
import { Mesh } from "three";

interface IScore {
  score: number,
}

function Box({
  score
}: IScore) {

  const mesh = useRef<Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  // This block of code is responsible for color change of cube
  let red = 0, green = 0, blue = 0;

  // Maximum of every color value(r, g, b) is 255
  // So, When a user reaches it and goes for more we just cap the red (and later green) at 255
  if (score <= 255) {
    red = score;
  } else if (score > 255 && score <= 510) {
    //Quick fix to value reseting after closing threshold
    red = 255;

    green = score - 255
  } else if (score > 510) {
    red = 255;
    green = 255;

    blue = score - 510;
  }

  const color = `rgb(${red}, ${green}, ${blue})`;
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function Scene({
  score
}: IScore) {
  return (
    <Canvas className='h-full'>
      <ambientLight />
      <pointLight position={[15, 15, 15]} />
      <Box score={score} />
    </Canvas>
  )
}
