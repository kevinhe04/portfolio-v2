"use client";

import React, { useState, useEffect } from "react";

const Tiktok = ({ scale = "0.75" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: `${scale * 325}px`,
        height: `${scale * 620}px`,
      }}
    >
      <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@kvin.he/video/7485845040401517879"
        data-video-id="7485845040401517879"
        style={{
          maxWidth: "605px",
          minWidth: "325px",
          scale,
          borderRadius: "32px",
        }}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@kvin.he"
            href="https://www.tiktok.com/@kvin.he?refer=embed"
          >
            @kvin.he
          </a>{" "}
          I was awake for 36 hours 😎{" "}
          <a
            title="cs"
            target="_blank"
            href="https://www.tiktok.com/tag/cs?refer=embed"
          >
            #cs
          </a>{" "}
          <a
            title="computerscience"
            target="_blank"
            href="https://www.tiktok.com/tag/computerscience?refer=embed"
          >
            #computerscience
          </a>{" "}
          <a
            title="software"
            target="_blank"
            href="https://www.tiktok.com/tag/software?refer=embed"
          >
            #software
          </a>{" "}
          <a
            title="coding"
            target="_blank"
            href="https://www.tiktok.com/tag/coding?refer=embed"
          >
            #coding
          </a>{" "}
          <a
            title="hackathon"
            target="_blank"
            href="https://www.tiktok.com/tag/hackathon?refer=embed"
          >
            #hackathon
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - Kevin He"
            href="https://www.tiktok.com/music/original-sound-7485845055661673222?refer=embed"
          >
            ♬ original sound - Kevin He
          </a>{" "}
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default Tiktok;
