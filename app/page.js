import Link from 'next/link';

export default function Home2() {
  return (
    <div>
     <h1>Добро пожаловать на мой мини-сайт на Next.js! До большого пока не доросла:(</h1>
      <p>😊🥰😊🥰😊🥰😊🥰</p>
      <p>👈Налево пойдешь "Снова" узнаешь! Направо пойдешь "Привет" узнаешь!👉</p>

      <ul class="slider-buttons">
        <li>
          <Link href="/page3" className="slider-button">Перейти на страницу "И снова привет!"</Link>
        </li>
        <li>
          <Link href="/page2" className="slider-button">Перейти на страницу "Привет!"</Link>
        </li>
      </ul>

    </div>
  );
};