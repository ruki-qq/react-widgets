import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import googleTranslate from "../api/googleTranslate";

const Convert = ({ text, lang }) => {
  const [translation, setTranslation] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedText(text), 600);
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    const translateText = async () => {
      const translateQuery = await googleTranslate.post("", {
        q: debouncedText,
        format: "text",
        target: lang,
      });
      const translatedText =
        translateQuery.data.data.translations[0].translatedText;
      setTranslation(translatedText);
    };
    if (debouncedText && lang) {
      translateText();
    } else setTranslation("");
  }, [debouncedText, lang]);
  return (
    <>
      {translation && (
        <>
          <Typography variant="h6">Output</Typography>
          <Typography variant="h4">{translation}</Typography>
        </>
      )}
    </>
  );
};

export default Convert;
