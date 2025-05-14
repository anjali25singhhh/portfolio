
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl md:text-9xl font-orbitron font-bold text-neon-blue text-glow">
        404
      </h1>
      
      <div className="mt-4 mb-8 inline-flex flex-col items-center">
        <div className="typing-container max-w-md">
          <p className="typing-text text-lg text-gray-400 font-mono">
            ERROR: PATH_NOT_FOUND
          </p>
        </div>
        <p className="mt-4 text-xl text-white">
          The requested destination does not exist in this dimension.
        </p>
        <div className="terminal-text mt-6 bg-dark-lighter border border-dark-border rounded-md p-4 max-w-lg">
          <p className="text-gray-500">
            <span className="text-neon-blue">$</span> locate {location.pathname}
          </p>
          <p className="text-gray-300 mt-1">
            <span className="text-red-500">&gt; ERROR:</span> Path "{location.pathname}" not found in system
          </p>
          <p className="text-gray-500 mt-1">
            <span className="text-neon-blue">$</span> suggest_alternative
          </p>
          <p className="text-gray-300 mt-1">
            <span className="text-green-500">&gt; SUGGESTION:</span> Return to main directory "/"
          </p>
          <p className="text-gray-500 mt-1">
            <span className="text-neon-blue">$</span> _
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-6 py-3 bg-dark-lighter border border-neon-blue rounded-md font-medium text-white hover:bg-neon-blue/10 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        RETURN TO HOME
      </button>
    </div>
  );
};

export default NotFound;
