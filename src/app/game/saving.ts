import { Game } from './game';

const savesKeyPrefix = 'saves:';
const listKey = 'savesList';

export function saveGame(game: Game, saveName: string) {
  const data = game.serialize();
  localStorage.setItem(`${savesKeyPrefix}${saveName}`, JSON.stringify(data));
  const saveGames = listSaveGames();
  if (!saveGames.includes(saveName)) {
    saveGames.push(saveName);
  }
  saveList(saveGames);
}

export function loadGame(game: Game, saveName: string) {
  const data = localStorage.getItem(`${savesKeyPrefix}${saveName}`);
  if (!data) {
    console.error(`No save with name ${saveName}`);
    return;
  }
  game.clear();
  return game.deserialize(JSON.parse(data));
}

export function deleteSaveGame(saveName: string) {
  const saveGames = listSaveGames();
  if (!saveGames.includes(saveName)) {
    console.error(`No save with name ${saveName}`);
    return;
  }

  localStorage.removeItem(`${savesKeyPrefix}${saveName}`);

  const index = saveGames.indexOf(saveName);
  saveGames.splice(index, 1);
  saveList(saveGames);
}

export function listSaveGames(): string[] {
  const data = localStorage.getItem(listKey);
  if (!data) {
    return [];
  }
  return JSON.parse(data) || [];
}

function saveList(saveGames: string[]) {
  localStorage.setItem(listKey, JSON.stringify(saveGames));
}
