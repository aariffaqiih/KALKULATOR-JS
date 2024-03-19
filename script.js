function tombol(value) {
    display.value += value;
}

function hapus() {
    display.value = "";
}

function hitung() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
