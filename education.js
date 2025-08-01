 // Replace with actual CGPA values

document.addEventListener("DOMContentLoaded", function() {
            // Placeholder for a Chart.js chart for academic performance
            const ctx = document.getElementById('performanceChart').getContext('2d');
            const performanceChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],  // X-axis labels
                    datasets: [{
                        label: "CGPA",
                        data: [9.88,9.55,9.70,8.80],  // Replace with actual CGPA values
                        borderColor: "#d88ae6",
                        backgroundColor: "rgba(220, 169, 229, 0.3)",
                        pointBackgroundColor: "#d88ae6",
                        pointBorderColor: "#d88ae6",
                        pointRadius: 5,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4  // Makes the line smooth
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            max: 10,
                            title: {
                                display: true,
                                text: "CGPA",
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'white'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: "Semesters",
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'white'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            });

            // Intersection Observer for scroll-based fade-in effects
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target); // Stop observing once it's visible
                    }
                });
            }, { threshold: 0.1 });

            // Apply fade-in effect to all elements with the 'fade-in' class
            document.querySelectorAll('.fade-in').forEach(element => {
                observer.observe(element);
            });
        });
