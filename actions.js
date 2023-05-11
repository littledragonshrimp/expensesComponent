fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const chartContainer = document.querySelector('.chartContainer');
    data.forEach(item => {
      const dayOfWeek = item.day.toLowerCase();
      const amount = item.amount;
      const bar = chartContainer.querySelector(`.${dayOfWeek} .rect`);
      bar.style.height = `${amount}px`;
    });
  })
  .catch(error => console.error(error));


  
  const today = new Date().getDay();

  // Get the chart container element
  const chartContainer = document.querySelector('.chartContainer');
  
  // Get the chart items (days)
  const chartItems = chartContainer.querySelectorAll('.rect');
  
  // Loop through the chart items and highlight the current day
  chartItems.forEach((item, index) => {
    if (index === today) {
      item.classList.add('currentDay');
    } else {
      item.classList.remove('currentDay');
    }
  });