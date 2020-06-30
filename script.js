var newPolitician = function(name, partyColor) {

  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;

};

var politician1 = newPolitician("Rue Paul", [132, 17, 11]);
var politician2 = newPolitician ("Angelina Jolie", [245, 141, 136]);

politician1.electionResults= [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults= [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

politician1.electionResults[9]= 1;
politician2.electionResults[9]= 28;
politician1.electionResults[4]= 17;
politician2.electionResults[4]= 38;
politician1.electionResults[43]= 11;
politician2.electionResults[43]= 27;

var setStateResults = function(state) {

  theStates[state].winner = null;

	if (politician1.electionResults[state] > politician2.electionResults[state])
    {
      theStates[state].winner = politician1;
    }

  else if (politician2.electionResults[state] > politician1.electionResults[state])
  {
    theStates[state].winner = politician2;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  {
	theStates[state].rgbColor = stateWinner.partyColor;
   }

  else {
    theStates[state].rgbColor = [11, 32, 57];
  }

 var stateResultsTable = document.getElementById('stateResults');

 var header = stateResultsTable.children[0].children[0];
 var body = stateResultsTable.children[1];

 var stateName = header.children[0];
 var abbrev = header.children[1];


 var candidate1Name = body.children[0].children[0];
 var candidate2Name = body.children[1].children[0];

 var candidate1Results = body.children[0].children[1];
 var candiate2Results = body.children[1].children[1];

 var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = politician1.name;
  candidate2Name.innerText = politician2.name;

  candidate1Results.innerText = politician1.electionResults[state];
  candiate2Results.innerText = politician2.electionResults[state];

  if (theStates[state].winner === null)
  {
  winnersName.innerText = "DRAW!";
  }
  else {
  winnersName.innerText = theStates[state].winner.name;
  }

};


politician1.tallyUpTotalVotes();
politician2.tallyUpTotalVotes();

console.log("The total votes for " + politician1.name + " is " + politician1.totalVotes + " and the party color is " + politician1.partyColor + "!");
console.log("The total votes for " + politician2.name + " is " + politician2.totalVotes + " and the party color is " + politician2.partyColor + "!");

var winner = "?";

if (politician1.totalVotes > politician2.totalVotes) {
  winner = politician1.name;
}

else if (politician2.totalVotes > politician1.totalVotes) {
  winner = politician2.name
}

else { winner = "DRAW.";
     }

console.log("AND THE WINNER IS..." + winner + "!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = politician1.name;
row.children[1].innerText = politician1.totalVotes;
row.children[2].innerText = politician2.name;
row.children[3].innerText = politician2.totalVotes;
row.children[5].innerText = winner;
