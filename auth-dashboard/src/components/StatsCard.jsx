function StatsCard({ title, value, icon, gradient, iconBg, valueColor }) {
  return (
    <div
      className={`rounded-2xl p-6 ${gradient} border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm ${iconBg}`}
      >
        {icon}
      </div>

      <p className={`text-4xl font-black tracking-tight mb-1 ${valueColor}`}>
        {value}
      </p>

      <p
        className={`text-xs font-bold uppercase tracking-widest ${valueColor} opacity-70`}
      >
        {title}
      </p>
    </div>
  );
}

export default StatsCard;