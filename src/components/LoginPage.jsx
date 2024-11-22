import { useState } from 'react';
import { Eye, EyeOff, MessageCircle, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import DigitalRain from './DigitalRain';

const LoginPage = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);      

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleTelegramLogin = () => {
    window.Telegram.Login.auth({
      bot_id: "7643303670",
      request_access: "write",
      redirect_url: "https://mischief.cc/auth/callback",
      debug: true
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <DigitalRain />
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-black border border-[#00ff00]/20 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#001a00] border-b border-[#00ff00]/20 p-3 flex items-center">
            <Terminal className="h-5 w-5 text-[#00ff00] mr-2" />
            <span className="text-[#00ff00] font-mono text-sm">root@mischief:~# initialize_login.sh</span>
          </div>

          {/* Main Content */}
          <div className="p-6 space-y-6">
            {/* Title */}
            <pre className="text-[#00ff00] text-center font-mono text-sm leading-none mb-6">
{`[†]===============[†]
>> MISCHIEF.CC <<
[†]===============[†]`}
            </pre>
            <p className="text-[#00ff00]/50 text-center text-sm font-mono -mt-4">System Access Required</p>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Terminal-style inputs */}
              <div className="space-y-4 font-mono">
                <div className="flex items-center text-[#00ff00] space-x-2">
                  <span className="text-[#00ff00]/50">$</span>
                  <span className="text-[#00ff00]">username:</span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder-[#00ff00]/30"
                    placeholder="enter_username"
                    required
                  />
                </div>
                <div className="flex items-center text-[#00ff00] space-x-2">
                  <span className="text-[#00ff00]/50">$</span>
                  <span className="text-[#00ff00]">password:</span>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder-[#00ff00]/30"
                    placeholder="enter_password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                    className="text-[#00ff00]/50 hover:text-[#00ff00]"
                  >
                    {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Command Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#001a00] border border-[#00ff00]/20 rounded p-2 font-mono text-[#00ff00] hover:bg-[#002a00] transition-colors"
                >
                  {isLoading ? 
                    '[ AUTHENTICATING... ]' : 
                    '[ EXECUTE LOGIN SEQUENCE ]'}
                </button>

                <div className="text-center text-[#00ff00]/50 text-sm font-mono">-- OR --</div>

                <button
                  type="button"
                  onClick={handleTelegramLogin}
                  className="w-full bg-[#001a1a] border border-[#0088cc]/20 rounded p-2 font-mono text-[#0088cc] hover:bg-[#00202a] transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  [ TELEGRAM AUTH PROTOCOL ]
                </button>
              </div>
            </form>

            {/* Terminal Footer */}
            <div className="mt-6 font-mono text-xs">
              <div className="text-[#00ff00]/50">
                {'>'} New user? Execute{' '}
                <Link to="/signup" className="text-[#00ff00] hover:underline">
                  create_account.sh
                </Link>
              </div>
              {isLoading && (
                <div className="text-[#00ff00] animate-pulse">
                  {'>'} Processing request...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 