import { useEffect, useState } from "react";
import { Icon } from "lucide-react";

interface AnimatedCounterProps {
  end: number;
  label: string;
  icon: typeof Icon;
  color?: string;
}

const AnimatedCounter = ({ end, label, icon: IconComponent, color }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = end / (duration / 30); // approx 30ms per update

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="bg-card p-6 rounded-lg flex flex-col items-center justify-center shadow-md">
      <IconComponent className={`w-10 h-10 mb-2 ${color ? `text-${color}-500` : "text-primary"}`} />
      <h3 className="text-2xl font-bold">{count}</h3>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
