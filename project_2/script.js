const zodiac = document.getElementById("zodiac");
const body = document.body;


const changeBackground = () => {

    switch (zodiac.value) {
        case "BEEKEEPER":
            document.body.style.background = "#f6e58d";
            break;
        case "Spiced Nectarine":
            document.body.style.background = "#ffbe76";
            break;
        case "Pink Glamour":
            document.body.style.background = "#ff7979";
            break;
        case "June Bud":
            document.body.style.background = "#badc58";
            break;
        case "Coastal Breeze":
            document.body.style.background = "#dff9fb";
            break;
        case "Turbo":
            document.body.style.background = "#f9ca24";
            break;
        case "Quince Jelly":
            document.body.style.background = "#f0932b";
            break;
        case "Carmine Pink":
            document.body.style.background = "#eb4d4b";
            break;

        default:
            document.body.style.background = "#fff";
            break;
    }
}