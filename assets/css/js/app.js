// Mock pharmacy database
const pharmacies = [
  { name: "Apollo Pharmacy", location: "Chennai", medicine: "Paracetamol", contact: "9876543210" },
  { name: "MedPlus", location: "Chennai", medicine: "Cetrizine", contact: "9123456780" },
  { name: "HealthCare Pharmacy", location: "Bangalore", medicine: "Paracetamol", contact: "9988776655" },
  { name: "LifeLine Pharmacy", location: "Hyderabad", medicine: "Amoxicillin", contact: "8877665544" }
];

// Handle Search
document.getElementById("findForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let medicine = document.getElementById("medicineName").value.trim().toLowerCase();
  let location = document.getElementById("location").value.trim().toLowerCase();

  let resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "<h3>Search Results:</h3>";

  let results = pharmacies.filter(pharmacy =>
    pharmacy.medicine.toLowerCase().includes(medicine) &&
    pharmacy.location.toLowerCase().includes(location)
  );

  if (results.length > 0) {
    results.forEach(p => {
      resultsDiv.innerHTML += `
        <div class="pharmacy-card">
          <h4>${p.name}</h4>
          <p><strong>Medicine:</strong> ${p.medicine}</p>
          <p><strong>Location:</strong> ${p.location}</p>
          <p><strong>Contact:</strong> ${p.contact}</p>
        </div>
      `;
    });
  } else {
    resultsDiv.innerHTML += "<p>No pharmacy found for given search.</p>";
  }
});



// Language Change Alert (placeholder)
document.getElementById("languageSelect").addEventListener("change", function() {
  let selectedLang = this.options[this.selectedIndex].text;
  alert("Language changed to: " + selectedLang);
});
