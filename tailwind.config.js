/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    screens: {
        "r1400": { max: "1400px" },
        "r1350": { max: "1350px" },
        "r1300": { max: "1300px" },
        "r1250": { max: "1250px" },
        "r1200": { max: "1200px" },
        "r1150": { max: "1150px" },
        "r1100": { max: "1100px" },
        "r1050": { max: "1050px" },
        "r1000": { max: "1000px" },
        "r950": { max: "950px" },
        "r900": { max: "900px" },
        "r850": { max: "850px" },
        "r800": { max: "800px" },
        "r750": { max: "750px" },
        "r700": { max: "700px" },
        "r650": { max: "650px" },
        "r600": { max: "600px" },
        "r550": { max: "550px" },
        "r500": { max: "500px" },
        "r450": { max: "450px" },
        "r400": { max: "400px" },
        "r350": { max: "350px" },
        "r300": { max: "300px" },
      },
extend: {
    backgroundImage: {
        'background': "url('./src/assets/img/background.jpg')",
      }
},
},
plugins: [],
}