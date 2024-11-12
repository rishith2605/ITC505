document.getElementById('sortButton').addEventListener('click', function() {
    let input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(item => parseInt(item.trim())).filter(item => !isNaN(item));
    
    if (array.length === 0) {
        alert("Please enter a valid array of numbers.");
        return;
    }

    displayArray(array);
    bubbleSort(array);
    displayArray(array);
});

function bubbleSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function displayArray(arr) {
    document.getElementById('arrayDisplay').textContent = JSON.stringify(arr);
}
