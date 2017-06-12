var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photos.Search&api_key=0e2b6aaf8a6901c264acb91f151a3350&per_page=10&format=json&nojsoncallback=1&tagmode=any" ;

document.getElementById('tag').addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }); 

$(document).ready(function() {
    
    $('#searchBtn').on('click', function(){
        
        var searchTerm = document.getElementById('tag').value;
        $('.resultArea__image-wrapper').remove();
        
        if ( searchTerm !== ''){
            
            var tags = "&tags=" + searchTerm;
            var finalURL = apiURL + tags;

            $.getJSON(finalURL, function(json){
                $.each(json.photos.photo, function(i, val){
                    var photo = json.photos.photo[i];
                    var photoUrl = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
                    $('#result').append('<div class="resultArea__image-wrapper"><img class="resultArea__image-wrapper__photo" src="' + photoUrl + '" alt="zdjęcie"/></div>'); 
                });
            });
        }
        else{
            $('#result').append('<span class="resultArea__image-wrapper">'+'Proszę wpisać tag w pole wyszukiwania'+'</span>');
        }
        
    });
});
