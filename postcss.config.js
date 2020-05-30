module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}


/*
    To install tailwindscss:
    1- npm install tailwindcss
    2- create a file called tailwind.css and add the next code:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    3- npx tailwindcss init
    4- npm install postcss-cli autoprefixer
    5- create a file called postcss.config.js
    6- Add the following code 
    module.exports = {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    }
    7- Add the tailwind.css file to the main.js
*/