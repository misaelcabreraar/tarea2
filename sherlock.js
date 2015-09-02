//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
_INPUT = //**Supposed to work with both excercises;


int j=0 , k=0, l=2, m=0, n=1;

var repl = _INPUT.replace(/ /g,'\n');

A=repl[n];
B=repl[l];

for (m = repl[repl.length];B<=m;B= repl[l=l+2])
{
	
	for(int i = A; i<=B;i++)
	{
	var serie = serie.push(i);
	}
	for(int i =1;i<serie[serie.length];i++)
	{
		j=i*i;
		for(int p=0;p<serie[serie.length];p++)
		{
			if (j==serie[p])
			{	
			k++
			}
			else
			{
			}
		}
	}
A=repl[n+2];
console.log (k);
}
