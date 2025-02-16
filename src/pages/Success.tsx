
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const FloatingShape = ({
  className
}: {
  className: string;
}) => <motion.div className={`floating-shape ${className}`} animate={{
  y: [0, -20, 0],
  opacity: [0.5, 0.8, 0.5]
}} transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
}} />;

const Success = () => {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timer = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        // Close the window after confetti animation
        setTimeout(() => {
          window.close();
        }, 3000);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      {/* Floating Shapes */}
      <FloatingShape className="w-72 h-72 bg-blue-100 rounded-full -top-20 -left-20 blur-3xl" />
      <FloatingShape className="w-96 h-96 bg-purple-100 rounded-full -bottom-32 -right-32 blur-3xl" />
      <FloatingShape className="w-48 h-48 bg-pink-100 rounded-full top-1/2 right-0 blur-2xl" />
      <FloatingShape className="w-64 h-64 bg-violet-100 rounded-full bottom-1/4 -left-20 blur-2xl" />
      
      <div className="container max-w-6xl mx-auto px-4 py-16 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
          >
            <svg 
              className="w-12 h-12 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 bg-clip-text text-transparent pb-2 leading-[1.2] px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Successfully Connected!
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your tax information has been securely connected. You'll be redirected back shortly.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-2 text-sm text-primary/90 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Secure Connection Established</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
