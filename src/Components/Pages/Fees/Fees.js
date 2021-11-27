import React from 'react';

const Fees = () => {
return (
	<div className="container text-center">
		<button className="btn btn-info w-50"
				onClick={()=>{window.open("https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", '_blank')}}>
			Click here to pay fees online via SBI Collect</button>
	</div>
);
};

export default Fees;
