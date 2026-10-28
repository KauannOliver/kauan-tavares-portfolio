export const networkNodes = [
  { label: "Automação", x: 25, y: 29, cor: "#079AE1" },
  { label: "Apps", x: 73, y: 20, cor: "#B78AFF" },
  { label: "Web", x: 86, y: 59, cor: "#00D4FF" },
  { label: "Dados", x: 59, y: 83, cor: "#F2C811" },
  { label: "Bots", x: 17, y: 72, cor: "#39FF88" },
  { label: "IA", x: 51, y: 48, cor: "#F36229" },
];
export const networkEdges = [
  [0, 1],
  [0, 4],
  [0, 5],
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 5],
  [4, 5],
];
export function NetworkGraphic({
  showStructure = true,
}: { showStructure?: boolean } = {}) {
  return (
    <svg
      className="network-svg"
      viewBox="0 0 560 480"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="network-glow">
          <stop stopColor="#079AE1" stopOpacity=".12" />
          <stop offset="1" stopColor="#079AE1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="280" cy="240" r="225" fill="url(#network-glow)" />
      <g stroke="#079AE1">
        <ellipse
          cx="280"
          cy="240"
          rx="220"
          ry="190"
          strokeDasharray="2 10"
          opacity=".25"
        />
        <ellipse cx="280" cy="240" rx="148" ry="128" opacity=".09" />
        {networkEdges.map(([a, b], i) => (
          <path
            opacity={showStructure ? 0.3 : 0}
            key={i}
            d={`M${networkNodes[a].x * 5.6} ${networkNodes[a].y * 4.8}L${networkNodes[b].x * 5.6} ${networkNodes[b].y * 4.8}`}
          />
        ))}
      </g>
      {networkNodes.map((node, i) => (
        <g
          key={node.label}
          transform={`translate(${node.x * 5.6},${node.y * 4.8})`}
        >
          <circle
            opacity={showStructure ? 1 : 0}
            r={i === 5 ? 25 : 19}
            fill={node.cor}
            fillOpacity=".04"
            stroke={node.cor}
            strokeOpacity=".35"
          />
          <circle
            opacity={showStructure ? 1 : 0}
            r={i === 5 ? 9 : 6}
            fill={node.cor}
          />
          <circle
            opacity={showStructure ? 1 : 0}
            r={i === 5 ? 15 : 11}
            stroke={node.cor}
            strokeOpacity=".3"
          />
          <rect
            x="-49"
            y="30"
            width="98"
            height="28"
            rx="5"
            fill="#0B1026"
            stroke={node.cor}
            strokeOpacity=".25"
          />
          <text
            y="48"
            textAnchor="middle"
            fill="#DDE6F5"
            fontSize="11"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
