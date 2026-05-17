import { Studio } from "sanity";
import config from "../../sanity.config";

export default function StudioPage() {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", overscrollBehavior: "none", WebkitFontSmoothing: "antialiased" }}>
      <Studio config={config} />
    </div>
  );
}
