import React, { useEffect, useState } from "react";
import "./options.css";
import { TextField } from "@mui/material";

function Options({ options, setOptions, setIsOpenOptions }) {
  const [children, setChildren] = useState(options.children);
  const [adults, setAdults] = useState(options.adults);
  const [room, setRoom] = useState(options.room);

  useEffect(() => {
    setOptions({
      adults: adults,
      Children: children,
      room: room,
    });
  }, [adults, children, room, setOptions]);

  return (
    <div className="options">
      <div className="close" onClick={() => setIsOpenOptions(false)}>
        ×
      </div>
      <h1 className="optionsHeader">Options</h1>
      <TextField
        className="optionsField"
        type="number"
        placeholder="children"
        value={children || ""}
        onChange={(e) => setChildren(e.target.value)}
        InputLabelProps={{
          shrink: true,
          className: "dateLabel",
        }}
        InputProps={{
          style: {
            color: "white",
          },
        }}
      />
      <TextField
        className="optionsField"
        type="number"
        placeholder="adults"
        value={adults || ""}
        onChange={(e) => setAdults(e.target.value)}
        InputLabelProps={{
          shrink: true,
          className: "dateLabel",
        }}
        InputProps={{
          style: {
            color: "white",
          },
        }}
      />
      <TextField
        className="optionsField"
        type="number"
        placeholder="room"
        value={room || ""}
        onChange={(e) => setRoom(e.target.value)}
        InputLabelProps={{
          shrink: true,
          className: "dateLabel",
        }}
        InputProps={{
          style: {
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default Options;
