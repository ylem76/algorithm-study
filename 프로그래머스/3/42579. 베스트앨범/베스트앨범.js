const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

// [4, 1, 3, 0]

function solution(genres, plays) {
    // 합친 형태로 변경
    const songData = plays.map((play, index) => {
        return {genre : genres[index], index: index, play:play}
    });
    
    console.log(songData)
    
    const uniqueGenres = Array.from(new Set(genres));
    
    
    
    
    const filterd = uniqueGenres.map((genre) => (songData.filter(song => song.genre === genre).sort((a,b) => b.play - a.play)));
    
    const reduced = filterd.map((item) => [item[0][0], item.reduce((acc, current) => acc + current[2], 0)] )
    
    reduced.sort((a,b) => b[1] - a[1])
    
    
    console.log(filterd)
    
    console.log(reduced)
    
    
    
    
    
    
    
    
}