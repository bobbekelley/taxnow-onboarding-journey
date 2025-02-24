
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const Company = "LendingClub";
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate('/redirect');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl font-semibold text-gray-900">
            Connect with {Company}
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Handle your tax info the easy, secure win-win-win digging, no stress. 
            We'll securely retrieve your IRS data for you, saving you time and effort. You're 
            done in minutes - then we get to work.
          </p>

          <motion.button
            onClick={handleConnect}
            className="bg-[#8B5CF6] text-white px-6 py-2.5 rounded-md font-medium text-base hover:bg-[#7C3AED] transition-colors"
          >
            Connect Your Account
          </motion.button>

          <div className="pt-12">
            <img 
              src="/lovable-uploads/d70f1759-cbe7-4d4b-ab5e-7d20131ed619.png" 
              alt="TaxNow Certified Partner" 
              className="h-16 mx-auto opacity-80"
            />
            <p className="text-sm text-gray-500 mt-2">© 2024. Tax data will transfer in about 24h.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
