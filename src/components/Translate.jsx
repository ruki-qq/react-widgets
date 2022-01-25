import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Convert from "./Convert";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Box";

const Translate = () => {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("");
  const handleText = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  const handleLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  };

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <TextField
          sx={{ mt: 1, pb: 1 }}
          fullWidth
          label="Text to translate"
          variant="outlined"
          value={text}
          onChange={handleText}
        />
        <FormControl sx={{ pb: 1 }} fullWidth>
          <InputLabel id="lang-select-label">Language</InputLabel>
          <Select
            labelId="lang-select-label"
            id="lang-select"
            value={lang}
            label="Language"
            onChange={handleLang}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
            <MenuItem value={"cs"}>Czech</MenuItem>
            <MenuItem value={"kk"}>Kazakh</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Convert text={text} lang={lang} />
    </>
  );
};

export default Translate;
