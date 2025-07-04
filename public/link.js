let AI, Bot;
let quickAccesses, mcq;
const server = "https://api.vinaiak.com";
fetch("https://chatbot.vinaiak.com/chatbot/frontend/inject.js").then(
    (response) => {
        response.text().then((data) => {
            let Bot1, AI1;
            data = data + ";Bot1 = Bot;AI1 = AI";
            eval(data);
            AI = AI1;
            Bot = Bot1;
            AI.answer = function(query, outputBox) {
                outputBox.innerHTML += "Mujhe kuch nhi aata"
            }
        });
    },
);

function addBot(targetElement) {
    let frameNotOpened = false;
    targetElement = targetElement || document.body;

    {
        const styles = document.createElement("link");
        styles.rel = "stylesheet";
        styles.href =
            "https://chatbot.vinaiak.com/clients/BIT_Mesra/site/styles.css";
        document.head.appendChild(styles);
    }
    const loginIcon = document.createElement("div");
    loginIcon.id = "bot-loginIcon";
    loginIcon.innerHTML =
        '<img src="https://chatbot.vinaiak.com/clients/SBPS_Ranchi/site/resources/icon.gif" alt="AI assistants"</img>';
    targetElement.appendChild(loginIcon);

    loginIcon.onclick = () => {
        if (Bot.exists) {
            setTimeout(() => {
                Bot.openFrame();
                setTimeout(() => {
                    document.getElementById("bot-loginIcon").style.display = "none";
                }, 400);
            }, 600);
            return;
        } else {
            setTimeout(() => {
                document.getElementById("bot-loginIcon").style.display = "none";
                if (!Bot.loaded) frameNotOpened = true;
                else Bot.openFrame();
            }, 1000);
        }
        new Bot(
            1,
            null,
            "Ask me about the product",
            "Walmart AI assistant",
            "https://yt3.ggpht.com/a/AATXAJwOzthsWc__jFGypZvbWTdrVKBNCsMIv-Y6ofuk=s900-c-k-c0xffffffff-no-rj-mo",
            quickAccesses,
            () => {
                if (frameNotOpened) Bot.openFrame();
                Bot.createBox("How may I assist you?", 'bot')
                Bot.stopWaiting()
            },
            targetElement,
        );
        console.log("Logged in to chat bot");
    };
}
addBot()
