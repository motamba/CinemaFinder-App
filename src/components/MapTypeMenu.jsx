import {
  IconButton,
  Popover,
  Backdrop,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { startCase } from "lodash";
import { mapTypes, useMapType } from "./Map";

const MapTypeMenu = () => {
  const [open, setOpen] = useState(false);
  const menusButtonRef = useRef(null);

  const [mapType, setMapType] = useMapType();

  return (
    <>
      <IconButton
        ref={menusButtonRef}
        sx={{ ml: "auto" }}
        color={open ? "grey" : "initial"}
        onClick={() => setOpen(true)}
      >
        <FiMenu />
      </IconButton>
      <Backdrop open={open} sx={{ zIndex: 1000 }} />
      <Popover
        open={open}
        anchorEl={menusButtonRef?.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <FormControl sx={{ m: 2 }}>
          <FormLabel>Active map library</FormLabel>
          <RadioGroup
            value={mapType}
            onChange={(evt) => {
              setMapType(evt.target.value);
            }}
          >
            {mapTypes.map((type) => (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio />}
                label={startCase(type)}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Popover>
    </>
  );
};
export default MapTypeMenu;
