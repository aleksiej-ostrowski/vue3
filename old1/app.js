let counter = 0

btn.addEventListener('click', () => {
    counter += 1;
    app.innerText = `Likes = ${counter}`
    console.log(counter)
})


