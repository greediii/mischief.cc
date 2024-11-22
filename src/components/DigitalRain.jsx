export default function DigitalRain() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-[#00ff00] text-xl font-matrix"
          style={{
            left: `${i * 5}%`,
            top: '-20px',
            animation: `digitalRain ${3 + Math.random() * 5}s linear infinite`,
            animationDelay: `-${Math.random() * 5}s`
          }}
        >
          {[...Array(30)].map((_, j) => (
            <div 
              key={j} 
              className="my-1 opacity-0"
              style={{
                animation: `fadeInOut 2s linear infinite`,
                animationDelay: `${j * 0.1}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
} 