// HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" name=viewport content="width=device-width, initial-scale=1">
    <title>Random Picker</title>
    <link rel="stylesheet" href="turtles.css">
    <link rel="shortcut icon" href="#">
</head>

<body id="main">
    {/* <!-- <iframe id="intro" src="https://www.youtube.com/embed/AxuvUAjHYWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
    <div class="main">
        <div class="container">
            <header>Stage Picker</header>
            <h1 id="headerStages">?</h1>
            <button class="button" id="stageButton">start</button>
            <header>Character Picker</header>
            <h1 id="headerNames">?</h1>
            <button class="button" id="characterButton">start</button>
            <header>Remove Last Stage</header>
            <button class="button" id="removeStageButton">Remove</button>
            <header>Remove Last Character</header>
            <button class="button" id="removeCharacterButton">Remove</button>
        </div>
        <div class="stages">
            <div class="stage">
                <h2 id="0">Stage</h2>
                <ul>
                    <li><span id="13" class="character"></span></li>
                    <li><span id="14" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="1">Stage</h2>
                <ul>
                    <li><span id="15" class="character"></span></li>
                    <li><span id="16" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="2">Stage</h2>
                <ul>
                    <li><span id="17" class="character"></span></li>
                    <li><span id="18" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="3">Stage</h2>
                <ul>
                    <li><span id="19" class="character"></span></li>
                    <li><span id="20" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="4">Stage</h2>
                <ul>
                    <li><span id="21" class="character"></span></li>
                    <li><span id="22" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="5">Stage</h2>
                <ul>
                    <li><span id="23" class="character"></span></li>
                    <li><span id="24" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="6">Stage</h2>
                <ul>
                    <li><span id="25" class="character"></span></li>
                    <li><span id="26" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="7">Stage</h2>
                <ul>
                    <li><span id="27" class="character"></span></li>
                    <li><span id="28" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="8">Stage</h2>
                <ul>
                    <li><span id="29" class="character"></span></li>
                    <li><span id="30" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="9">Stage</h2>
                <ul>
                    <li><span id="31" class="character"></span></li>
                    <li><span id="32" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="10">Stage</h2>
                <ul>
                    <li><span id="33" class="character"></span></li>
                    <li><span id="34" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="11">Stage</h2>
                <ul>
                    <li><span id="35" class="character"></span></li>
                    <li><span id="36" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h2 id="12">Stage</h2>
                <ul>
                    <li><span id="37" class="character"></span></li>
                    <li><span id="38" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h3>Krang</h3>
                <ul>
                    <li><span id="39" class="character"></span></li>
                    <li><span id="40" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h3>Techno-Drome</h3>
                <ul>
                    <li><span id="41" class="character"></span></li>
                    <li><span id="42" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h3>Techno-Drome <br>Round 2</h3>
                <ul>
                    <li><span id="43" class="character"></span></li>
                    <li><span id="44" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <h3>Techno-Drome Final</h3>
                <ul>
                    <li><span id="45" class="character"></span></li>
                    <li><span id="46" class="character"></span></li>
                </ul>
            </div>
            <div class="stage">
                <p>The rules for this randomizer will be:</p>
                <ol>
                    If either player gets one of the four turtles at any point and wants to reroll their character they can. This does not count for the first stage, since you can only be one of the starting four turtles.
                </ol>
            </div>
            <div class="logo">
                <img src="Images/TMNT.png" height="250px" alt="Ninja Turtles">
            </div>
            <div class="cowabunga-logo" id="cowabunga-logo">
                <img src="Images/cowabunga.png" alt="Cowabunga">
            </div>
        </div>
    </div>
    <audio id="intro_song" src="Sounds/Teenage Mutant Ninja Turtles Intro.mp3" type="audio/mp3" allow="autoplay" />
    <audio id="tmnt1987" src="Sounds/tmnt-1987.mp3" type="audio/mp3" />
    <audio id="tmntClear" src="Sounds/tmnt-clear.mp3" type="audio/mp3" />
    <audio id="tmntAreaClear" src="Sounds/tmnt-nes-area-clear.mp3" type="audio/mp3" />
    <audio id="tmntStageClear" src="Sounds/tmnt3-nes-stage-clear.mp3" type="audio/mp3" />
    <audio id="cowabunga" src="Sounds/tmnt-turtles-in-time-ost-cowabunga.mp3" />
    <audio id="chucker" src="Sounds/ohh-a-fellow-chucker-eh.mp3" />
    <audio id="jose" src="Sounds/tell-me-you-didn't-pay-money-for-this.mp3" />
    <audio id="vanish" src="Sounds/ninja-vanish.mp3" />
    <audio id="punker" src="Sounds/god-i-hate-punkers-especially-bald-ones-with-green-makeup-who-wear-masks-over-ugly-faces-that's-it.mp3" />
    <audio id="30seconds" src="Sounds/pizza-dude's-got-30-seconds-mm-hm.mp3" />
    <audio id="april" src="Sounds/what-am-i-behind-on-my-sony-payments-again-ha-ha-ha.mp3" />
    <audio id="listen" src="Sounds/you-will-listen-now.mp3" />
    <audio id="splinter" src="Sounds/where's-splinter.mp3" />
    <audio id="theRat" src="Sounds/ah-the-rat-so-it-has-a-name.mp3" />
</body>
{/* <!-- <script src="./turtles.js"></script> --> */}
<script src="./turtles testing.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>