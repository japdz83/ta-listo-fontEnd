const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			registeredUsers: [],
			loggedUsers: [],
			searchedCustomers: []
		},
		actions: {
			startStore: currentLocal => {
				if (currentLocal != false) {
					setStore(currentLocal);
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			registerUser: registerData => {
				const store = getStore();
				setStore({
					registeredUsers: [...store.registeredUsers, registerData]
				});
			},
			loginUser: loginData => {
				const store = getStore();
				setStore({
					loggedUsers: [...store.loggedUsers, loginData]
				});
			},
			searchingCustomer: searchingData => {
				const store = getStore();
				setStore({
					searchedCustomers: [...store.searchedCustomers, searchingData]
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
