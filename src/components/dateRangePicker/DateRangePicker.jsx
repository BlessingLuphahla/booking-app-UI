import { TextField } from "@mui/material";
import "./dateRangePicker.css";

function DateRangePicker({ endDate, setEndDate, setStartDate, startDate }) {
  const formatedDate = (date, type) => {
    var newDate = new Date(date);

    newDate = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });

    if (type === "start") {
      setStartDate(newDate);
    }

    if (type === "end") {
      setEndDate(newDate);
    }
  };

  return (
    <div className="dateRangePicker">
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => formatedDate(e.target.value, "start")}
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
        onChange={(e) => formatedDate(e.target.value, "end")}
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
