// pages/index.tsx

import Terminal from '../components/Terminal';

const Home = () => {
  return (
    <div className="bg-white/5 text-white font-mono h-screen flex items-center justify-center overflow-hidden">
      <Terminal />
    </div>
  );
};

export default Home;
