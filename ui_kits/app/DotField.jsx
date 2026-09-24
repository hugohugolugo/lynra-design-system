// Decorative pink marker-dot field used on hero/check-in surfaces.
function DotField({ color = "var(--lynra-red-ember)", opacity = 0.18 }) {
  const dots = [
    { x: 18, y: 12, r: 28 }, { x: 78, y: 6,  r: 18 },
    { x: 6,  y: 38, r: 16 }, { x: 65, y: 32, r: 36 },
    { x: 92, y: 50, r: 22 }, { x: 30, y: 60, r: 14 },
    { x: 12, y: 88, r: 32 }, { x: 70, y: 92, r: 20 },
    { x: 50, y: 80, r: 18 },
  ];
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      opacity, overflow: "hidden",
    }}>
      {dots.map((d, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${d.x}%`, top: `${d.y}%`,
          width: d.r * 2, height: d.r * 2,
          borderRadius: "50%",
          background: color,
          transform: "translate(-50%, -50%)",
        }}/>
      ))}
    </div>
  );
}
export { DotField };
if (typeof window !== "undefined") window.DotField = DotField;
