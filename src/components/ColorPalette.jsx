import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { Button } from "@mui/material";

const ColorPalette = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [textColor, setColor] = useState("#000");
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setShowPicker(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {capture: true});
    };
  }, []);
  const handleChange = (color) => {
    setColor(color.hex);
  };
  const togglePicker = () => {
    setShowPicker((prevValue) => !prevValue);
  };
  return (
    <div>
      <div ref={ref}>
        <Button variant="contained" onClick={togglePicker}>
          Show Color Picker
        </Button>
        {showPicker && (
          <SketchPicker color={textColor} onChange={handleChange} />
        )}
      </div>
      <h1 style={{ color: textColor }}>Some text</h1>
    </div>
  );
};

export default ColorPalette;
