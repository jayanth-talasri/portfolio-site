function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      {/* Main Purple Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full" />

      {/* Left Glow */}
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Right Glow */}
      <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />
    </div>
  );
}

export default Background;