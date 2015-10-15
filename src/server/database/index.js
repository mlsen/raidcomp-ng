export function fetchComposition(compositionId) {
  return function(callback) {
    setTimeout(() => {
      callback({
        id: compositionId,
        characters: 200
      });
    }, 500);
  }
}
