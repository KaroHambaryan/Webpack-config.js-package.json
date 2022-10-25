import stileDiv from "./interactive.module.css";


const Interactive = () => {
	
	
	const body = document.body;
	const div = document.createElement('div');
	div.innerText = "Karo jan shnavor axpers";
	div.classList.add(stileDiv.divStyle, stileDiv.colorStile);
	body.append(div);
};
 
export default Interactive;