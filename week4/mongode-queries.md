<code>unzip movies.json.zip</code> <br />
<code>mongoimport --db video --collection movies --file movies.json --jsonArray</code> <br />
another example: <br />
<code>mongoimport --db companiesDB --collection companies --file data.json</code>


year AND director : 
{$and: [{director: 'James Cameron'}, {year: '1991'}]}


year OR director
{$or: [{director: 'James Cameron'}, {year: '1991'}]}

not year 1991 or not james cameron
{$nor: [{director: 'James Cameron'}, {year: '1991'}]}

PROJECT : {title:1}

SORT: {title: 1}  (1 ascending, -1 descending)
      {title:- 1}
      
all movies with year not equal to 1972
{year: {$ne: '1972'}} 

greater than 1972
{year: {$gt: '1972'}}

greater than equal
{year: {$gte: '1972'}}

find movies who are inside the array
{director: {$in: ['Lana Wachowski', 'David Fincher']}}

the oposite , not in
{director: {$nin: ['Lana Wachowski', 'David Fincher']}}

movies who genre are drama AND crime
{genre: {$all: ['Crime', 'Drama']}}
