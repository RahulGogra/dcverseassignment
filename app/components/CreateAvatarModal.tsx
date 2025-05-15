import { motion } from "framer-motion";

export default function CreateAvatarModal({ close }: { close: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md text-center"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Create New Avatar</h2>
        <p className="text-gray-600 mb-6">
          This is a placeholder modal. You can implement form logic here later.
        </p>
        <button
          className="px-5 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
          onClick={close}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
