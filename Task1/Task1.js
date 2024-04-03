const { DOMParser } = require('xmldom');
const parser = new DOMParser();

const xmlSring = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>`

const xmlDOM = parser.parseFromString(xmlSring, "text/xml");

const firstLangNode = xmlDOM.getElementsByTagName('name')[0].getAttribute('lang');
const firstNameNode = xmlDOM.getElementsByTagName('first')[0].textContent + ' ' + xmlDOM.getElementsByTagName('second')[0].textContent
const firstAgeNode = xmlDOM.getElementsByTagName('age')[0].textContent
const firstProfNode = xmlDOM.getElementsByTagName('prof')[0].textContent

const secondLangNode = xmlDOM.getElementsByTagName('name')[1].getAttribute('lang');
const secondNameNode = xmlDOM.getElementsByTagName('first')[1].textContent + ' ' + xmlDOM.getElementsByTagName('second')[1].textContent
const secondAgeNode = xmlDOM.getElementsByTagName('age')[1].textContent
const secondProfNode = xmlDOM.getElementsByTagName('prof')[1].textContent

const firstResult = {
    Name: firstNameNode,
    Age: Number(firstAgeNode),
    Prof: firstProfNode,
    lang: firstLangNode,
}

const secondResult = {
    Name: secondNameNode,
    Age: Number(secondAgeNode),
    Prof: secondProfNode,
    lang: secondLangNode,
}

console.log(firstResult)
console.log(secondResult)