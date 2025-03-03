import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./dateRangePicker.css";

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="dateRangePicker">
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="date"
        InputLabelProps={{
          shrink: true,
          className: "dateLabel",
        }}
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="date"
        InputLabelProps={{
          shrink: true,
          className: "dateLabel",
        }}
      />
    </div>
  );
}

export default DateRangePicker;
