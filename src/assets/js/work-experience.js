function format_month_and_year(date) {
  return (
    (date.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    date.getFullYear()
  );
}

function calculate_month_diff(d1, d2) {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

window.addEventListener("load", () => {
  Object.values(document.getElementsByClassName("job-time-interval")).forEach(
    (interval_element) => {
      let start_date = new Date(interval_element.dataset.startDate);
      let end_date = interval_element.dataset.endDate;
      if (end_date === "not_yet") {
        end_date = new Date();
      } else {
        end_date = new Date(end_date);
      }

      let time_interval_text = format_month_and_year(start_date);
      time_interval_text += " - ";
      if (end_date === new Date()) {
        time_interval_text += "present";
      } else {
        time_interval_text += format_month_and_year(end_date);
      }

      let start_end_month_diff = calculate_month_diff(start_date, end_date);
      let year_diff = start_end_month_diff / 12;
      let month_diff = start_end_month_diff % 12;

      time_interval_text += " ( ";
      if (year_diff == 1) {
        time_interval_text += `${year_diff} year `;
      } else if (year_diff > 1) {
        time_interval_text += `${year_diff} years `;
      }

      if (month_diff == 1) {
        time_interval_text += `${month_diff} month `;
      } else if (month_diff > 1) {
        time_interval_text += `${month_diff} months `;
      }
      time_interval_text += ")";

      interval_element.innerText = time_interval_text;
    }
  );
});
