
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to success page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/success');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="text-center space-y-6 max-w-lg mx-auto px-4">
        {/* Loading Animation */}
        <motion.div animate={{
        rotate: 360
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }} className="mx-auto w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full" />
        
        <motion.h2 className="text-2xl font-semibold text-gray-800" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>Great job!</motion.h2>
        
        <motion.p className="text-gray-600" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }}>
          Hold tight! You are being redirected...
        </motion.p>

        {/* Progress Bar */}
        <motion.div className="w-full max-w-xs mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div className="h-full bg-primary" initial={{
          width: "0%"
        }} animate={{
          width: "100%"
        }} transition={{
          duration: 3,
          ease: "easeInOut"
        }} />
        </motion.div>
      </motion.div>
    </div>;
};
export default Redirect;
