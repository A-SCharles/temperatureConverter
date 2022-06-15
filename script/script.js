        const c = document.getElementById('c');
        const f = document.getElementById('f');
        const r = document.getElementById('r');
        const centi = document.getElementById('centi');
        const k = document.getElementById('k');

        let btnclear = document.getElementById('clear');
        btnclear.addEventListener('click', () => {
            c.value = ' ';
            f.value = ' ';
            r.value = ' ';
            centi.value = ' ';
            k.value = ' ';
        });


        let btncalcCelsius = document.getElementById('calcCelsius');
        btncalcCelsius.addEventListener('click', (n) => {
            n = parseInt(c.value);

            f.value = (n * 9 / 5) + 32;
            r.value = (n * 9 / 5) + 491.67;
            centi.value = n;
            k.value = n + 273.15;
        });

        let btncalcFarhenheit = document.getElementById('calcFarenheit');
        btncalcFarhenheit.addEventListener('click', (n) => {
            n = parseInt(f.value);

            c.value = (n - 32) * 5 / 9;
            r.value = (n * 9 / 5) + 491.67;
            centi.value = (n + 459.67) * 5 / 9;
            k.value = (n + 459.67) * 5 / 9;
        });

        let btncalcRankine = document.getElementById('calcRankine');
        btncalcRankine.addEventListener('click', (n) => {
            n = parseInt(k.value);

            c.value = (n * 5 / 9) - 273.15;
            f.value = n - 459.67;
            centi.value = (n * 5 / 9) - 273.15;
            k.value = n * 5 / 9;
        });

        let btncalcCenti = document.getElementById('calcCenti');
        btncalcCenti.addEventListener('click', (n) => {
            n = parseInt(centi.value);

            c.value = n;
            f.value = (n * 9 / 5) + 32;
            r.value = (n * 9 / 5) + 491.67;
            k.value = n + 273.15;
        });

        let btncalcKelvin = document.getElementById('calcKelvin');
        btncalcKelvin.addEventListener('click', (n) => {
            n = parseInt(k.value);

            c.value = n - 273.15;
            f.value = n * 9 / 5 - 459.67;
            r.value = n * 9 / 5
            centi.value = n - 273.15;
        });