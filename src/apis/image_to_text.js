import axios from "axios";

const apiKey = ''; // add apilayer.com api key here

async function convertImageToText(file) {

    // Haven't gotten it to work with axios
 /*   try {
        const response = await axios.post(`https://api.apilayer.com/image_to_text/upload?apikey=${apiKey}`, {body: file});

        console.log(response);
    } catch (error) {
        console.log(error);
    } */



    const resultElement = document.getElementById('result');
    resultElement.innerText = "";

    let myHeaders = new Headers();
    myHeaders.append('apikey', apiKey);

    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: file
    };

    fetch("https://api.apilayer.com/image_to_text/upload", requestOptions)
        .then(response => response.text())
        .then(result => {

            console.log("result: " + result);
            JSON.parse(result).annotations.forEach(annotation => {
                resultElement.innerText += annotation + ", ";
            });
        })
        .catch(error => console.log('error', error));
}

export default convertImageToText;