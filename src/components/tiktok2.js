"use client";

import React, { useState, useEffect } from "react";

const Tiktok2 = ({ scale = "0.75" }) => {
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
        cite="https://www.tiktok.com/@kvin.he/video/7424209625005722885"
        data-video-id="7424209625005722885"
        style={{
          maxWidth: "605px",
          minWidth: "325px",
          scale,
          borderRadius: "32px",
        }}
      >
        <section>
          <a
            target="_blank"
            title="@kvin.he"
            href="https://www.tiktok.com/@kvin.he?refer=embed"
          >
            @kvin.he
          </a>{" "}
          Get ready for{" "}
          <a
            title="pickyeats"
            target="_blank"
            href="https://www.tiktok.com/tag/pickyeats?refer=embed"
          >
            #PickyEats
          </a>{" "}
          <a
            title="montreal"
            target="_blank"
            href="https://www.tiktok.com/tag/montreal?refer=embed"
          >
            #montreal
          </a>{" "}
          <a
            title="restaurant"
            target="_blank"
            href="https://www.tiktok.com/tag/restaurant?refer=embed"
          >
            #restaurant
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - Kevin He"
            href="https://www.tiktok.com/music/original-sound-7424209638249483013?refer=embed"
          >
            ♬ original sound - Kevin He
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default Tiktok2;
