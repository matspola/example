import Link from 'next/link';

export default function Home2() {
  return (
    <div>
      <h1>Добро пожаловать на мой сайт на Next.js! До большого пока не доросла:(</h1>
      <p>Привет! С помощью этой страницы я узнала как работает Link</p>
      <p>👈Налево пойдешь "😊🥰" узнаешь! Направо пойдешь "Снова" узнаешь!👉</p>
      
      <ul class="slider-buttons">
        <li>
          <Link href="/" className="slider-button">Перейти на страницу "😊🥰"</Link>
        </li>
        <li>
          <Link href="/page3" className="slider-button">Перейти на страницу "И снова привет!"</Link>
        </li>
      </ul>

    </div>
  );
};