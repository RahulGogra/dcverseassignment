import { motion } from "framer-motion";
import Image from "next/image";

type AvatarProps = {
  name: string;
  image: string;
};

export default function AvatarCard({ name, image }: AvatarProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-2xl shadow-lg w-64 text-center transition-all hover:shadow-xl"
    >
      <Image
        src={image}
        width={96}
        height={96}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-100 shadow-sm"
      />
      <p className="mt-3 text-lg font-semibold text-gray-800">{name}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
        Edit
      </button>
    </motion.div>
  );
}
