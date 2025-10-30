export default function GradientVignette() {
  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[60vh] pointer-events-none z-40"
      style={{
        background: 'radial-gradient(ellipse 150% 100% at 50% 0%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)'
      }}
    />
  );
}
