import "./list.css"

export class List{
	render(...items) {
		let parent = document.createElement("ul");
		items.forEach(elem => {
			let child = document.createElement("li");
			child.innerText = elem;
			parent.append(child);
		})
		document.body.append(parent);
	}
}