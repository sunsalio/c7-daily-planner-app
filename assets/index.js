$(document).ready(function() {
    // Function to generate time blocks
    function generateTimeBlocks() {
      const container = $("#timeBlocks");
  
      // Clear existing content in the container
      container.empty();
  
      // Standard business hours (9 am - 5 pm)
      for (let hour = 9; hour <= 17; hour++) {
        const textArea = $("<textarea>").attr("id", "hour-" + hour);
        
  
        // Add appropriate class based on the current time
        if (moment().hour() === hour) {
          textArea.addClass("present");
        } else if (moment().hour() < hour) {
          textArea.addClass("future");
        } else {
          textArea.addClass("past");
        }
  
        // Append the hour, textarea, and save button to the container
        container.append(
          $("<div>").addClass("time-block").append(
            $("<div>").addClass("hour").text(moment().hour(hour).format("h A")),
            textArea,
          )
        );
  
      }
    }
  
    // Initial generation of time blocks
    generateTimeBlocks();
  });
  