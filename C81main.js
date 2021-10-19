canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(400, 300, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("myColor").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(m_x ,m_y) {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(m_x, m_y, 40, 0, 2*Math.PI);
ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
