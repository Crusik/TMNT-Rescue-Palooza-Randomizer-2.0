import TMNT1987 from './Sounds/CharacterSelectionClips/tmnt-1987.mp3';
import TMNTNESclear from './Sounds/CharacterSelectionClips/tmnt-nes-area-clear.mp3';

import Cowabunga from './Sounds/Completion/tmnt-turtles-in-time-ost-cowabunga.mp3';

import TheRat from './Sounds/RemoveCharacterClips/ah-the-rat-so-it-has-a-name.mp3';
import ComeBack from './Sounds/RemoveCharacterClips/come-back-here-i\'m-not-finished-with-you.mp3'
import Chucker from './Sounds/RemoveCharacterClips/ohh-a-fellow-chucker-eh.mp3'
import Pizza from './Sounds/RemoveCharacterClips/pizza-dude\'s-got-30-seconds-mm-hm.mp3'
import TellMe from './Sounds/RemoveCharacterClips/tell-me-you-didn\'t-pay-money-for-this.mp3'
import Splinter from './Sounds/RemoveCharacterClips/where\'s-splinter.mp3'
import Listen from './Sounds/RemoveCharacterClips/you-will-listen-now.mp3'

import CaseyJones from './Sounds/RemoveStageClips/ahh-the-name\'s-casey-jones-a-friend.mp3'
import Cricket from './Sounds/RemoveStageClips/cricket-nobody-understands-cricket-you-gotta-know-what-a-crumpet-is-to-understand-cricket.mp3'
import Punkers from './Sounds/RemoveStageClips/god-i-hate-punkers-especially-bald-ones-with-green-makeup-who-wear-masks-over-ugly-faces-that\'s-it.mp3'
import Doji from './Sounds/RemoveStageClips/ahh-the-name\'s-casey-jones-a-friend.mp3'
import WiseMan from './Sounds/RemoveStageClips/wise-man-say-forgiveness-is-divine-but-never-pay-full-price-for-late-pizza.mp3'

import TMNTClear from './Sounds/StageSelectionClips/tmnt-clear.mp3'
import TMNT3NES from './Sounds/StageSelectionClips/tmnt3-nes-stage-clear.mp3'


export const characterSelectionClips = [TMNT1987, TMNTNESclear];
export const completionClips = [Cowabunga];
export const removeCharacterClips = [TheRat, ComeBack, Chucker, Pizza, TellMe, Splinter, Listen];
export const removeStageClips = [CaseyJones, Cricket, Punkers, Doji, WiseMan];
export const stageSelectionClips = [TMNTClear, TMNT3NES];

export function playRandomAudio(clipArray) {
    const randomIndex = Math.floor(Math.random() * clipArray.length);
    const audio = new Audio(clipArray[randomIndex]);
    audio.play();
}

// playAudio(characterSelectionClips)
// playAudio(stageSelectionClips)
// playAudio(removeCharacterClips)
// playAudio(removeStageClips)
  