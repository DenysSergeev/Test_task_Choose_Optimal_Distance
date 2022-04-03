function chooseOptimalDistance(t, k, ls) {
    // твій код

    // Перш за все, чому Мері не водить авто, щоб вдвох проїхати більшу дистанцію ?! :)

    // Нам треба отримати масиви відстанню 3, які представляють собою унікальні комбінації повного списку відстані
    // Також треба отримати суму відстані від цих масивів
    // Відстань, яку ми можемо прийняти, повинна бути меншою аргумента t

    let count = 0;

    let towns = function(townsSoFar, lastIndex) {
        townsSoFar = townsSoFar || [];   // Одразу цей блок коду встановлюємо зі знаком дорівнює сам собі, якщо він не існує, то буде дорівнювати пустому масиву

        if (townsSoFar.length === k) {
            let sumDistance = townsSoFar.reduce((a, b) => a + b);   // змінна sumDistance дорівнює сумі елементів у масиві townsSoFar, яка виконується за допомогою метода reduce
            if (sumDistance <= t && sumDistance > count) {   // якщо sumDistance менше  або дорівнює кількості миль, які Ділан та Кейт хочуть проїхати, t та sumDistance більше ніж count
                count = sumDistance;   // тоді count буде рівен sumDistance
            }
            return;
            // якщо кількість міст, які вони вирішать відвідати, буде більше кількості миль, які були погодженні, тоді ми зробимо повторний визов towns()
        }
        else {
            for (let i = lastIndex + 1 || 0; i < ls.length; i++) {   // якщо ми дійшли до цього блока коду, то цикл for буде виконуватись до тих пір, доки let i менше довжини ls
                towns(townsSoFar.concat(ls[i]), i);  // яке б значення не знаходилося в ls[i], воно буде передано в townSoFar
            }
        }   // ми будемо продовжувати робити до тих пір, доки довжина townsSoFar не буде дорівнювати k
        
    }
    towns();
    return count || null;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
