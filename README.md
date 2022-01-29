Hi and welcome to the Better than Disney app! This is an app created by 3 students in the Grand Circus full stack front-end course.

Contributions made by Dwayne T, Steven T, and Logan A.

This app was created to show off everthing we have learned so far with React. From using .map too creating a fetch request to an API. (specail thanks to TMDB API service).


<!-- FLOW OF DATA  -->
//Main page 
When the page is first loaded we wanted to have our fetch request pull the "discover" data to populate top movies that are out now. We accomplised this by pulling the data,
setting up a useState variable and storing the array data within it. From there we passed the movies array data to the results list as a prop.

//Results List
Now that the move array data is here in the Result List we can use some logic to itterate throught the array. The way we did this is use .map to loop through each movie and
create a Result. However, we couldn't just stop there. We wanted to pass down the data one more time break down what a single Result is; again passing the data as a prop. 

//Result
Now that we have broke down the array into a single movie we need to define what a single movie is. What do we displaly abou the movie? In this API we were able to pull
information that is useful to do just that. We pulled the title, rating, overview and more. Now comes filling the HTML tags with the data and adding styles.



<!-- Search Form -->

//Search form
The search form is a big component that allows the user to freely interact with the data. We enabled the user to search by title, genre and page. Setting up the search form was 
tricky since it involved many moving parts to create. First, we knew that we needed to grab the data from the input fields so we set up hooks to hold that data. Second, we set
up the onChange and value atrributes to update the input in real time. Third, we then made a onSubmit function to handle the form submission and included the logic needed to
apply the inputs from the user to the API. 

<!-- API / Fetch Requests -->

//Fetch Requests
 We started with looking at the TMDB documention to make sure our endpoints were correct and pulling just the discover endpoint to show a list of movies. We quickly learned 
 pagination of data (limited number of data coming through on a page ) so we used the page number query in our fetch request to allow the user to go through all the movies.
 We set up another fetch request, still using the discover endpoint with page number query, but now we're adding the genre as another filter. Lastly we needed to search by movie
 title which can use the same discover endpoint. The logic that controls what fetch request to use is in the Main file. 
 
 
