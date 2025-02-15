
import { motion } from "framer-motion";

const FloatingShape = ({ className }: { className: string }) => (
  <motion.div
    className={`floating-shape ${className}`}
    animate={{
      y: [0, -20, 0],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Floating Shapes */}
      <FloatingShape className="w-64 h-64 bg-primary/10 rounded-full -top-20 -left-20 blur-3xl" />
      <FloatingShape className="w-96 h-96 bg-emerald-100 rounded-full -bottom-32 -right-32 blur-3xl" />
      
      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
            Welcome to TaxNow
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Simplify Your Tax Filing Journey
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a smarter way to handle your taxes with our intelligent, guided process.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              Start Your Journey
            </button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Smart Filing",
                description: "AI-powered tax form completion",
              },
              {
                title: "Real-time Support",
                description: "Expert assistance when you need it",
              },
              {
                title: "Maximum Returns",
                description: "Optimize your tax returns automatically",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="glass-card rounded-2xl p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
