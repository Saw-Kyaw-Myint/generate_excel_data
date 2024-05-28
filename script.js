function generateData() {
    const columns = parseInt(document.getElementById('columns').value);
    const rows = parseInt(document.getElementById('rows').value);
    const output = document.getElementById('output');
    
    if (isNaN(columns) || isNaN(rows) || columns <= 0 || rows <= 0) {
        output.value = 'Please enter valid positive numbers for columns and rows.';
        return;
    }

    let data = '';

    // Generate header
    for (let i = 1; i <= columns; i++) {
        data += 'col' + i;
        if (i < columns) data += ',';
    }
    data += '\n';

    // Generate rows
    for (let i = 0; i < rows; i++) {
        for (let j = 1; j <= columns; j++) {
            data += j;
            if (j < columns) data += ',';
        }
        if (i < rows - 1) data += '\n';
    }

    output.value = data;
}
