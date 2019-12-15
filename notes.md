new sale object will be 

{
  title:'',
  details:'',
  location: '',
  date_time: '',
  pictures: [] of strings
}


post request will be to sales

sales will need to take the request and add to the sale table and to the picturs table.


[
  '{{repeat(100)}}',
  {
    sale_id: '{{integer(1, 50)}}',
    pic: 'https://loremflickr.com/320/240/{{random("toy", "house", "furniture", "chair", "desk", "computer", "bed", "cloths")}}'
  }
]