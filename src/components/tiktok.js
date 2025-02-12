"use client";

import React, { useEffect } from "react";

const Tiktok = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@kvin.he/video/7451827081287109894"
        data-video-id="7451827081287109894"
        style={{ maxWidth: "605px", minWidth: "325px", fontFamily: "Petrona" }}
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
          Kevin He x Kevin He collab??? @Winnipeg Jets{" "}
          <a
            title="kevinhe"
            target="_blank"
            href="https://www.tiktok.com/tag/kevinhe?refer=embed"
          >
            #kevinhe
          </a>{" "}
          <a
            title="NHL"
            target="_blank"
            href="https://www.tiktok.com/tag/NHL?refer=embed"
          >
            #NHL
          </a>{" "}
          <a
            title="hockey"
            target="_blank"
            href="https://www.tiktok.com/tag/hockey?refer=embed"
          >
            #hockey
          </a>{" "}
          <a
            title="winnipegjets"
            target="_blank"
            href="https://www.tiktok.com/tag/winnipegjets?refer=embed"
          >
            #winnipegjets
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - Kevin He"
            href="https://www.tiktok.com/music/original-sound-7451827091154750213?refer=embed"
          >
            ♬ original sound - Kevin He
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default Tiktok;
