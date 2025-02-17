
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Authorization = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && agreed) {
      navigate('/success');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">
            Last step, sign the authorization form
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please sign and date the authorization form that we have filled out based on the information you provided earlier. Once that's done, we'll submit to the IRS on your behalf.
          </p>
          <p className="text-sm text-gray-500">
            You'll have an opportunity to save a copy before we wrap up.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-6 mb-8"
        >
          {/* Placeholder for the pre-filled form window */}
          <div className="bg-gray-50 border border-gray-200 rounded h-96 flex items-center justify-center text-gray-400">
            Pre-filled Form Preview
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Print Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
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
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back
            </button>

            <button
              type="submit"
              disabled={!name || !agreed}
              className="px-6 py-2 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Accept & Sign
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Authorization;
