document.addEventListener("DOMContentLoaded", function () {
    const performanceCtx = document.getElementById("performanceChart").getContext("2d");

    // Academic Performance Line Chart
    new Chart(performanceCtx, {
        type: "line",
        data: {
            labels: ["Sem 1", "Sem 2", "Sem 3"],  // X-axis labels
            datasets: [{
                label: "CGPA",
                data: [9.88,9.55,9.70],  // Replace with actual CGPA values
                borderColor: "#36a2eb",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                pointBackgroundColor: "#36a2eb",
                pointBorderColor: "#fff",
                pointRadius: 5,
                borderWidth: 2,
                fill: true,
                tension: 0.4  // Makes the line smooth
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    max: 10,
                    title: {
                        display: true,
                        text: "CGPA"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Semesters"
                    }
                }
            }
        }
    });
});
