import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function AppModal({ title, repoLink, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg text-center max-w-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">
            🚧 This app is not live yet, but you can view the full source code on GitHub.
          </p>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            View on GitHub
          </a>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AppModal;
