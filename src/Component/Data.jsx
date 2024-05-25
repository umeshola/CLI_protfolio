import { useEffect, useState, useRef } from "react";

function Data() {
  const [inputText, setInputText] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      const command = event.target.value.trim();
      if (command === "exit") {
        setInputText("");
        setCommandHistory([]);
      } else {
        setInputText("");
        setCommandHistory((prevHistory) => [
          ...prevHistory,
          `C:\\\\Umesh>${command}`,
          handleCommand(command),
        ]);
      }
      event.target.value = "";
    }
  };

  const handleCommand = (command) => {
    switch (command) {
      case "dir":
        return (
          <div>
            <h1>Projects</h1>
            <h1>Skills</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>
        );
      case "cd Projects":
        return (
          <div>
            <a href="https://github.com/umeshola/404_DSA">
              <h1 className="hover:text-green-500">DSA cracker</h1>
            </a>
            <a href="https://github.com/umeshola/ONE">
              <h1 className="hover:text-green-500">ONE</h1>
            </a>
            <a href="https://github.com/umeshola/Paper_Trading">
              <h1 className="hover:text-green-500">Paper Trading app</h1>
            </a>
            <a href="https://github.com/umeshola/Your_Space">
              <h1 className="hover:text-green-500">Image Space</h1>
            </a>
            <a href="hhttps://sneakers-gilt.vercel.app/">
              <h1 className="hover:text-green-500">Sneakers</h1>
            </a>
            <a href="https://portfolio-neon-ten-55.vercel.app/">
              <h1 className="hover:text-green-500">Portfolio</h1>
            </a>
          </div>
        );
      case "cd About":
        return (
          <div>
            <pre>{`
        $$$$$$\\        $$\\              $$$$$$\\     
       $$  __$$\\       $$ |            $$  __$$\\    
       $$ /  $$ |      $$ |            $$ /  $$ |   
       $$ |  $$ |      $$ |            $$$$$$$$ |   
       $$ |  $$ |      $$ |            $$  __$$ |   
       $$ |  $$ |      $$ |            $$ |  $$ |   
        $$$$$$  |      $$$$$$$$\\       $$ |  $$ |   
        \\______/       \\________|      \\__|  \\__|   
            `}</pre>
            <h1>
              I am a full stack developer, who is willing to help people to make
              there dream come true. I can code you your website and I have a
              great knowledge of Data structure and Algorithm. I am a fast
              learner who is willing to learn new tech. I like to read books
              related to physology, non-fiction and I am a big admire of Andrew
              Huberman.
            </h1>

            <h1>
              {" "}
              Some thing to showOff:-{" "}
              <a
                href="https://leetcode.com/umeshola/"
                className="hover:text-green-500 hover:underline"
              >
                Leetcode
              </a>
            </h1>
            <h1>
              {" "}
              <a
                href="https://takeuforward.org/profile/Umesh07"
                className="hover:text-green-500 hover:underline"
              >
                Other
              </a>
            </h1>
            <h1>
              <a
                href="https://www.naukri.com/code360/profile/1ecf1aa3-2693-42b8-a34a-147efca61af5"
                className="hover:text-green-500 hover:underline"
              >
                Coding ninja
              </a>
            </h1>
          </div>
        );
      case "cd Contact":
        return (
          <div>
            <h1>Usually I am busy, but I can manage for you :/</h1>
            <pre>{`
..+#@*#@+           
=@@@@%%@%           
@@@@@%%@%           
@@@@@%#@+           
%@@@@:            
 :%@@@@+            
 .:@@@@@#           
   .#@@@@#:::+@@%-..
    .-%@@@@@@@#=#@@+
      .=@@@@@@@@@++*
        .:*%@@@%#=..
`}</pre>
            <h1>
              <a
                href="mailto:umeshola07@gmail.com"
                className="hover:text-green-500 hover:underline"
              >
                Mail
              </a>
            </h1>
            <h1>
              <a
                href="https://www.linkedin.com/in/umesh-ola-a07501231/"
                className="hover:text-green-500 hover:underline"
              >
                LinkedIn
              </a>
            </h1>
          </div>
        );
            case "cd Skills":
                return (
                    <div>
                        <h1 className="ml-24">Exprence</h1>
                        <div className="flex">
                            <h1>React.js</h1>
                            <h1 className="ml-12">----</h1>
                        </div>
                      <div className="flex">
                            <h1>Graphql</h1>
                            <h1 className="ml-13">----</h1>
                        </div>
                        <div className="flex">
                            <h1>Next.js</h1>
                            <h1 className="ml-14">---</h1>
                        </div>
                        <div className="flex">
                            <h1>Mongoose</h1>
                            <h1 className="ml-12">----</h1>
                        </div>
                        <div className="flex">
                            <h1>BLockchain</h1>
                            <h1 className="ml-8">--</h1>
                        </div>
                        <div className="flex">
                            <h1>Tailwind</h1>
                            <h1 className="ml-12">---</h1>
                        </div>
                        <div className="flex">
                            <h1>Three.js</h1>
                            <h1 className="ml-12">--</h1>
                        </div>
                        <div className="flex">
                            <h1>Prisma</h1>
                            <h1 className="ml-16">----</h1>
                        </div>
                        <div className="flex">
                            <h1>Web3</h1>
                            <h1 className="ml-[84px]">--</h1>
                        </div>
                        <div className="flex">
                            <h1>DSA</h1>
                            <h1 className="ml-[90px]">-----</h1>
                        </div>
                    </div>
                );
            case "cd":
                return <div>Changing directory...</div>;
            case "help":
                return (
                    <div>
                        <h1>{`C:\\\\Working command>`}</h1>
                        <h1> dir</h1>
                        <h1> cd</h1>
                        <h1> help</h1>
                        <h1> clear</h1>
                    </div>
                );
            case "clear":
                setCommandHistory([]);
                return null;
            default:
                return <div>Command not recognized.</div>;
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        const scrollToBottom = () => {
            container.scrollTop = container.scrollHeight;
        };

        inputRef.current.focus();

        const handleWindowClick = () => {
            inputRef.current.focus();
            scrollToBottom();
        };

        window.addEventListener("click", handleWindowClick);
        scrollToBottom();

        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, [commandHistory, inputText]);

    return (
        <div className="ml-1 max-h-[650px] overflow-y-auto" ref={containerRef}>
            <div className="ml-1">
                <h1>Microhard Windows [Version 0.7.0.7.0.2](c)</h1>
                <h1>Microhard Corporation. All rights reserved.</h1>
                <pre>
                    {`
                _                             _                   
  __      _____| | ___ ___  _ __ ___   ___   | |__   ___  ___ ___ 
  \\ \\ /\\ / / _ \\ |/ __/ _ \\|  _  \  _ \\/ _ \\  |  _ \\ / _ \\/ __/ __|
   \\ V  V /  __/ | (_| (_) | | | | | |  __/  | |_) | (_) \\__ \\__ \\
    \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|  |____/ \\___/|___/___/
          `}
                </pre>
                <div className="flex flex-col">
                    {commandHistory.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                    <div className="flex">
                        <h1>{`C:\\\\Umesh>`}</h1>
                        <input
                            value={inputText}
                            onKeyDown={handleEnterPress}
                            type="text"
                            className="bg-black outline-none"
                            onChange={(e) => setInputText(e.target.value)}
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
