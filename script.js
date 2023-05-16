function printPageAsPDF() {
  window.print();
}

function copyLink() {
  const url = 'https://clck.ru/34RmrX';
  const textarea = document.createElement('textarea');
  textarea.value = url;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('DONE!');
}

/* function translateToEnglish() {
  const translations = {
    'Личная информация': 'Personal Information',
    'Имя:': 'Name:',
    'Почта:': 'Email:',
    'Телеграм:': 'Telegram:',
    'Опыт работы': 'Work Experience',
    'Должность:': 'Position:',
    'Компания:': 'Company:',
    'Период работы:': 'Employment period:',
    'Описание обязанностей:': 'Job description:',
    'Навыки': 'Skills',
    'Создание тестовой документации': 'Creating test documentation',
    'Функциональное и нефункциональное тестирование, анализ требований, техники тест дизайна': 'Functional and non-functional testing, requirement analysis, test design techniques',
    'Курсы': 'Courses',
    'Работа с таск-трекерами и баг-трекерами': 'Working with task trackers and bug trackers',
    'Название курса:': 'Course title:',
    'февраль 2022 - апрель 2022': 'february 2022 - april 2022',
    'Образование': 'Education',
    'Уровень образования:': 'Level of education:',
    'Высшее': 'Higher',
    'Учебное заведение:': 'Educational establishment:',
    'БГУИР': 'BSUIR',
    'Факультет:': 'Faculty:',
    'Информационной безопасности': 'Information Security',
    'Год обучения:': 'Years of study:',
    'Языки': 'Languages',
    'Английский': 'English',
    'B1 - Средний': 'B1 - Intermediate',
  };

  const elementsToTranslate = document.querySelectorAll('.translate');
  elementsToTranslate.forEach((element) => {
    const text = element.innerText;
    const translatedText = translations[text];
    if (translatedText) {
      element.innerText = translatedText;
    }
  });
}

function translateToRussian() {
  const translations = { 
    'Personal Information': 'Личная информация',
    'Name:': 'Имя:',
    'Email:': 'Почта:',
    'Telegram:': 'Телеграм:',
    'Work Experience': 'Опыт работы',
    'Position:': 'Должность:',
    'Company:': 'Компания:',
    'Employment period:': 'Период работы:',
    'Job description:': 'Описание обязанностей:',
    'Skills': 'Навыки',
    'Creating test documentation': 'Создание тестовой документации',
    'Functional and non-functional testing, requirement analysis, test design techniques': 'Функциональное и нефункциональное тестирование, анализ требований, техники тест дизайна',
    'Working with task trackers and bug trackers': 'Работа с таск-трекерами и баг-трекерами',
    'Courses': 'Курсы',
    'Course title:': 'Название курса:',
    'february 2022 - april 2022': 'февраль 2022 - апрель 2022',
    'Education': 'Образование',
    'Level of education:': 'Уровень образования:',
    'Higher': 'Высшее',
    'Educational establishment:': 'Учебное заведение:',
    'BSUIR': 'БГУИР',
    'Faculty:': 'Факультет:',
    'Information Security': 'Информационной безопасности',
    'Years of study:': 'Год обучения:',
    'Languages': 'Языки',
    'English': 'Английский',
    'B1 - Intermediate': 'B1 - Средний',
};

const elementsToTranslate = document.querySelectorAll('.translate');
elementsToTranslate.forEach((element) => {
const text = element.innerText;
const translatedText = translations[text];
if (translatedText) {
element.innerText = translatedText;
}
});
} */
