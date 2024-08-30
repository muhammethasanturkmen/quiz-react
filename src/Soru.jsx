import { useState } from 'react'
import './App.css'


export const htmlQuiz = {
  topic: 'HTML',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 5,
  questions: [
    {
      question: 'Hangi HTML etiketi, bir belgedeki başlığı belirtmek için kullanılır?',
      choices: ['<title>', '<header>', '<h1>', '<head>'],
      type: 'MCQs',
      correctAnswer: '<h1>',
    },
    {
      question: 'HTML5\'te, bir sayfanın gezinme bağlantılarını tanımlamak için hangi etiket kullanılır?',
      choices: ['<nav>', '<menu>', '<aside>', '<section>'],
      type: 'MCQs',
      correctAnswer: '<nav>',
    },
    {
      question: 'Ekran okuyucularının bir resim hakkında bilgi vermesi için hangi HTML özelliği kullanılır?',
      choices: ['src', 'alt', 'href', 'title'],
      type: 'MCQs',
      correctAnswer: 'alt',
    },
    {
      question: 'Bir formda kullanıcıdan bilgi almak için kullanılan etiket hangisidir?',
      choices: ['<div>', '<input>', '<form>', '<button>'],
      type: 'MCQs',
      correctAnswer: '<input>',
    },
    {
      question: 'Bir HTML belgesinde en yüksek başlık seviyesi hangisidir?',
      choices: ['<h6>', '<h3>', '<h1>', '<h4>'],
      type: 'MCQs',
      correctAnswer: '<h1>',
    },
    {
      question: 'HTML\'de tabloların başlıklarını belirtmek için hangi etiket kullanılır?',
      choices: ['<thead>', '<header>', '<th>', '<tfoot>'],
      type: 'MCQs',
      correctAnswer: '<thead>',
    },
    {
      question: 'Bir bağlantı (link) oluşturmak için hangi HTML etiketi kullanılır?',
      choices: ['<a>', '<link>', '<href>', '<anchor>'],
      type: 'MCQs',
      correctAnswer: '<a>',
    },
    {
      question: 'HTML’de görüntü eklemek için hangi etiket kullanılır?',
      choices: ['<picture>', '<img>', '<image>', '<src>'],
      type: 'MCQs',
      correctAnswer: '<img>',
    },
    {
      question: 'HTML5’te hangi etiket, medya (video ve ses) oynatmak için kullanılır?',
      choices: ['<media>', '<video>', '<audio>', '<play>'],
      type: 'MCQs',
      correctAnswer: '<video>',
    },
    {
      question: 'HTML’de liste oluşturmak için hangi etiket kullanılır?',
      choices: ['<ol>', '<list>', '<ul>', '<li>'],
      type: 'MCQs',
      correctAnswer: '<ol>',
    },
  ],
};

export const cssQuiz = {
  topic: 'CSS',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 5,
  questions: [
    {
      question: 'CSS\'te hangi özellik, bir elemanın zemin rengini belirler?',
      choices: ['color', 'background-color', 'border-color', 'font-color'],
      type: 'MCQs',
      correctAnswer: 'background-color',
    },
    {
      question: 'Bir HTML belgesine CSS bağlamak için hangi etiket kullanılır?',
      choices: ['<script>', '<link>', '<style>', '<css>'],
      type: 'MCQs',
      correctAnswer: '<link>',
    },
    {
      question: 'CSS\'te hangi özellik, metin hizalamasını belirler?',
      choices: ['text-align', 'vertical-align', 'alignment', 'text-direction'],
      type: 'MCQs',
      correctAnswer: 'text-align',
    },
    {
      question: 'CSS\'te hangi özellik, elemanın genişliğini belirler?',
      choices: ['height', 'size', 'width', 'max-width'],
      type: 'MCQs',
      correctAnswer: 'width',
    },
    {
      question: 'CSS\'te hangi özellik, yazı tipi boyutunu belirler?',
      choices: ['font-style', 'font-size', 'font-weight', 'text-size'],
      type: 'MCQs',
      correctAnswer: 'font-size',
    },
    {
      question: 'CSS\'te hangi özellik, elemanın kenar boşluklarını belirler?',
      choices: ['padding', 'margin', 'border', 'spacing'],
      type: 'MCQs',
      correctAnswer: 'padding',
    },
    {
      question: 'CSS\'te bir elemanın dış sınırını belirlemek için hangi özellik kullanılır?',
      choices: ['border', 'outline', 'padding', 'margin'],
      type: 'MCQs',
      correctAnswer: 'border',
    },
    {
      question: 'CSS\'te yazı rengini belirlemek için hangi özellik kullanılır?',
      choices: ['font-color', 'color', 'text-color', 'background-color'],
      type: 'MCQs',
      correctAnswer: 'color',
    },
    {
      question: 'CSS\'te sınıf seçicisi nasıl tanımlanır?',
      choices: ['#', '.', '*', '&'],
      type: 'MCQs',
      correctAnswer: '.',
    },
    {
      question: 'CSS\'te, bir elemanın şeffaflığını ayarlamak için hangi özellik kullanılır?',
      choices: ['visibility', 'opacity', 'display', 'filter'],
      type: 'MCQs',
      correctAnswer: 'opacity',
    },
  ],
};

export const jsQuiz = {
  topic: 'JavaScript',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 5,
  questions: [
    {
      question: 'JavaScript\'te hangi yöntem, bir dizinin sonuna eleman ekler?',
      choices: ['pop()', 'push()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswer: 'push()',
    },
    {
      question: 'JavaScript\'te hangi veri tipi doğru/yanlış değerini tutar?',
      choices: ['string', 'boolean', 'number', 'object'],
      type: 'MCQs',
      correctAnswer: 'boolean',
    },
    {
      question: 'JavaScript\'te bir fonksiyon nasıl tanımlanır?',
      choices: ['function myFunction()', 'def myFunction()', 'lambda myFunction()', 'func myFunction()'],
      type: 'MCQs',
      correctAnswer: 'function myFunction()',
    },
    {
      question: 'JavaScript\'te hangi operatör, eşitlik ve tür kontrolü yapar?',
      choices: ['=', '==', '===', '!=='],
      type: 'MCQs',
      correctAnswer: '===',
    },
    {
      question: 'JavaScript\'te hangi döngü, belirli bir kod bloğunu bir dizideki her eleman için çalıştırır?',
      choices: ['while', 'do-while', 'for', 'forEach'],
      type: 'MCQs',
      correctAnswer: 'forEach',
    },
    {
      question: 'JavaScript\'te bir değişkeni tanımlamak için hangi anahtar kelime kullanılır?',
      choices: ['var', 'let', 'const', 'dim'],
      type: 'MCQs',
      correctAnswer: 'var',
    },
    {
      question: 'JavaScript\'te dizinin ilk elemanını döndüren yöntem hangisidir?',
      choices: ['shift()', 'pop()', 'unshift()', 'push()'],
      type: 'MCQs',
      correctAnswer: 'shift()',
    },
    {
      question: 'JavaScript\'te bir sayı dizisinin toplamını almak için hangi yöntem kullanılır?',
      choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
      type: 'MCQs',
      correctAnswer: 'reduce()',
    },
    {
      question: 'JavaScript\'te bir değişkenin veri tipini belirlemek için hangi yöntem kullanılır?',
      choices: ['typeof', 'instanceof', 'isType', 'dataType'],
      type: 'MCQs',
      correctAnswer: 'typeof',
    },
    {
      question: 'JavaScript\'te, global nesne hangisidir?',
      choices: ['document', 'window', 'console', 'screen'],
      type: 'MCQs',
      correctAnswer: 'window',
    },
  ],
};

export const accessibilityQuiz = {
  topic: 'Accessibility',
  level: 'Beginner',
  totalQuestions: 10,
  perQuestionScore: 5,
  questions: [
    {
      question: 'Ekran okuyucuların bir düğmenin işlevini anlaması için hangi HTML özelliği kullanılır?',
      choices: ['aria-label', 'alt', 'title', 'role'],
      type: 'MCQs',
      correctAnswer: 'aria-label',
    },
    {
      question: 'İçeriğin görsel olarak gizlenip ekran okuyuculara açık olması için hangi CSS özelliği kullanılabilir?',
      choices: ['display: none', 'visibility: hidden', 'position: absolute; left: -9999px', 'opacity: 0'],
      type: 'MCQs',
      correctAnswer: 'position: absolute; left: -9999px',
    },
    {
      question: 'Web erişilebilirlik standartlarına uygun olarak, hangi renk kontrast oranı önerilir?',
      choices: ['3:1', '4.5:1', '2:1', '1:1'],
      type: 'MCQs',
      correctAnswer: '4.5:1',
    },
    {
      question: 'Klavyeyle gezilebilirlik sağlamak için hangi HTML özelliği kullanılır?',
      choices: ['tabindex', 'accesskey', 'role', 'aria-role'],
      type: 'MCQs',
      correctAnswer: 'tabindex',
    },
    {
      question: 'İşitme engelli kullanıcılar için video içeriklerinde hangi özellik kullanılmalıdır?',
      choices: ['alt metin', 'altyazı (caption)', 'transkript', 'açıklama (description)'],
      type: 'MCQs',
      correctAnswer: 'altyazı (caption)',
    },
    {
      question: 'Ekran okuyuculara açıklayıcı bilgi vermek için kullanılan HTML5 etiketi hangisidir?',
      choices: ['<summary>', '<details>', '<figcaption>', '<caption>'],
      type: 'MCQs',
      correctAnswer: '<figcaption>',
    },
    {
      question: 'Form etiketleriyle ilişkilendirilmiş açıklamalar için hangi HTML etiketini kullanmak en doğrusudur?',
      choices: ['<label>', '<span>', '<div>', '<input>'],
      type: 'MCQs',
      correctAnswer: '<label>',
    },
    {
      question: 'Erişilebilirlik standartlarına göre bir bağlantı metni nasıl olmalıdır?',
      choices: ['Tıklayın', 'Buraya tıklayın', 'Daha fazla bilgi', 'Hedeflenen içeriği açıklayan'],
      type: 'MCQs',
      correctAnswer: 'Hedeflenen içeriği açıklayan',
    },
    {
      question: 'Hangi WCAG başarı kriteri, video içeriklerinin erişilebilir olmasını sağlar?',
      choices: ['1.1.1', '1.2.2', '2.1.1', '2.2.2'],
      type: 'MCQs',
      correctAnswer: '1.2.2',
    },
    {
      question: 'Bir web sayfasının dilini belirtmek için hangi HTML özelliği kullanılır?',
      choices: ['lang', 'xml:lang', 'hreflang', 'dir'],
      type: 'MCQs',
      correctAnswer: 'lang',
    },
  ],
};


const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [quizTopic, setQuizTopic] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    correctAnswers: 0,
  })

  const quizzes = {
    HTML: htmlQuiz,
    CSS: cssQuiz,
    JavaScript: jsQuiz,
    Accessibility: accessibilityQuiz,
  };

  const startQuiz = (topic) => {
    setQuizTopic(topic);
  };

  const quizData = quizzes[quizTopic];
  //quizzes isimli bir obeje var bunun icinde html, css vs. var farkli konularda quiz verileri var

  const { questions } = quizData || {};
  //quizData obejenin icinden questions ozelligini alip questions adinda degisken ataniyor
  //henuz bit konu secilmediyse bos doner 
  const { question, choices, correctAnswer } = questions ? questions[activeQuestion] : {};

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          correctAnswers: prev.correctAnswers + 1,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `${number}`)

  return (
    <div className="quiz-container">
      {!quizTopic ? (
        <div className="start-screen">
          <div className="giris">
            <h1>Hoş geldiniz</h1>
            <h1 className='kalın'>Frontend Sınav!</h1>
          </div>
          <div className="secenek">
            <button onClick={() => startQuiz('HTML')}><img src="./html.png" alt="" />HTML</button>
            <button onClick={() => startQuiz('CSS')}><img src="./css.png" alt="" />CSS</button>
            <button onClick={() => startQuiz('JavaScript')}><img src="./js.png" alt="" />JavaScript</button>
            <button onClick={() => startQuiz('Accessibility')}><img src="./ers.png" alt="" />Erişilebilirlik</button>
          </div>
        </div>
      ) : !showResult ? (
        <div>
          <div>
            <img src="" alt="" />
            <span className="active-question-no">Soru {addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question"> {addLeadingZero(questions.length)}</span>
          </div>
          <div className="soru">
            <h2>{question}</h2>
            <div className="cevap">
              {choices.map((answer, index) => (
                <button
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  >
                  {answer}
                </button>
              ))}
              <div className="flex-right">
                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                  {activeQuestion === questions.length - 1 ? 'Submit Answer' : 'Sonraki Soru'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="sonuc-cevap">
            <h1>Test tamamlandı</h1>
            <h1 className='kalın'>Senin Sonucun...</h1>
          </div>
          <div className='sonuc-cıktı'>
          <p>
            <span className='dogru'>{result.correctAnswers}</span>
          </p>
          <p className='soru-sayı'>
            <span className='soru-sayı'>{questions.length} sorundan</span>
          </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz