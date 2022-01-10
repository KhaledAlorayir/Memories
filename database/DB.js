import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("memoriesdb");

export const Init = () => {
	try {
		db.transaction(
			(tx) => {
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, img TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lon REAL NOT NULL, timestamp BIGINT NOT NULL);"
				);
			},
			(err) => {
				console.log("db error: " + err);
			},
			() => {
				console.log("db succses");
			}
		);
	} catch (error) {
		console.log(error);
	}
};

export const Create = (post) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO posts(title,img,address,lat,lon,timestamp) VALUES(?,?,?,?,?,?)`,
				[
					post.title,
					post.img,
					post.address,
					post.lat,
					post.lon,
					post.timestamp,
				],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const Read = async () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM posts",
				[],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const Delete = async (img) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM posts where img = ?",
				[img],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};
