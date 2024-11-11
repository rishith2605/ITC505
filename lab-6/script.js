document.getElementById('sortButton').addEventListener('click', function() {
    let array = [50,10,8,-1,6,5,9,35,];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    document.getElementById('arrayDisplay').textContent = JSON.stringify(array);
});
