// getting free user's api , 


alert("please wait until your information is being load !")

async function getApi(){


		// first of all creating all the elemnt which re to be fileld with all the info,


		const body = document.getElementById("body");

		// creating a section for each user, which will be holding the inforation of post cards of that user

		// creating a loop for the sections of users, along with the names of them



		for(let i = 0; i < 10; i++){

			const section = document.createElement("section");

		section.className = "user-info";

		const nameHeading = document.createElement("h1");
		nameHeading.className = "user-name";

		section.appendChild(nameHeading);

		const postParent = document.createElement("div");
		postParent.className = "post-parent";


		// creating a loop for adding posts in this post parent 

		for(let i = 0; i < 10; i++){
			const postChild = document.createElement("div");
			postChild.className = "posts";

			// creating the inside material of the posy i.e (post title and body of it )

			const postChildTitle = document.createElement("span");

			postChildTitle.className = "title";

			const postChildBody = document.createElement("span");

			postChildBody.className = "body";


			postChild.appendChild(postChildTitle);

			postChild.appendChild(postChildBody);
			postParent.appendChild(postChild);



		}


		section.appendChild(postParent);

		body.appendChild(section);



		}




// adding a try function to catch erroes or bugs in the program
	try{





		// declaring variables

	const userApi =  await fetch("https://jsonplaceholder.typicode.com/users");

	const userObject = await userApi.json();
	const userNames = document.getElementsByClassName("user-name");


	// calling api's for posts of the users

	const postApi = await fetch("https://jsonplaceholder.typicode.com/posts");

	const postObject = await postApi.json();

	const titleDisplay = document.getElementsByClassName("title");
	const bodyDisplay = document.getElementsByClassName("body");

	// const cards = document.getElementsByClassName("posts")	



// adding another function to add the fetched data in to the DOM
	
	 function placingValues(){


	 	// creating first loop for creaing alll the elements in the DOM 



// creating a loop for filling al of the required laces with their particular values, without coding for each of them 




// this for loop is for placing user names to their right places 
			for(let i = 0; i < userNames.length; i++){

				userName = userObject[i].name;
			userNames[i].innerText = userName;


		


		}

		// creating another for loop for the posts of the users 

		for(let j = 0; j < titleDisplay.length; j++ ){
			postTitle = postObject[j].title;
			titleDisplay[j].innerHTML = postTitle;

			postBody = postObject[j].body;

			bodyDisplay[j].innerHTML = postBody;

		}


		}
		// calling this funciton 
		placingValues();
}catch(error){
	alert("can not get the information !");
}

}
getApi();



