function printPageAsPDF() {
    const hideButton = document.querySelectorAll('.hide-button');
    hideButton.forEach(button => {
      button.style.display = 'none';
    });
    window.print();
}

function copyLink() {
  const url = 'https://albrtr.github.io/about';
  const textarea = document.createElement('textarea');
  textarea.value = url;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('https://albrtr.github.io/about');
}

function translateToEnglish() {
  const translations = {
    'Личная информация': 'Personal Information',
    'Имя:': 'Name:',
    ' Альберт Рустамов': ' Albert Rustamov',
    'Почта:': 'Email:',
    'Телеграм:': 'Telegram:',
    'Опыт работы': 'Work Experience',
    'Должность:': 'Position:',
    'Компания:': 'Company:',
    'Период работы:': 'Employment period:',
    ' август 2022 - настоящее время': ' august 2022 - present',
    ' январь 2023 - настоящее время': ' january 2023 - present',
    'Описание обязанностей:': 'Job description:',
    ' В рамках проекта я занимался разработкой новой тестовой документации, а также оформлением и переработкой уже существующей. Мои обязанности включали создание и поддержка чек-листов, баг-репортов, ведение бага по полному циклу, а также проведение функционального и регрессионного тестирования. Я активно работал с инструментами баг-трекинга, таск-трекинга и системой контроля версий.': ' As part of the project, I was involved in developing new test documentation, as well as formatting and revising existing documentation. My responsibilities included creating and maintaining checklists, bug reports, managing bugs throughout their lifecycle, and conducting functional and regression testing. I actively worked with bug tracking tools, task tracking tools, and version control systems.',
    ' В процессе выполнения работы я занимался разработкой тестовой документации. Это включало проведение декомпозиции и далее, в процессе проверок, я применял методики исследовательского тестирования и ad-hoc тестирования с последующим созданием баг-репортов. Кроме того, я составлял отчеты о проведенном тестировании.': ' During the time of my work, I was involved in developing test documentation. This included performing decomposition, and when started the verification process, I applied exploratory testing techniques and ad-hoc testing, followed by creating bug reports. Additionally, I compiled reports on the conducted testing.',
    'Навыки': 'Skills',
    'Создание тестовой документации': 'Creating test documentation',
    'Функциональное и нефункциональное тестирование, анализ требований, техники тест дизайна': 'Functional and non-functional testing, requirement analysis, test design techniques',
    'Курсы': 'Courses',
    'Работа с таск-трекерами и баг-трекерами': 'Working with task trackers and bug trackers',
    'Название курса:': 'Course title:',
    ' февраль 2022 - апрель 2022': ' february 2022 - april 2022',
    ' ноябрь 2021 - декабрь 2021': ' november 2021 - december 2021',
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
    ' Albert Rustamov': ' Альберт Рустамов',
    'Email:': 'Почта:',
    'Telegram:': 'Телеграм:',
    'Work Experience': 'Опыт работы',
    'Position:': 'Должность:',
    'Company:': 'Компания:',
    'Employment period:': 'Период работы:',
    ' august 2022 - present': ' август 2022 - настоящее время',
    ' january 2023 - present': ' январь 2023 - настоящее время',
    'Job description:': 'Описание обязанностей:',
    ' As part of the project, I was involved in developing new test documentation, as well as formatting and revising existing documentation. My responsibilities included creating and maintaining checklists, bug reports, managing bugs throughout their lifecycle, and conducting functional and regression testing. I actively worked with bug tracking tools, task tracking tools, and version control systems.': ' В рамках проекта я занимался разработкой новой тестовой документации, а также оформлением и переработкой уже существующей. Мои обязанности включали создание и поддержка чек-листов, баг-репортов, ведение бага по полному циклу, а также проведение функционального и регрессионного тестирования. Я активно работал с инструментами баг-трекинга, таск-трекинга и системой контроля версий.',
    ' During the time of my work, I was involved in developing test documentation. This included performing decomposition, and when started the verification process, I applied exploratory testing techniques and ad-hoc testing, followed by creating bug reports. Additionally, I compiled reports on the conducted testing.': ' В процессе выполнения работы я занимался разработкой тестовой документации. Это включало проведение декомпозиции и далее, в процессе проверок, я применял методики исследовательского тестирования и ad-hoc тестирования с последующим созданием баг-репортов. Кроме того, я составлял отчеты о проведенном тестировании.',
    'Skills': 'Навыки',
    'Creating test documentation': 'Создание тестовой документации',
    'Functional and non-functional testing, requirement analysis, test design techniques': 'Функциональное и нефункциональное тестирование, анализ требований, техники тест дизайна',
    'Working with task trackers and bug trackers': 'Работа с таск-трекерами и баг-трекерами',
    'Courses': 'Курсы',
    'Course title:': 'Название курса:',
    ' february 2022 - april 2022': ' февраль 2022 - апрель 2022',
    ' november 2021 - december 2021': ' ноябрь 2021 - декабрь 2021',
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
} 
