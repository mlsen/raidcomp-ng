export function fetchComposition(compositionId, callback) {
  setTimeout(() => {
    callback({
      id: compositionId,
      characters: 200
    });
  }, 500);
}
