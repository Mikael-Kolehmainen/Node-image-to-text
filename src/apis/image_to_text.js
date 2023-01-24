import FormData from "form-data";
import axios from "axios";

const apiKey = ''; // add apilayer.com api key here

async function convertImageToText(file) {
    let data = new FormData();
    data.append('file', file);

    const response = await axios.post(`https://api.apilayer.com/image_to_text/upload?apikey=${apiKey}`, data);

    console.log(response);
}

export default convertImageToText;