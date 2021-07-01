// The entire example runs when the DOM is ready
$(function ()
{
  // Data is in object literal notation
  var people =
  [
    {
      name: "Casey",
      rate: 60
    },
    {
      name: "Camille",
      rate: 80
    },
    {
      name: "Gordon",
      rate: 75
    },
    {
      name: "Nigel",
      rate: 120
    }
  ]
  // Checks each person and adds those in range to array
  // A new array is created to hold matching results.
  var results = [];

  /*
    The people array uses the forEach () method to
    run the same anonymous function on each object
  */
  people.forEach(function(person)
    {
      // If rate is in range, add to array
      if (person.rate >= 65 && person.rate <= 90)
      {
        results.push(person);
      }
    });

  // Creates table element
  var $tableBody = $("<tbody></tbody>");
  // Loop through new array and add matching people to the results table
  for (var i = 0; i < results.length; i++)
  {
    // Store current person
    var person = results[i];
    // Create a row for them
    var $row = $("<tr></tr>");
    // Add their name
    $row.append($("<td></td>").text(person.name));
    // Add their rate
    $row.append($("<td></td>").text(person.rate));
    // Add row to new content
    $tableBody.append($row);
  }

  // Add the new content after the body of the page
  // add tbody after thead
  $("thead").after($tableBody);
});
