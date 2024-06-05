/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-btn")
const convertBtn = document.getElementById("convert-btn")
const mf = document.getElementById("MF")
const lg = document.getElementById("LG")
const kp = document.getElementById("KP")

convertBtn.addEventListener("click", function()
{
    m = inputEl.value * 3.281
    l = 0.264 * inputEl.value
    k = 2.204 * inputEl.value
    m1 = inputEl.value*.304
    l1 = inputEl.value*3.84
    k1 = inputEl.value*.4537
    mf.textContent = `${inputEl.value} meters = ${m.toFixed(2)} feet | ${inputEl.value} feet = ${m1.toFixed(2)} meters`
    lg.textContent = `${inputEl.value} litres = ${l.toFixed(2)} gallons | ${inputEl.value} gallons = ${l1.toFixed(2)} litres`
    kp.textContent = `${inputEl.value} kilos = ${k.toFixed(2)} pounds | ${inputEl.value} pounds = ${k1.toFixed(2)} kilos`
    inputEl.value = ""
})
