
export function ChapterGenerator(number) {
    const allChapters = [];
    for (var i=1; i<= number; i++) {
      allChapters.push({"number": i});
    } 
    return allChapters;
}