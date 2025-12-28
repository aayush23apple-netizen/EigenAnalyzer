let currentSize = 3;

document.addEventListener("DOMContentLoaded", () => {
    createMatrix();
    document.getElementById("matrixSize").addEventListener("change", createMatrix);
});

function createMatrix() {
    currentSize = parseInt(document.getElementById("matrixSize").value);
    const container = document.getElementById("matrixContainer");

    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;

    for (let i = 0; i < currentSize; i++) {
        for (let j = 0; j < currentSize; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `m${i}${j}`;
            input.placeholder = `a${i + 1}${j + 1}`;
            container.appendChild(input);
        }
    }
}

function getMatrix() {
    const matrix = [];

    for (let i = 0; i < currentSize; i++) {
        matrix[i] = [];
        for (let j = 0; j < currentSize; j++) {
            const value = document.getElementById(`m${i}${j}`).value;
            matrix[i][j] = value === "" ? 0 : Number(value);
        }
    }
    return matrix;
}

function analyze() {
    const matrix = getMatrix();
    const eigenvalues = document.getElementById("eigenvalues").value.trim();
    const eigenvectors = document.getElementById("eigenvectors").value.trim();

    if (eigenvalues === "" || eigenvectors === "") {
        alert("Please enter eigenvalues and eigenvectors");
        return;
    }

    document.getElementById("results").innerHTML = `
        <h3>Input Received Successfully</h3>
        <p><strong>Matrix:</strong></p>
        <pre>${JSON.stringify(matrix, null, 2)}</pre>
        <p><strong>Eigenvalues:</strong> ${eigenvalues}</p>
        <p><strong>Eigenvectors:</strong></p>
        <pre>${eigenvectors}</pre>
    `;
}

function resetAll() {
    document.getElementById("eigenvalues").value = "";
    document.getElementById("eigenvectors").value = "";
    document.getElementById("results").innerHTML = "";
    createMatrix();
}
