import React, { useState, useEffect } from "react";

function useThemeSwitcher() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (
    <div className="mode">
      <div>
        <input
          type="checkbox"
          class="checkbox"
          id="chk"
          onClick={() =>
            setMode((mode) => (mode === "dark" ? "light" : "dark"))
          }
        />
        <label class="label" for="chk"
        style={{background: mode=== "dark" ? '#3c3c5a' : "#FF6739"}}>
          <i class="fas fa-moon"></i>
          <i class="fa-solid fa-sun"></i>

          <div class="ball"
          style={{background: mode=== "dark" ? '#dfd5d5' : "#FFFAA9"}}
          ></div>
        </label>
      </div>
    </div>
  );
}

export default useThemeSwitcher;
