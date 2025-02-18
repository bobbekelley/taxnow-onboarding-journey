import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Authorization = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && agreed) {
      navigate('/success');
    }
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download the filled form
    alert("Form download functionality would be implemented here");
  };

  return <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="space-y-6 text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Let's get the paperwork sorted!</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Please sign and date the tax information authorization below. We have already pre-filled it with the information that ID.me provided for your convenience.</p>
          
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
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="bg-white rounded-lg shadow-xl p-6 mb-8">
          {/* Placeholder for the pre-filled form window */}
          <div className="bg-gray-50 border border-gray-200 rounded h-96 flex items-center justify-center text-gray-400">
            Pre-filled Form Preview
          </div>
        </motion.div>

        <motion.form initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Print Name
            </label>
            <Input id="name" type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)} required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <Input 
              id="date" 
              type="text" 
              value={currentDate} 
              readOnly
              className="w-full bg-gray-50 cursor-not-allowed"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" checked={agreed} onCheckedChange={checked => setAgreed(checked as boolean)} className="mt-1" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I acknowledge that I have reviewed and agreed to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service & User Agreement
              </a>
            </label>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!name || !agreed}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Download Form
              </button>

              <button
                type="submit"
                disabled={!name || !agreed}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Accept & Sign
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>;
};

export default Authorization;
