import './App.css'; // tailwind 사용 위해 import
import { Routes, Route } from 'react-router-dom';

import TopFixedBar from './components/common/components/TopFixedBar';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import WritingPage from './pages/WritingPage';
import CardPage from './pages/CardPage';
import QuizPage from './pages/QuizPage';
import QuizDetailsPage from './pages/QuizDetailsPage';

function App() {
  return (
    <div>
      <TopFixedBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/success" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/failure" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/problem" element={<QuizDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
