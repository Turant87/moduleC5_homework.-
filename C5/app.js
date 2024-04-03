// const { DOMParser } = require('xmldom');
// const parser = new DOMParser();
//
// const xmlString = `
//   <book category="CHILDREN">
//     <title lang="en">Harry Potter</title>
//     <author>J. K. Rowling</author>
//     <year>2005</year>
//     <price>29.99</price>
//   </book>
// `;
//
// const xmlDOM = parser.parseFromString(xmlString, "text/xml");
//
// const bookNode = xmlDOM.getElementsByTagName("book")[0];
// const titleNode = xmlDOM.getElementsByTagName("title")[0];
// const authorNode = xmlDOM.getElementsByTagName("author")[0];
// const yearNode = xmlDOM.getElementsByTagName("year")[0];
// const priceNode = xmlDOM.getElementsByTagName("price")[0];
//
// const categoryAttr = bookNode.getAttribute('category');
// const langAttr = titleNode.getAttribute('lang');
//
// const result = {
//     category: categoryAttr,
//     lang: langAttr,
//     title: titleNode.textContent,
//     author: authorNode.textContent,
//     year: Number(yearNode.textContent),
//     price: Number(priceNode.textContent),
// };
//
// console.log('resultXML ', result);
//
// /* Этап 1. Подготовка данных */
//
// // JSON, который мы будем парсить
// const jsonString = `
// {
//   "book": {
//    "category": "CHILDREN",
//    "title": {
//       "lang": "en",
//       "value": "Harry Potter"
//     },
//     "author": "J. K. Rowling",
//     "year": "2005",
//     "price": 29.99
//   }
// }
// `;
// // console.log('jsonString', jsonString);
//
// /* Этап 2. Получение данных */
// const data = JSON.parse(jsonString);
// // console.log('data', data);
// const book = data.book;
// // console.log('book', book);
//
//
// /* Этап 3. Запись данных в результирующий объект */
// const result2 = {
//     category: book.category,
//     lang: book.title.lang,
//     title: book.title.value,
//     author: book.author,
//     year: Number(book.year),
//     price: Number(book.price),
// };
// console.log('result JSON', result2);

const flag = true;

const myPromise = new Promise((resolve, reject)=> {
    if (flag) {
        resolve('Успешно выполненный Promise');
    }else {
        reject('Провал Promisa');
    }
});

myPromise
    .then((result) => {
        console.log('Обрабатываем resolve', result);
    })
    .catch((error) => {
        console.log('Обрабатываем reject', error);
    })
    .finally(() => {
        console.log('Выполняется всегда');
    });


