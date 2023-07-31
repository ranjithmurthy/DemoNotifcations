     // Hardcoded initial JSON data
        var jsonData = {
            "message": "success",
            "notifications": [
                {
            "hasBeenInteractedWith": false,
            "id": "20",
            "actions": [{
                    "analytics": [{
                            "name": "",
                            "type": "",
                            "parameters": {
                                "label": "",
                                "action": "",
                                "category": ""
                            }
                        }
                    ],
                    "title": "jetzt PD online abschliessen",
                    "feedbackLink": {
                        "url": "https://tst-m.targobank.de/wsmobile/de/timeline/setfeedbackmessage.html?notificationId=DAKT1APP__00408648400010001&action=155",
                        "method": "",
                        "analytics": null
                    },
                    "link": {
                        "type": "NATIVE",
                        "method": "POST",
                        "url": "BROWSER://https://www.targobank.de/service/paydirekt"
                    }
                }, {
                    "analytics": [{
                            "name": "",
                            "type": "",
                            "parameters": {
                                "label": "",
                                "action": "",
                                "category": ""
                            }
                        }
                    ],
                    "title": "SPID ADR CHANGE",
                    "feedbackLink": {
                        "url": "https://tst-m.targobank.de/wsmobile/de/timeline/setfeedbackmessage.html?notificationId=DAKT1APP__00408648400010001&action=157",
                        "method": "",
                        "analytics": null
                    },
                    "link": {
                        "type": "RELATIVE",
                        "method": "POST",
                        "url": "regis/homepage.html?Param=CA"
                    }
                }
            ],
            "amount": "",
            "link": {
                "type": "RELATIVE",
                "method": "POST",
                "url": "regis/homepage.html?Param=CA"
            },
            "feedbackLink": {
                "url": "https://tst-m.targobank.de/wsmobile/de/timeline/setfeedbackmessage.html?notificationId=DAKT1APP__00408648400010001&action=LIN",
                "method": "",
                "analytics": [{
                        "name": "",
                        "type": "",
                        "parameters": {
                            "label": "",
                            "action": "",
                            "category": ""
                        }
                    }
                ]
            }
}
                // Add other existing notification objects here
            ],
            "returnCode": "0000"
        };
		
// Function to display current JSON data
function displayCurrentData() {
    var jsonDisplay = document.getElementById('jsonDisplay');
    jsonDisplay.textContent = JSON.stringify(jsonData, null, 2);

}

// Function to validate and add new notification
function addNewNotification() {
    var newNotificationInput = document.getElementById('newNotificationInput').value.trim();
    if (!newNotificationInput) {
        alert("Please enter a valid notification object in JSON format.");
        return;
    }

    try {
        // Parse the entered JSON data
        var newNotification = JSON.parse(newNotificationInput);

        // Validate the new notification object (you can add your custom validation logic here)
        var isValidNotification = validateNotification(newNotification);

        if (isValidNotification) {
            // Insert the new notification object into the existing notifications array
            jsonData.notifications.push(newNotification);
            displayCurrentData();
            alert("New notification added successfully!");
        } else {
            alert("Invalid notification object! It does not follow the correct JSON structure.");
        }

    } catch (error) {
        alert("Error parsing the JSON data. Please enter valid JSON format.");
    }
}

function validateNotification(notification) {
    // Implement your custom validation logic here
    // Check if the new notification object follows the correct JSON structure
    // Return true if valid, false otherwise
    // You can check for required properties, data types, etc.
    // For simplicity, you can assume it's valid in this example.
    return true;
}

// Display the initial JSON data on page load
displayCurrentData();




