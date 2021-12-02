import React from 'react';

const Fees = () => {



return (
	<div className="container d-flex-vertical text-center">
		<button className="btn btn-info w-75"
				onClick={()=>{window.open("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", '_blank')}}>
			Click here to pay fees online via SBI Collect</button>

		{/*<button className="btn btn-info w-75 mt-10"*/}
		{/*		onClick={()=>{window.open("https://www.scopus.com/freelookup/form/author.uri", '_blank')}}>*/}
		{/*	Search for Author profile from scopus</button>*/}

		{/*<button className="btn btn-info w-75 mt-10"*/}
		{/*		onClick={()=>{window.open("https://scholar.google.com/", '_blank')}}>*/}
		{/*	Search for Google Scholar Profile</button>*/}

		{/*<iframe className="w-100 h-screen" src="https://api.elsevier.com/content/search/scopus?query=AUTHLASTNAME(deb)%20AND%20SUBJAREA(CHEM)&apikey=4cf047c0fba1347cce56fb0ac26f0805"/>*/}
		{/*<iframe className="w-100 h-screen" src="https://scholar.google.com/"/>*/}
		{/*<iframe className="w-100 h-screen mt-10" src="https://www.scopus.com/freelookup/form/author.uri"/>*/}


	</div>
);
};

export default Fees;
