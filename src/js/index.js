// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const spanElement = document.getElementById('title-id');
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('button');

const getUsers = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers('https://jsonplaceholder.typicode.com/users');

const getAdvice = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching advice:', error);
    //return null;
  }
};

const url = 'https://api.adviceslip.com/advice';

const prinAdvice = () => {
  getAdvice(url).then(adviceData => {
    if (adviceData) {
      const idAdvice = adviceData.slip.id;
      const advice = adviceData.slip.advice;
      //console.log('Consejo obtenido:', advice);
      spanElement.textContent = `ADVICE #${idAdvice}`;
      textElement.textContent = advice;
    } else {
      console.log('No se pudo obtener el consejo');
    }
  });
};

buttonElement.addEventListener('click', prinAdvice);
/*
cons printAdvice = data =>{
  const idAdvice = adviceData.slip.id;
  const advice = adviceData.slip.advice;
  textElement.textContent = advice;
  spanElement.textContent = `ADVICE #${idAdvice}
  
  }

  const getAdvice = async () =>  {
  try {
    const response = await fetch(https://api.adviceslip.com/advice);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching advice:', error);
    //return null;
  }
};


buttonElement.addEventListener('click', getAdvice);

  */
