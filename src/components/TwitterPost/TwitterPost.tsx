import { useEffect } from "react";

const widgetsScript = "https://platform.x.com/widgets.js";

declare global {
  interface Window {
    twttr?: { widgets: { load(): void } };
  }
}

export default function TwitterPost({ url }: { url: string }) {
  useEffect(() => {
    const renderPost = () => window.twttr?.widgets.load();

    if (window.twttr) {
      renderPost();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${widgetsScript}"]`,
    );
    const script = existingScript ?? document.createElement("script");

    script.addEventListener("load", renderPost);

    if (!existingScript) {
      script.src = widgetsScript;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => script.removeEventListener("load", renderPost);
  }, [url]);

  return (
    <blockquote className="twitter-tweet" data-align="center">
      <a href={url}>View post on X</a>
    </blockquote>
  );
}
