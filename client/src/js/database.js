import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb update');
  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readwrite');
  const store = text.objectStore('jate');
  const request = store.put({jate: content});
  const results = await request;
  console.log('update: ', results);
}
// logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('grabbing data');
  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readonly');
  const store = text.objectStore('jate');
  const request = store.getAll();
  const results = await request;
  console.log('results: ', results);
};

initdb();
