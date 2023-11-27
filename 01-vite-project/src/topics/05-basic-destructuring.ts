/*
interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details{
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 4.19,
    song: "Square Hammer",
    details: {
        author: 'Ghost',
        year: 2016
    }
}

const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const { author } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
*/

const [, , trunks] : string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3:', trunks);

export {};