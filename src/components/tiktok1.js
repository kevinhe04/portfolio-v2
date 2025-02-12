"use client";
import React, { useEffect } from "react";

const Tiktok1 = () => {
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
        cite="https://www.tiktok.com/@kvin.he/video/7469206174420847878"
        data-video-id="7469206174420847878"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title="@kvin.he"
            href="https://www.tiktok.com/@kvin.he?refer=embed"
          >
            @kvin.he
          </a>{" "}
          Hackathons: 2 Wins: 0{" "}
          <a
            title="hackathon"
            target="_blank"
            href="https://www.tiktok.com/tag/hackathon?refer=embed"
          >
            #hackathon
          </a>{" "}
          <a
            title="coding"
            target="_blank"
            href="https://www.tiktok.com/tag/coding?refer=embed"
          >
            #coding
          </a>{" "}
          <a
            title="computerscience"
            target="_blank"
            href="https://www.tiktok.com/tag/computerscience?refer=embed"
          >
            #computerscience
          </a>{" "}
          <a
            title="cs"
            target="_blank"
            href="https://www.tiktok.com/tag/cs?refer=embed"
          >
            #cs
          </a>{" "}
          <a
            title="jobless"
            target="_blank"
            href="https://www.tiktok.com/tag/jobless?refer=embed"
          >
            #jobless
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - Kevin He"
            href="https://www.tiktok.com/music/original-sound-7469206225403595526?refer=embed"
          >
            ♬ original sound - Kevin He
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default Tiktok1;
