"use client";

import { useState, useEffect } from "react";

export default function APITestPage() {
  const [user, setUser] = useState<{ name: string; title: string }>();

  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({ name: data.name, title: data.title });
      });
  }, []);

  return (
    <div>
      <div>
        API Route From <span className="font-bold underline">Client</span>
      </div>
      <div>
        Name: {user?.title} {user?.name}
      </div>
    </div>
  );
}
