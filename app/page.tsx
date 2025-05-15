"use client";
import { useState } from "react";
import Header from "./components/Header";
import AvatarGrid from "./components/AvatarGrid";
import FloatingButton from "./components/FloatingButton";
import CreateAvatarModal from "./components/CreateAvatarModal";

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <Header />
      <AvatarGrid />
      <FloatingButton open={() => setShowModal(true)} />
      {showModal && <CreateAvatarModal close={() => setShowModal(false)} />}
    </main>
  );
}
