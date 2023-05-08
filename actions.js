const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })

.catch(error => console.log(error));

//convert data into array
let chartContainer = document.querySelector(".chartContainer");


//Map through data and populate chart
Object.values(data).map(item => {
    let chart = document.createElement('div');
    chart.classList.add('chart');

    const height = item.amount /7;
    let value = ""

    if (item.day == "wed") {
        value=`<div class="chart-value active" style="--height:${height}em"></div>`
    } else {
        value=`<div class="chart-value" style="--height:${height}em"></div>`;
    }
    chart.innerHTML = `
    <div class="chartWrapper">
    ${value}
    </div>
    <div class="chart-title">${item.day}
    `;
    chartContainer.appendChild(chart);
})


