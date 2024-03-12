import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const ChooseCategory = ({ setCategory }) => {
  function handleChange(event) {
    setCategory(event.target.value);
  }
  return (
    <FormControl sx={{ margin: "15px 0" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Выберите категорию товара
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event) => handleChange(event)}
      >
        <FormControlLabel value="perfume" control={<Radio />} label="Парфюм" />
        <FormControlLabel value="hair" control={<Radio />} label="Волосы" />
        <FormControlLabel
          value="cosmetics"
          control={<Radio />}
          label="Косметика"
        />
        <FormControlLabel value="care" control={<Radio />} label="Уход" />
      </RadioGroup>
    </FormControl>
  );
};
