"use client";

import { useState, useEffect } from "react";

export default function APITestPage() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      });
  }, []);

  return (
    <div>
      <div>
        API Route From <span className="font-bold underline">Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  );
}
