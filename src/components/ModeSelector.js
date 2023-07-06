import { useEffect, useState } from "react";
function ModeSelector() {
  const [theme, setTheme] = useState(null);
  let modes = [
    {
      id: "1",
      title: "MODO CLARO",
    },
    {
      id: "2",
      title: "MODO OSCURO",
    },
  ];
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChange = (event) => {
    setSelected(event.target.value);

    if (event.target.value === "1") {
      setTheme("light");
    } else if (event.target.value === "2") {
      setTheme("dark");
    }
  };

  const [selected, setSelected] = useState(theme === "dark" ? "1" : "2");

  return (
    <select value={selected} className="mode_selector" onChange={handleChange}>
      {modes.map((mode, index) => (
        <option key={index} value={mode.id}>
          {mode.title}
        </option>
      ))}
    </select>
  );
}

export default ModeSelector;
