"use client";

// Shadcn UI
import { Button } from "@/components/ui/button";

// React
import { useState } from "react";

// Components
import QrReader from "@/components/ui/QrReader";

export default function Home() {
  const [openQr, setOpenQr] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div>
        <h1>Hello</h1>
        <Button onClick={() => setOpenQr(!openQr)} variant="destructive">
          {openQr ? "Close" : "Open"}
        </Button>
        {openQr && <QrReader />}
      </div>
    </main>
  );
}
