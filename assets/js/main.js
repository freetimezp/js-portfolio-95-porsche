const scrollRevealOption = {
    distance: '50px',
    origin: "bottom",
    duration: 1000
};

ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000
});

ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500
});

ScrollReveal().reveal(".container .text_left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000
});

ScrollReveal().reveal(".container .text_right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000
});

ScrollReveal().reveal(".container .explore", {
    scale: 10,
    duration: 1000,
    delay: 2500
});

ScrollReveal().reveal(".container h5", {
    interval: 500,
    duration: 1000,
    delay: 3000
});

ScrollReveal().reveal(".container .catalog", {
    distance: "100px",
    origin: "top",
    duration: 1000,
    delay: 3500,
});

ScrollReveal().reveal(".container .print", {
    distance: "100px",
    origin: "top",
    duration: 1000,
    delay: 5500,
});

ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000
});


















