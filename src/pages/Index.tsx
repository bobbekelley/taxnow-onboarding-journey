
import { motion } from "framer-motion";

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

const Index = () => {
  const Company = "LendingClub";

  return <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      {/* Floating Shapes */}
      <FloatingShape className="w-72 h-72 bg-blue-100 rounded-full -top-20 -left-20 blur-3xl" />
      <FloatingShape className="w-96 h-96 bg-purple-100 rounded-full -bottom-32 -right-32 blur-3xl" />
      <FloatingShape className="w-48 h-48 bg-pink-100 rounded-full top-1/2 right-0 blur-2xl" />
      <FloatingShape className="w-64 h-64 bg-violet-100 rounded-full bottom-1/4 -left-20 blur-2xl" />
      
      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-16 relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center space-y-8">
          <motion.span 
            className="inline-flex items-center rounded-full px-6 py-2 font-medium bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-primary text-lg border border-primary/10 backdrop-blur-sm hover:from-violet-500/30 hover:to-fuchsia-500/30 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Powered by TaxNow
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 bg-clip-text text-transparent pb-2 leading-[1.2] px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Connect to {Company}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Don't have your tax information laying around or have no idea how to get your hands on it? 
            <span className="block mt-2 text-primary/80">Let us handle all that for you!</span>
          </motion.p>

          {/* Security Badge */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-sm text-primary/90 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit mx-auto hover:bg-white/60 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Enterprise-Level Security & Encryption</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-violet-500 to-fuchsia-500 text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border border-white/20">
              Connect Your Account
            </button>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }} className="mt-16 pt-8 border-t border-gray-100 py-[3px] my-[10px]">
            <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by 1,000s of Taxpayers</p>
            <div className="flex justify-center items-center gap-4">
              <svg className="w-48 h-12 text-gray-400/50" viewBox="0 0 200 50" fill="currentColor">
                <circle cx="25" cy="25" r="8" />
                <circle cx="50" cy="25" r="8" />
                <circle cx="75" cy="25" r="8" />
                <circle cx="100" cy="25" r="8" />
                <circle cx="125" cy="25" r="8" />
                <circle cx="150" cy="25" r="8" />
                <circle cx="175" cy="25" r="8" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>;
};

export default Index;
