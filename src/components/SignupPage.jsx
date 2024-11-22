import { useState } from 'react';
import { Eye, EyeOff, Terminal, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DigitalRain from './DigitalRain';

const SignupPage = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Add your signup logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <DigitalRain />
      <div className="w-full max-w-md relative z-10">
        <div className="bg-black border border-[#00ff00]/20 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#001a00] border-b border-[#00ff00]/20 p-3 flex items-center">
            <Terminal className="h-5 w-5 text-[#00ff00] mr-2" />
            <span className="text-[#00ff00] font-mono text-sm">root@mischief:~# create_account.sh</span>
          </div>

          {/* Main Content */}
          <div className="p-6 space-y-6">
            {/* Title */}
            <pre className="text-[#00ff00] text-center font-mono text-sm leading-none mb-6">
{`[=================]
>   MISCHIEF.CC   <
[=================]`}
            </pre>
            <p className="text-[#00ff00]/50 text-center text-sm font-mono -mt-4">New User Registration</p>

            <form onSubmit={handleSignup} className="space-y-6">
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
                    placeholder="create_username"
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
                    placeholder="create_password"
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

                <div className="flex items-center text-[#00ff00] space-x-2">
                  <span className="text-[#00ff00]/50">$</span>
                  <span className="text-[#00ff00]">confirm:</span>
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#00ff00] placeholder-[#00ff00]/30"
                    placeholder="confirm_password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    className="text-[#00ff00]/50 hover:text-[#00ff00]"
                  >
                    {isConfirmPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="text-[#00ff00]/50 text-xs font-mono space-y-1">
                <div className="flex items-center">
                  <AlertCircle className="h-3 w-3 mr-2" />
                  <span>Min 8 characters required</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-3 w-3 mr-2" />
                  <span>Must include numbers and special chars</span>
                </div>
              </div>

              {/* Command Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#001a00] border border-[#00ff00]/20 rounded p-2 font-mono text-[#00ff00] hover:bg-[#002a00] transition-colors"
              >
                {isLoading ? 
                  '[ CREATING ACCOUNT... ]' : 
                  '[ INITIALIZE NEW USER ]'}
              </button>
            </form>

            {/* Terminal Footer */}
            <div className="mt-6 font-mono text-xs">
              <div className="text-[#00ff00]/50">
                {'>'} Already registered? Execute{' '}
                <Link to="/login" className="text-[#00ff00] hover:underline">
                  login.sh
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

export default SignupPage; 