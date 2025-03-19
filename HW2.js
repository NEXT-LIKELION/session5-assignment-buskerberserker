let rows = 5;

for (let i = 0; i < rows; i++) {
    let line = "";

    let spaceCount = rows - i - 1; 
    let starCount = 2 * i + 1; 

    let j = 0;
    while (j < spaceCount) { 
        line = line + " ";
        j = j + 1;
    }

    let k = 0;
    while (k < starCount) { 
        line = line + "*";
        k = k + 1;
    }

    console.log(line);
}
