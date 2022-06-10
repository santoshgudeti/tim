async function movies(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_vth4hwh2?user_rating=9.0,10&release_date=2021-12-01,2022-01-01&countries=in&languages=te"
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    var data ='<table id="mytable"border="1" cellpadding="2">';
    table +='<tr><th>Name</th><th>Ratings </th><th>stars</th></tr>';
    let {results}=data;
    results.forEach(element=>{
        let{title,imdbRating,stars}=element;
   table +='<tr>';
   table +='<td>'+title+'</td>';
   table +='<td>'+imdbRating+'</td>';
   table +='<td>'+stars+'</td>';
   table +='</tr>';
    })
    table +='</table>';
    document.getElementById("result").innerHTML=table;
}