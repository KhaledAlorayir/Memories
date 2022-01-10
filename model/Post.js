class Post {
	constructor(title, img, lat, lon, address) {
		this.title = title;
		this.img = img;
		this.lat = lat;
		this.lon = lon;
		this.address = address;
		this.timestamp = new Date();
	}
}

export default Post;
