import React, { useState, useEffect } from "react";
import { Autocomplete, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import wiki from "../api/wiki";
import Link from "@mui/material/Link";

const WikiSearch = () => {
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [prompt, setPrompt] = useState([]);
  useEffect(() => {
    const getPrompt = async () => {
      const res = await wiki.get("", {
        params: {
          srsearch: inputText,
        },
      });
      setPrompt(res.data.query.search.map((elem) => elem.title));
    };
    if (inputText) {
      const timer = setTimeout(() => getPrompt(), 600);
      return () => {
        clearTimeout(timer);
      };
    } else setPrompt([]);
  }, [inputText]);
  const SearchButton = () => (
    <IconButton type="submit">
      <SearchIcon />
    </IconButton>
  );
  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  const getContent = async (event) => {
    event.preventDefault();
    const res = await wiki.get("", {
      params: {
        srsearch: inputText,
      },
    });
    res.data.query
      ? setItemList(
          res.data.query.search.map((elem) => {
            return {
              title: elem.title,
              content: elem.snippet.replace(
                /<span class="searchmatch">|<\/span>/g,
                ""
              ),
              id: elem.pageid,
            };
          })
        )
      : setItemList([]);
    console.log(res);
  };
  const renderResult = () => {
    return itemList.map((elem) => {
      return (
        <ListItem alignItems="flex-start" key={elem.id}>
          <ListItemText
            primary={elem.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {elem.content + "..."}
                </Typography>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://ru.wikipedia.org/?curid=${elem.id}`}
                  passHref
                >
                  <Button component="a" size="small" sx={{ float: "right" }}>
                    Learn More
                  </Button>
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });
  };

  return (
    <>
      <form onSubmit={getContent}>
        <Autocomplete
          freeSolo
          options={prompt}
          onInputChange={handleInput}
          inputValue={inputText}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: <SearchButton />,
              }}
            />
          )}
        />
      </form>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {renderResult()}
      </List>
    </>
  );
};

export default WikiSearch;
