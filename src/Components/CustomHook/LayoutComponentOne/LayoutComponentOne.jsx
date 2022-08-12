import useWindowWidth from "./../Hooks/useWindowWidth";

export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth(768);

  return (
    <div>
      <h2>Custom Hook</h2>
      <h1>You are browsing on {onSmallScreen ? "small" : "large"} device</h1>
    </div>
  );
}
