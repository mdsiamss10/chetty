function AnimatedBackground({ containerHeight }: { containerHeight: any }) {
  return (
    <>
      <div
        className="background"
        style={{
          height: containerHeight ?? "auto",
          maxHeight: containerHeight ?? "auto",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default AnimatedBackground;
