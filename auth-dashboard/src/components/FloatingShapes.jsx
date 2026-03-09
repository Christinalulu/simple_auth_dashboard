// src/components/FloatingShapes.jsx
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large soft circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-pink-100 to-fuchsia-100 opacity-60 animate-pulse" />
      <div 
        className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-sky-100 to-indigo-100 opacity-50 animate-pulse" 
        style={{ animationDelay: "1.5s" }} 
      />
      <div 
        className="absolute top-1/2 -right-16 w-64 h-64 rounded-full bg-gradient-to-bl from-amber-100 to-rose-100 opacity-40 animate-pulse" 
        style={{ animationDelay: "3s" }} 
      />

      {/* Small floating dots */}
      {[
        { top: "12%", left: "8%", size: "w-3 h-3", color: "bg-pink-300", delay: "0s" },
        { top: "22%", right: "12%", size: "w-2 h-2", color: "bg-fuchsia-300", delay: "0.8s" },
        { top: "65%", left: "5%", size: "w-4 h-4", color: "bg-sky-300", delay: "1.2s" },
        { top: "78%", right: "8%", size: "w-2.5 h-2.5", color: "bg-indigo-300", delay: "0.4s" },
        { top: "40%", left: "3%", size: "w-2 h-2", color: "bg-rose-300", delay: "2s" },
        { top: "88%", left: "30%", size: "w-3 h-3", color: "bg-amber-300", delay: "1.6s" },
        { top: "8%", left: "40%", size: "w-2 h-2", color: "bg-teal-300", delay: "0.6s" },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} ${dot.color} rounded-full opacity-70`}
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animation: `bounce 3s ease-in-out infinite`,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingShapes;