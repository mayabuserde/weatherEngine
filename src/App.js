import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <div class="container">
       <Weather defaultCity="Kolkata"/>
      
       <footer>This project was built by <a href="https://mayabuserde.github.io/" target="_blank" rel="noreferrer">Maya Buser De</a>. It is <a href="https://github.com/mayabuserde/weatherEngine" target="_blank" rel="noreferrer">open-sourced on GitHub </a> and <a href="https://pensive-goodall-1d229c.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a></footer>

     </div>
    </div>
  );
}
