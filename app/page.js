"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const match = url.match(/[0-9a-fA-F-]{36}/);
    const id = match ? match[0] : url.trim();
    if (id) {
      router.push(`/project/${id}`);
    }
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>Agentic Project Viewer</h1>
        <p>Enter a Lovable project URL or UUID to view it.</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="https://lovable.dev/projects/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button">Open project</button>
        </form>
        <div className="hint">
          <span>Example:</span>
          <code>https://lovable.dev/projects/1b4afbf4-9a33-44c5-8729-12137c6bf0da</code>
        </div>
      </section>
    </main>
  );
}
