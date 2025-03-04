import { TextField } from "@mui/material";
import "./dateRangePicker.css";

function DateRangePicker({ endDate, setEndDate, setStartDate, startDate }) {
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
        InputProps={{
          style: {
            color: "white",
          },
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
        InputProps={{
          style: {
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default DateRangePicker;
