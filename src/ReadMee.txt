// -- Components
I have created 2 components ,
1- Artist to represent an artist , with some props
such as id , name , followers , popularity , and images
In that way , it will be easier to display the astists when fetched

2- Album to represent an album , with some props
such as id , name(name of the album) , artistName(an array of the artists in this album)
date(date of release) , tracks(number of tracks in this album) and images

// -- Pages
I have created 3 Pages
1-Log in page which will get us a token so that the user
can access the data , because all spotify APIs need to be auhtorized
so we sign in and get a token by the url
When sign in is successfully occurred , we are 
redirected to the page : 

2- Artists page 
Which contains the search engine to search for a artists that match 
the value of the search input
When the user presses the Search button , an API
is called and then a list of artists are displayed

When we press on any artist  , another API is called
and we are redirected to a new page : 

3- Albums Page
I used UseEffect hook in this page , that renders 
for once , [no dependecies] , the moment the page renders ,
an API is called to fetch all the albums that correspond to
the pressed artist


// -- APIS and ROUTES 

https://api.spotify.com/v1/search?query=${artist}&type=artist&limit=10&offset=5&market=ES

-- the above route is used to search for artists that match the parameter {artist}
I could have wrote the api in the following form : 
https://api.spotify.com/v1/search?query=${artist}&type=artist
but this will give us a list of 20 artists , but i limited the quantity to 10 upon request


https://api.spotify.com/v1/artists/${id}/albums?limit=10&offset=5&market=ES

-- the above API is used to fetch all the albums that correspond to the passed parameter which
is the id of an artist







