import ThemeCard from "@/components/theme-card";

const themeList = [
  {
    name: "hwflower",
    preview: "/themes/hwflower/preview.png",
    demo: "/demo/hwflower",
    active: true,
  },
  {
    name: "tealflower",
    preview: "/themes/tealflower/preview.png",
    demo: "/demo/tealflower",
    active: true,
  },
  {
    name: "greenflower",
    preview: "/themes/greenflower/preview.png",
    demo: "/demo/greenflower",
    active: true,
  },
  {
    name: "prettyflower",
    preview: "/themes/prettyflower/preview.png",
    demo: "/demo/prettyflower",
    active: true,
  },
  {
    name: "blueroses",
    preview: "/themes/blueroses/preview.png",
    demo: "/demo/blueroses",
    active: true,
  },
  {
    name: "redroses",
    preview: "/themes/redroses/preview.png",
    demo: "/demo/redroses",
    active: true,
  },
  {
    name: "radiantyellow",
    preview: "/themes/radiantyellow/preview.png",
    demo: "/demo/radiantyellow",
    active: true,
  },
  {
    name: "radiantdark",
    preview: "/themes/radiantdark/preview.png",
    demo: "/demo/radiantdark",
    active: true,
  },
  {
    name: "purpleflower",
    preview: "/themes/purpleflower/preview.png",
    demo: "/demo/purpleflower",
    active: true,
  },
  {
    name: "sketchflower",
    preview: "/themes/sketchflower/preview.png",
    demo: "/demo/sketchflower",
    active: true,
  },
];

const Tema = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Tema</h3>
      </div>
      <div className="m-auto flex flex-wrap justify-center gap-6 p-6">
        {themeList.map((e, i) => (
          <ThemeCard theme={{ ...e, id: i + 1 }} key={i} />
        ))}
      </div>
    </>
  );
};
export default Tema;
