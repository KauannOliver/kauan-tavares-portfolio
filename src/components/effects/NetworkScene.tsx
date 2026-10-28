"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { Group, Mesh, Vector3 } from "three";
import { networkNodes, networkEdges } from "./NetworkGraphic";
function Packet({
  from,
  to,
  index,
  points,
}: {
  from: number;
  to: number;
  index: number;
  points: Vector3[];
}) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current)
      ref.current.position.lerpVectors(
        points[from],
        points[to],
        (clock.elapsedTime * 0.18 + index * 0.17) % 1,
      );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color={networkNodes[from].cor} />
    </mesh>
  );
}
function Network() {
  const group = useRef<Group>(null);
  const { viewport } = useThree();
  const points = useMemo(
    () =>
      networkNodes.map(
        (node) =>
          new Vector3(
            (node.x / 100 - 0.5) * viewport.width,
            (0.5 - node.y / 100) * viewport.height,
            0,
          ),
      ),
    [viewport.width, viewport.height],
  );
  useFrame(({ pointer }) => {
    if (group.current) {
      group.current.rotation.y +=
        (pointer.x * 0.08 - group.current.rotation.y) * 0.035;
      group.current.rotation.x +=
        (-pointer.y * 0.06 - group.current.rotation.x) * 0.035;
    }
  });
  return (
    <group ref={group}>
      {networkEdges.map(([a, b], i) => (
        <group key={i}>
          <Line
            points={[points[a], points[b]]}
            color="#079AE1"
            opacity={0.4}
            transparent
            lineWidth={1}
          />
          <Packet from={a} to={b} index={i} points={points} />
        </group>
      ))}
      {points.map((point, i) => (
        <group position={point} key={i}>
          <mesh>
            <icosahedronGeometry args={[i === 5 ? 0.19 : 0.13, 1]} />
            <meshBasicMaterial color={networkNodes[i].cor} wireframe />
          </mesh>
          <mesh>
            <sphereGeometry args={[i === 5 ? 0.07 : 0.045, 12, 12]} />
            <meshBasicMaterial color={networkNodes[i].cor} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
export default function NetworkScene({ onReady }: { onReady: () => void }) {
  return (
    <Canvas
      onCreated={onReady}
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <Network />
    </Canvas>
  );
}
