
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartProcess = () => {
    navigate('/redirect');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Let's verify your identity
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'll use ID.me to verify your identity. This helps us ensure your information is secure and prevents fraud.
          </p>

          {/* Security Badge */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-sm text-primary/90 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Enterprise-Level Security & Encryption</span>
          </motion.div>

          <motion.button
            onClick={handleStartProcess}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            Verify with ID.me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
