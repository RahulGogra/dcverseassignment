export default function FloatingButton({ open }: { open: () => void }) {
    return (
      <button
        onClick={open}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all"
      >
        + Create New Avatar
      </button>
    );
  }
  