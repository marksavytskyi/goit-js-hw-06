const refs = {
    categories: document.querySelector('#categories'),
    categoriesItem: categories.querySelectorAll('.item'),
}

console.log(`Number of categories: ${refs.categories.children.length}`);
console.log(``);

for (const ref of refs.categories.children){
    console.log(`Category: ${ref.children[0].textContent}`);
    console.log(`Elements: ${ref.children[1].children.length}`);
    console.log(``);
}
