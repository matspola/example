import Link from 'next/link';
 
export default function Home3() {
  return (
    <div>
       <h1>Добро пожаловать на мой сайт на Next.js! До большого пока не доросла:(</h1>
       <p>И снова привет! С помощью этой страницы я узнала как работает Link тоже!!</p>  
       <p>👈Налево пойдешь "Привет" узнаешь! Направо пойдешь "😊🥰" узнаешь!👉</p>
        
      
      <ul class="slider-buttons">
        <li>
          <Link href="/page2" className="slider-button">Перейти на страницу "Привет!"</Link>
        </li>
        <li>
          <Link href="/" className="slider-button">Перейти на страницу "😊🥰"</Link>
        </li>
      </ul>
  
    </div>
  );
};