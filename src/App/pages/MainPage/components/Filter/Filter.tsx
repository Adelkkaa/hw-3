import React, { useEffect, useState } from "react";

import { MultiDropdown, Option } from "@components/MultiDropdown/MultiDropdown";
import filter from "@resources/img/filter.svg";
import axios from "axios";

const Filter = () => {
  const [value, setValue] = useState<Option[]>([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/categories",
      });
      setOptions(data);
    };

    fetch();
  }, []);
  return (
    <MultiDropdown
      options={options}
      value={value}
      pluralizeOptions={() =>
        value.length > 0 ? `Выбрано: ${value.length}` : "Filter"
      }
      onChange={(val: Option[]) => setValue(val)}
    >
      <img src={filter} alt="filter" />
    </MultiDropdown>
  );
};

export default Filter;
