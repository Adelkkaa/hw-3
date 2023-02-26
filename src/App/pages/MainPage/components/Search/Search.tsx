import React, { useState, useRef } from "react";

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import searchLogo from "@resources/img/search.svg";

import styles from "./Search.module.scss";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className={styles.form}>
      <Button className={styles.form__loop}>
        <img src={searchLogo} alt="search-loop" />
      </Button>
      <Input
        value={inputValue}
        onChange={(string) => {
          setInputValue(string);
        }}
        className={styles.form__input}
      />
      <div className={styles.form__search}>
        <Button>Find Now</Button>
      </div>
    </form>
  );
};

export default Search;
