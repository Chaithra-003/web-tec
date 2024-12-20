body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.header {
    background-color: #333;
    color: white;
    padding: 10px;
}
.header ul {
    list-style: none;
    display: flex;
    gap: 15px;
    justify-content: center;
}
.header ul li {
    margin: 0 10px;
}
.hero {
    text-align: center;
    padding: 50px;
    background: linear-gradient(to right, #1e90ff, #87cefa);
    color: white;
}
button {
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
}
.accordion {
    margin: 20px;
}
.accordion-item h2 {
    cursor: pointer;
    background: #eee;
    padding: 10px;
    margin: 5px 0;
}
.accordion-content {
    display: none;
    padding: 10px;
    background: #f9f9f9;
}
.card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    transition: transform 0.3s ease;
}
.card:hover {
    transform: scale(1.05);
}
$(document).ready(function () {
    // Dynamic Greeting
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    $("#greeting").text(greeting);

    // Toggle Theme
    $("#theme-toggle").click(function () {
        $("body").toggleClass("dark-theme");
        const isDark = $("body").hasClass("dark-theme");
        $(this).text(isDark ? "Switch to Light Theme" : "Switch to Dark Theme");
    });

    // Accordion
    $(".accordion-item h2").click(function () {
        $(this).next(".accordion-content").slideToggle();
    });
});