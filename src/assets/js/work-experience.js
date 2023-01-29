window.addEventListener("load", () => {
  Object.values(document.getElementsByClassName("job-time-interval")).forEach(
    (interval_element) => {
      let start_date = new Date(interval_element.dataset.startDate);
      let end_date = interval_element.dataset.endDate;
      // TODO: Replace text in interval_element using following formatting `{start} - {end} ( {worked_years} years {worked_months} months )`
    }
  );
});
