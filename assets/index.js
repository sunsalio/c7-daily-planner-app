$(document).ready(function() {

  // display current date
  const currentDay = dayjs().format('dddd, MMMM D');
  document.getElementById('currentDay').innerText = currentDay;

    // Function to generate time blocks
    function generateTimeBlocks() {

      const container = $("#timeBlocks");
  
      // Clear existing content in the container
      container.empty();
  
      // Standard business hours (9 am - 5 pm)
      for (let hour = 9; hour <= 17; hour++) {
        const textArea = $("<textarea>").attr("id", "hour-" + hour);
        const saveBtn = $("<button>").addClass("save-btn").text("Save");
        
  
        // Add appropriate class based on the current time
        if (moment().hour() === hour) {
          textArea.addClass("present");
        } else if (moment().hour() < hour) {
          textArea.addClass("future");
        } else {
          textArea.addClass("past");
        }
  
        // Appends the hour, textarea, and save button to the container
        container.append(
          $("<div>").addClass("time-block").append(
            $("<div>").addClass("hour").text(moment().hour(hour).format("h A")),
            textArea, saveBtn
          )
        );

        // Event listener for save button clicked
        saveBtn.on('click', function() {
          const eventDescription = textArea.val();
          // Save the event description as needed
          console.log(`Event for ${moment().hour(hour).format("h A")} - ${eventDescription} saved!`);
        });
  
      }
    }
  
    // Initial generation of time blocks
    generateTimeBlocks();
  });
  