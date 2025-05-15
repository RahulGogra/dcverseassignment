"use client";
import { useEffect, useState } from "react";
import AvatarCard from "./AvatarCard";

type User = {
  id: number;
  first_name: string;
  avatar: string;
};

export default function AvatarGrid() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=3", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {users.map((user) => (
        <AvatarCard key={user.id} name={user.first_name} image={user.avatar} />
      ))}
    </div>
  );
}
