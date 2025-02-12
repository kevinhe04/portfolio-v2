"use client";

import React, { useEffect } from "react";

const Tiktok2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <blockquote
        class="tiktok-embed font-petrona"
        cite="https://www.tiktok.com/@kvin.he/video/7424209625005722885"
        data-video-id="7424209625005722885"
        style={{ maxWidth: "605px", minWidth: "325px" }}
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
