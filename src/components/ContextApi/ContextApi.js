import React, { useEffect, useState } from 'react';

export const RootContext = React.createContext();

const ContextProvider=({children})=>{

	const [selectedLanguage,setselectedLanguage]=useState("en")

	const defaultContext = {
		selectedLanguage,
        setselectedLanguage
	}
	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};
export default ContextProvider